package com.wings.erp.inventory.controller;

import com.wings.erp.inventory.entity.ItemMaster;
import com.wings.erp.inventory.serviceinterface.ItemMasterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/inventory/items")
@CrossOrigin(origins = "*", maxAge = 3600)
public class ItemMasterController {

    @Autowired
    private ItemMasterService itemMasterService;

    @PostMapping
    public ResponseEntity<ItemMaster> createItem(@RequestBody ItemMaster itemMaster) {
        return ResponseEntity.ok(itemMasterService.createItemMaster(itemMaster));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ItemMaster> updateItem(@PathVariable UUID id, @RequestBody ItemMaster itemMaster) {
        return ResponseEntity.ok(itemMasterService.updateItemMaster(id, itemMaster));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ItemMaster> getItemById(@PathVariable UUID id) {
        return ResponseEntity.ok(itemMasterService.getItemMasterById(id));
    }

    @GetMapping
    public ResponseEntity<List<ItemMaster>> getAllItems() {
        return ResponseEntity.ok(itemMasterService.getAllItemMasters());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteItem(@PathVariable UUID id) {
        itemMasterService.deleteItemMaster(id);
        return ResponseEntity.ok().build();
    }
}
