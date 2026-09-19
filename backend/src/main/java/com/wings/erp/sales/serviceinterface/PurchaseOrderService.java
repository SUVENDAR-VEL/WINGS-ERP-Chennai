package com.wings.erp.sales.serviceinterface;
import com.wings.erp.sales.entity.CustomerPurchaseOrder;
import java.util.List;
public interface PurchaseOrderService {
    List<CustomerPurchaseOrder> getAll();
}
