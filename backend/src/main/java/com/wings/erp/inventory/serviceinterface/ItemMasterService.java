package com.wings.erp.inventory.serviceinterface;

import com.wings.erp.inventory.entity.ItemMaster;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface ItemMasterService {
    ItemMaster createItemMaster(ItemMaster itemMaster);
    ItemMaster updateItemMaster(UUID id, ItemMaster itemMaster);
    ItemMaster getItemMasterById(UUID id);
    List<ItemMaster> getAllItemMasters();
    void deleteItemMaster(UUID id);
    Optional<ItemMaster> findByItemCode(String itemCode);
}
