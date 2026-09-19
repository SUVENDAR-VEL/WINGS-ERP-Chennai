package com.wings.erp.sales.repository;
import com.wings.erp.sales.entity.SalesOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;
public interface SalesOrderRepository extends JpaRepository<SalesOrder, UUID> {}
