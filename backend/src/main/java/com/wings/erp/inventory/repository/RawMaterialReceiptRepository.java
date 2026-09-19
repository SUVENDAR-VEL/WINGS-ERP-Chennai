package com.wings.erp.inventory.repository;

import com.wings.erp.inventory.entity.RawMaterialReceipt;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface RawMaterialReceiptRepository extends JpaRepository<RawMaterialReceipt, UUID> {
    boolean existsByReceiptNumber(String receiptNumber);
}
