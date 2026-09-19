package com.wings.erp.sales.serviceinterface;
import com.wings.erp.sales.entity.SalesOrder;
import java.util.List;
import java.util.UUID;
public interface SalesOrderService {
    List<SalesOrder> getAll();
    SalesOrder getById(UUID id);
    void registerProduction(UUID itemId, int quantity);
    void registerDelivery(UUID itemId, int quantity);
    void registerRejection(UUID itemId, int quantity);
}
