package com.wings.erp.sales.controller;
import com.wings.erp.common.response.ApiResponse;
import com.wings.erp.sales.entity.CustomerPurchaseOrder;
import com.wings.erp.sales.serviceinterface.PurchaseOrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/v1/purchase-orders")
@RequiredArgsConstructor
public class PurchaseOrderController {
    private final PurchaseOrderService service;

    @GetMapping
    @PreAuthorize("hasAuthority('SALES_VIEW')")
    public ResponseEntity<ApiResponse<List<CustomerPurchaseOrder>>> getAll() {
        return ResponseEntity.ok(new ApiResponse<>(true, "Success", service.getAll(), null, null));
    }
}
