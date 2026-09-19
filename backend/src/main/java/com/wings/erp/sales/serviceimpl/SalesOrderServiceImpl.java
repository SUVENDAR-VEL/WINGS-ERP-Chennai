package com.wings.erp.sales.serviceimpl;
import com.wings.erp.common.enums.OrderStatus;
import com.wings.erp.sales.entity.SalesOrder;
import com.wings.erp.sales.entity.SalesOrderItem;
import com.wings.erp.sales.repository.SalesOrderItemRepository;
import com.wings.erp.sales.repository.SalesOrderRepository;
import com.wings.erp.sales.serviceinterface.SalesOrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class SalesOrderServiceImpl implements SalesOrderService {
    private final SalesOrderRepository orderRepository;
    private final SalesOrderItemRepository itemRepository;

    @Override
    public List<SalesOrder> getAll() {
        return orderRepository.findAll();
    }
    
    @Override
    public SalesOrder getById(UUID id) {
        return orderRepository.findById(id).orElseThrow();
    }

    @Override
    @Transactional
    public void registerProduction(UUID itemId, int quantity) {
        if (quantity < 0) throw new IllegalArgumentException("Quantity cannot be negative");
        SalesOrderItem item = itemRepository.findById(itemId).orElseThrow();
        item.setProducedQuantity(item.getProducedQuantity() + quantity);
        itemRepository.save(item);
        updateOrderStatus(item.getSalesOrder());
    }

    @Override
    @Transactional
    public void registerDelivery(UUID itemId, int quantity) {
        if (quantity < 0) throw new IllegalArgumentException("Quantity cannot be negative");
        SalesOrderItem item = itemRepository.findById(itemId).orElseThrow();
        int newDelivered = item.getDeliveredQuantity() + quantity;
        if (newDelivered > item.getOrderedQuantity()) {
            throw new IllegalArgumentException("Cannot deliver more than ordered quantity");
        }
        item.setDeliveredQuantity(newDelivered);
        itemRepository.save(item);
        updateOrderStatus(item.getSalesOrder());
    }

    @Override
    @Transactional
    public void registerRejection(UUID itemId, int quantity) {
        if (quantity < 0) throw new IllegalArgumentException("Quantity cannot be negative");
        SalesOrderItem item = itemRepository.findById(itemId).orElseThrow();
        item.setRejectedQuantity(item.getRejectedQuantity() + quantity);
        itemRepository.save(item);
    }
    
    private void updateOrderStatus(SalesOrder order) {
        boolean allDelivered = true;
        boolean anyProduced = false;
        
        for (SalesOrderItem item : order.getItems()) {
            if (item.getBalanceQuantity() > 0) {
                allDelivered = false;
            }
            if (item.getProducedQuantity() > 0) {
                anyProduced = true;
            }
        }
        
        if (order.getItems().isEmpty()) {
             allDelivered = false; // edge case for empty orders
        }
        
        if (allDelivered) {
            order.setStatus(OrderStatus.COMPLETED);
        } else if (anyProduced) {
            order.setStatus(OrderStatus.IN_PRODUCTION);
        }
        orderRepository.save(order);
    }
}
