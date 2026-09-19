package com.wings.erp.enquiry.controller;
import com.wings.erp.common.response.ApiResponse;
import com.wings.erp.enquiry.dto.EnquiryCreateDto;
import com.wings.erp.enquiry.entity.CustomerEnquiry;
import com.wings.erp.enquiry.serviceinterface.EnquiryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/v1/enquiries")
@RequiredArgsConstructor
public class EnquiryController {
    private final EnquiryService service;

    @GetMapping
    @PreAuthorize("hasAuthority('CUSTOMER_VIEW')")
    public ResponseEntity<ApiResponse<List<CustomerEnquiry>>> getAll() {
        return ResponseEntity.ok(new ApiResponse<>(true, "Success", service.getAll(), null, null));
    }

    @PostMapping
    @PreAuthorize("hasAuthority('CUSTOMER_CREATE')")
    public ResponseEntity<ApiResponse<CustomerEnquiry>> create(@RequestBody EnquiryCreateDto dto) {
        return ResponseEntity.ok(new ApiResponse<>(true, "Created", service.create(dto), null, null));
    }
}
