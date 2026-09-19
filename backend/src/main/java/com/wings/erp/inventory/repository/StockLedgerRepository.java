package com.wings.erp.inventory.repository;

import com.wings.erp.inventory.entity.StockLedger;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface StockLedgerRepository extends JpaRepository<StockLedger, UUID> {
    List<StockLedger> findByItemIdOrderByTransactionDateDesc(UUID itemId);
}
