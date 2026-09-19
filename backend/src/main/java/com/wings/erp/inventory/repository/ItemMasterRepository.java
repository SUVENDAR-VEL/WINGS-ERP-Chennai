package com.wings.erp.inventory.repository;

import com.wings.erp.inventory.entity.ItemMaster;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface ItemMasterRepository extends JpaRepository<ItemMaster, UUID> {
    Optional<ItemMaster> findByItemCode(String itemCode);
    boolean existsByItemCode(String itemCode);
}
