package com.wings.erp.sales.service;

import com.wings.erp.common.enums.OrderStatus;
import com.wings.erp.sales.entity.SalesOrder;
import com.wings.erp.sales.entity.SalesOrderItem;
import com.wings.erp.sales.repository.SalesOrderItemRepository;
import com.wings.erp.sales.repository.SalesOrderRepository;
import com.wings.erp.sales.serviceimpl.SalesOrderServiceImpl;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;
import java.util.UUID;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

@SpringBootTest
class SalesOrderServiceTest {

    @Mock
    private SalesOrderRepository orderRepository;

    @Mock
    private SalesOrderItemRepository itemRepository;

    @InjectMocks
    private SalesOrderServiceImpl salesOrderService;

    @Test
    void testRegisterDelivery_Success() {
        UUID itemId = UUID.randomUUID();
        SalesOrder order = new SalesOrder();
        order.setStatus(OrderStatus.IN_PRODUCTION);
        
        SalesOrderItem item = new SalesOrderItem();
        item.setSalesOrder(order);
        item.setOrderedQuantity(100);
        item.setDeliveredQuantity(0);
        order.setItems(List.of(item));

        when(itemRepository.findById(itemId)).thenReturn(Optional.of(item));

        salesOrderService.registerDelivery(itemId, 50);

        verify(itemRepository, times(1)).save(item);
        assertEquals(50, item.getDeliveredQuantity());
    }

    @Test
    void testRegisterDelivery_ExceedsOrdered_ThrowsException() {
        UUID itemId = UUID.randomUUID();
        SalesOrderItem item = new SalesOrderItem();
        item.setOrderedQuantity(100);
        item.setDeliveredQuantity(90);

        when(itemRepository.findById(itemId)).thenReturn(Optional.of(item));

        assertThrows(IllegalArgumentException.class, () -> {
            salesOrderService.registerDelivery(itemId, 20); // 90+20 = 110 > 100
        });
    }
}
