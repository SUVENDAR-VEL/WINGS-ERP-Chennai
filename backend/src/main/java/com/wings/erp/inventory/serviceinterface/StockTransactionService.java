package com.wings.erp.inventory.serviceinterface;

import com.wings.erp.inventory.entity.StockLedger;
import com.wings.erp.inventory.enums.TransactionType;
import java.math.BigDecimal;
import java.util.List;
import java.util.UUID;

public interface StockTransactionService {
    StockLedger processTransaction(UUID itemId, TransactionType type, BigDecimal quantity, String uom, String referenceNumber, String remarks);
    List<StockLedger> getStockLedgerByItem(UUID itemId);
}
