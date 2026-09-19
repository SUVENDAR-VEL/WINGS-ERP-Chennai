package com.wings.erp.quotation.controller;
import com.wings.erp.common.response.ApiResponse;
import com.wings.erp.quotation.entity.Quotation;
import com.wings.erp.quotation.serviceinterface.QuotationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/quotations")
@RequiredArgsConstructor
public class QuotationController {
    private final QuotationService service;

    @GetMapping
    @PreAuthorize("hasAuthority('SALES_VIEW')")
    public ResponseEntity<ApiResponse<List<Quotation>>> getAll() {
        return ResponseEntity.ok(new ApiResponse<>(true, "Success", service.getAll(), null, null));
    }

    @PostMapping("/{id}/version")
    @PreAuthorize("hasAuthority('SALES_CREATE')")
    public ResponseEntity<ApiResponse<Quotation>> createVersion(@PathVariable UUID id) {
        return ResponseEntity.ok(new ApiResponse<>(true, "Created new version", service.createNextVersion(id), null, null));
    }

    @PostMapping("/{id}/approve")
    @PreAuthorize("hasRole('UNIT_HEAD')") // Or equivalent authority
    public ResponseEntity<ApiResponse<Void>> approve(@PathVariable UUID id) {
        service.approveQuotation(id);
        return ResponseEntity.ok(new ApiResponse<>(true, "Approved", null, null, null));
    }
}
