package com.wings.erp.inventory.controller;

import com.wings.erp.inventory.entity.StockLedger;
import com.wings.erp.inventory.enums.TransactionType;
import com.wings.erp.inventory.serviceinterface.StockTransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/inventory/transactions")
@CrossOrigin(origins = "*", maxAge = 3600)
public class StockTransactionController {

    @Autowired
    private StockTransactionService stockTransactionService;

    public static class TransactionRequest {
        public UUID itemId;
        public TransactionType type;
        public BigDecimal quantity;
        public String uom;
        public String referenceNumber;
        public String remarks;
    }

    @PostMapping
    public ResponseEntity<StockLedger> processTransaction(@RequestBody TransactionRequest request) {
        StockLedger ledger = stockTransactionService.processTransaction(
                request.itemId,
                request.type,
                request.quantity,
                request.uom,
                request.referenceNumber,
                request.remarks
        );
        return ResponseEntity.ok(ledger);
    }

    @GetMapping("/ledger/{itemId}")
    public ResponseEntity<List<StockLedger>> getStockLedgerByItem(@PathVariable UUID itemId) {
        return ResponseEntity.ok(stockTransactionService.getStockLedgerByItem(itemId));
    }
}
