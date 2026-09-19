package com.wings.erp.inventory.serviceimpl;

import com.wings.erp.inventory.entity.ItemMaster;
import com.wings.erp.inventory.entity.StockLedger;
import com.wings.erp.inventory.enums.TransactionType;
import com.wings.erp.inventory.repository.ItemMasterRepository;
import com.wings.erp.inventory.repository.StockLedgerRepository;
import com.wings.erp.inventory.serviceinterface.StockTransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
public class StockTransactionServiceImpl implements StockTransactionService {

    @Autowired
    private StockLedgerRepository stockLedgerRepository;

    @Autowired
    private ItemMasterRepository itemMasterRepository;

    @Override
    @Transactional
    public StockLedger processTransaction(UUID itemId, TransactionType type, BigDecimal quantity, String uom, String referenceNumber, String remarks) {
        if (quantity == null || quantity.compareTo(BigDecimal.ZERO) == 0) {
            throw new IllegalArgumentException("Quantity cannot be zero");
        }

        // For non-adjustment types, quantity must be positive
        if (type != TransactionType.ADJUSTMENT && quantity.compareTo(BigDecimal.ZERO) < 0) {
            throw new IllegalArgumentException("Quantity must be positive for this transaction type");
        }

        ItemMaster item = itemMasterRepository.findById(itemId)
                .orElseThrow(() -> new RuntimeException("Item not found"));

        BigDecimal currentStock = item.getCurrentStock();
        if (currentStock == null) {
            currentStock = BigDecimal.ZERO;
        }

        BigDecimal newStock = currentStock;

        // Process based on transaction type
        switch (type) {
            case OPENING:
            case RECEIPT:
                newStock = currentStock.add(quantity);
                break;
            case ISSUE:
            case CONSUMPTION:
            case SCRAP:
            case TRANSFER:
                newStock = currentStock.subtract(quantity);
                if (newStock.compareTo(BigDecimal.ZERO) < 0) {
                    throw new RuntimeException("Insufficient stock for item: " + item.getItemCode());
                }
                break;
            case ADJUSTMENT:
                // For adjustment, quantity can be positive or negative
                newStock = currentStock.add(quantity);
                if (newStock.compareTo(BigDecimal.ZERO) < 0) {
                    throw new RuntimeException("Adjustment results in negative stock for item: " + item.getItemCode());
                }
                break;
        }

        item.setCurrentStock(newStock);
        itemMasterRepository.save(item); // Optimistic locking will handle race conditions

        StockLedger ledger = new StockLedger();
        ledger.setTransactionDate(LocalDateTime.now());
        ledger.setTransactionType(type);
        ledger.setReferenceNumber(referenceNumber);
        ledger.setItem(item);
        ledger.setQuantity(quantity);
        ledger.setUom(uom);
        ledger.setRemarks(remarks);

        return stockLedgerRepository.save(ledger);
    }

    @Override
    public List<StockLedger> getStockLedgerByItem(UUID itemId) {
        return stockLedgerRepository.findByItemIdOrderByTransactionDateDesc(itemId);
    }
}
