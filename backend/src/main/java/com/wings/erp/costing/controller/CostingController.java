package com.wings.erp.costing.controller;
import com.wings.erp.common.response.ApiResponse;
import com.wings.erp.costing.entity.CostingRateMaster;
import com.wings.erp.costing.repository.CostingRateMasterRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/v1/costing-rates")
@RequiredArgsConstructor
public class CostingController {
    private final CostingRateMasterRepository repo;

    @GetMapping
    @PreAuthorize("hasAuthority('SALES_VIEW')")
    public ResponseEntity<ApiResponse<List<CostingRateMaster>>> getAll() {
        return ResponseEntity.ok(new ApiResponse<>(true, "Success", repo.findAll(), null, null));
    }
}
