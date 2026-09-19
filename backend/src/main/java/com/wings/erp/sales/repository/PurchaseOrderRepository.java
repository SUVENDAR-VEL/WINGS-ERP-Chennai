package com.wings.erp.sales.repository;
import com.wings.erp.sales.entity.CustomerPurchaseOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;
public interface PurchaseOrderRepository extends JpaRepository<CustomerPurchaseOrder, UUID> {}
