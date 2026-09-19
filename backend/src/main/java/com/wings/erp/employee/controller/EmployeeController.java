package com.wings.erp.employee.controller;
import com.wings.erp.common.response.ApiResponse;
import com.wings.erp.employee.dto.EmployeeDto;
import com.wings.erp.employee.serviceinterface.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/employees")
@RequiredArgsConstructor
public class EmployeeController {
    private final EmployeeService employeeService;

    @GetMapping
    @PreAuthorize("hasAuthority('EMPLOYEE_VIEW')")
    public ResponseEntity<ApiResponse<List<EmployeeDto>>> getAll() {
        return ResponseEntity.ok(new ApiResponse<>(true, "Success", employeeService.getAllEmployees(), null, null));
    }

    @PostMapping
    @PreAuthorize("hasAuthority('EMPLOYEE_CREATE')")
    public ResponseEntity<ApiResponse<EmployeeDto>> create(@RequestBody EmployeeDto dto) {
        return ResponseEntity.ok(new ApiResponse<>(true, "Created", employeeService.createEmployee(dto), null, null));
    }

    @GetMapping("/{id}/sensitive-info")
    @PreAuthorize("hasAuthority('SENSITIVE_DATA_VIEW')")
    public ResponseEntity<ApiResponse<String>> getSensitiveInfo(@PathVariable UUID id) {
        return ResponseEntity.ok(new ApiResponse<>(true, "Success", employeeService.getSensitiveInfo(id), null, null));
    }
}
