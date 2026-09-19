package com.wings.erp.employee.serviceinterface;
import com.wings.erp.employee.dto.EmployeeDto;
import java.util.List;
import java.util.UUID;
public interface EmployeeService {
    List<EmployeeDto> getAllEmployees();
    EmployeeDto getEmployee(UUID id);
    EmployeeDto createEmployee(EmployeeDto dto);
    String getSensitiveInfo(UUID id);
}
