package com.wings.erp.inventory.serviceimpl;

import com.wings.erp.inventory.entity.ItemMaster;
import com.wings.erp.inventory.repository.ItemMasterRepository;
import com.wings.erp.inventory.serviceinterface.ItemMasterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ItemMasterServiceImpl implements ItemMasterService {

    @Autowired
    private ItemMasterRepository itemMasterRepository;

    @Override
    @Transactional
    public ItemMaster createItemMaster(ItemMaster itemMaster) {
        if (itemMasterRepository.existsByItemCode(itemMaster.getItemCode())) {
            throw new RuntimeException("Item code already exists");
        }
        return itemMasterRepository.save(itemMaster);
    }

    @Override
    @Transactional
    public ItemMaster updateItemMaster(UUID id, ItemMaster itemMasterDetails) {
        ItemMaster itemMaster = getItemMasterById(id);
        if (!itemMaster.getItemCode().equals(itemMasterDetails.getItemCode()) && 
            itemMasterRepository.existsByItemCode(itemMasterDetails.getItemCode())) {
            throw new RuntimeException("Item code already exists");
        }
        itemMaster.setItemCode(itemMasterDetails.getItemCode());
        itemMaster.setItemName(itemMasterDetails.getItemName());
        itemMaster.setCategory(itemMasterDetails.getCategory());
        itemMaster.setMaterial(itemMasterDetails.getMaterial());
        itemMaster.setGrade(itemMasterDetails.getGrade());
        itemMaster.setUnitOfMeasure(itemMasterDetails.getUnitOfMeasure());
        itemMaster.setMinimumStock(itemMasterDetails.getMinimumStock());
        itemMaster.setMaximumStock(itemMasterDetails.getMaximumStock());
        itemMaster.setReorderLevel(itemMasterDetails.getReorderLevel());
        itemMaster.setStatus(itemMasterDetails.getStatus());
        return itemMasterRepository.save(itemMaster);
    }

    @Override
    public ItemMaster getItemMasterById(UUID id) {
        return itemMasterRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Item not found with id: " + id));
    }

    @Override
    public List<ItemMaster> getAllItemMasters() {
        return itemMasterRepository.findAll();
    }

    @Override
    @Transactional
    public void deleteItemMaster(UUID id) {
        ItemMaster item = getItemMasterById(id);
        itemMasterRepository.delete(item);
    }

    @Override
    public Optional<ItemMaster> findByItemCode(String itemCode) {
        return itemMasterRepository.findByItemCode(itemCode);
    }
}
