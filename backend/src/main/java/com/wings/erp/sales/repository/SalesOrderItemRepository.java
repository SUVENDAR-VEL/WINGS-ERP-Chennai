package com.wings.erp.sales.repository;
import com.wings.erp.sales.entity.SalesOrderItem;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;
public interface SalesOrderItemRepository extends JpaRepository<SalesOrderItem, UUID> {}
