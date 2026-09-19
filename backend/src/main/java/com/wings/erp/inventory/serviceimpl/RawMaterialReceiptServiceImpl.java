package com.wings.erp.inventory.serviceimpl;

import com.wings.erp.inventory.entity.ItemMaster;
import com.wings.erp.inventory.entity.RawMaterialReceipt;
import com.wings.erp.inventory.enums.InspectionStatus;
import com.wings.erp.inventory.enums.TransactionType;
import com.wings.erp.inventory.repository.RawMaterialReceiptRepository;
import com.wings.erp.inventory.serviceinterface.ItemMasterService;
import com.wings.erp.inventory.serviceinterface.RawMaterialReceiptService;
import com.wings.erp.inventory.serviceinterface.StockTransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
public class RawMaterialReceiptServiceImpl implements RawMaterialReceiptService {

    @Autowired
    private RawMaterialReceiptRepository rawMaterialReceiptRepository;

    @Autowired
    private StockTransactionService stockTransactionService;

    @Autowired
    private ItemMasterService itemMasterService;

    @Override
    @Transactional
    public RawMaterialReceipt createReceipt(RawMaterialReceipt receipt) {
        if (rawMaterialReceiptRepository.existsByReceiptNumber(receipt.getReceiptNumber())) {
            throw new RuntimeException("Receipt number already exists");
        }

        // Verify item exists
        ItemMaster item = itemMasterService.getItemMasterById(receipt.getItem().getId());
        receipt.setItem(item);

        if (receipt.getInspectionStatus() == null) {
            receipt.setInspectionStatus(InspectionStatus.PENDING);
        }

        RawMaterialReceipt savedReceipt = rawMaterialReceiptRepository.save(receipt);

        stockTransactionService.processTransaction(
                item.getId(),
                TransactionType.RECEIPT,
                receipt.getQuantity(),
                receipt.getUom(),
                receipt.getReceiptNumber(),
                "Raw Material Receipt - Supplier: " + receipt.getSupplier()
        );

        return savedReceipt;
    }

    @Override
    public RawMaterialReceipt getReceiptById(UUID id) {
        return rawMaterialReceiptRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Receipt not found with id: " + id));
    }

    @Override
    public List<RawMaterialReceipt> getAllReceipts() {
        return rawMaterialReceiptRepository.findAll();
    }
}
