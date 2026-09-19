package com.wings.erp.inventory.controller;

import com.wings.erp.inventory.entity.RawMaterialReceipt;
import com.wings.erp.inventory.serviceinterface.RawMaterialReceiptService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/inventory/receipts")
@CrossOrigin(origins = "*", maxAge = 3600)
public class RawMaterialReceiptController {

    @Autowired
    private RawMaterialReceiptService rawMaterialReceiptService;

    @PostMapping
    public ResponseEntity<RawMaterialReceipt> createReceipt(@RequestBody RawMaterialReceipt receipt) {
        return ResponseEntity.ok(rawMaterialReceiptService.createReceipt(receipt));
    }

    @GetMapping("/{id}")
    public ResponseEntity<RawMaterialReceipt> getReceiptById(@PathVariable UUID id) {
        return ResponseEntity.ok(rawMaterialReceiptService.getReceiptById(id));
    }

    @GetMapping
    public ResponseEntity<List<RawMaterialReceipt>> getAllReceipts() {
        return ResponseEntity.ok(rawMaterialReceiptService.getAllReceipts());
    }
}
