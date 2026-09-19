package com.wings.erp.sales.serviceimpl;
import com.wings.erp.sales.entity.CustomerPurchaseOrder;
import com.wings.erp.sales.repository.PurchaseOrderRepository;
import com.wings.erp.sales.serviceinterface.PurchaseOrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PurchaseOrderServiceImpl implements PurchaseOrderService {
    private final PurchaseOrderRepository repository;

    @Override
    public List<CustomerPurchaseOrder> getAll() {
        return repository.findAll();
    }
}
