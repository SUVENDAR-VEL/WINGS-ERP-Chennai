package com.wings.erp.employee.serviceimpl;
import com.wings.erp.employee.dto.EmployeeDto;
import com.wings.erp.employee.entity.Employee;
import com.wings.erp.employee.entity.EmployeeSensitiveInfo;
import com.wings.erp.employee.repository.EmployeeRepository;
import com.wings.erp.employee.repository.EmployeeSensitiveInfoRepository;
import com.wings.erp.employee.serviceinterface.EmployeeService;
import com.wings.erp.common.exception.ResourceNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {
    private final EmployeeRepository employeeRepository;
    private final EmployeeSensitiveInfoRepository sensitiveInfoRepository;

    @Override
    public List<EmployeeDto> getAllEmployees() {
        return employeeRepository.findAll().stream().map(this::mapToDto).collect(Collectors.toList());
    }

    @Override
    public EmployeeDto getEmployee(UUID id) {
        return employeeRepository.findById(id).map(this::mapToDto)
            .orElseThrow(() -> new ResourceNotFoundException("Employee not found"));
    }

    @Override
    @Transactional
    public EmployeeDto createEmployee(EmployeeDto dto) {
        Employee emp = new Employee();
        emp.setEmployeeCode(dto.getEmployeeCode());
        emp.setFirstName(dto.getFirstName());
        emp.setLastName(dto.getLastName());
        emp.setEmail(dto.getEmail());
        emp.setMobileNumber(dto.getMobileNumber());
        emp.setStatus(dto.getStatus() != null ? dto.getStatus() : "ACTIVE");
        emp.setJoiningDate(dto.getJoiningDate());
        emp = employeeRepository.save(emp);
        return mapToDto(emp);
    }

    @Override
    public String getSensitiveInfo(UUID id) {
        return sensitiveInfoRepository.findByEmployeeId(id)
            .map(EmployeeSensitiveInfo::getBankDetailsJson)
            .orElse("{}");
    }

    private EmployeeDto mapToDto(Employee emp) {
        EmployeeDto dto = new EmployeeDto();
        dto.setId(emp.getId());
        dto.setEmployeeCode(emp.getEmployeeCode());
        dto.setFirstName(emp.getFirstName());
        dto.setLastName(emp.getLastName());
        dto.setEmail(emp.getEmail());
        dto.setMobileNumber(emp.getMobileNumber());
        dto.setStatus(emp.getStatus());
        dto.setJoiningDate(emp.getJoiningDate());
        if (emp.getDepartment() != null) dto.setDepartmentName(emp.getDepartment().getName());
        if (emp.getDesignation() != null) dto.setDesignationName(emp.getDesignation().getName());
        if (emp.getUnit() != null) dto.setUnitName(emp.getUnit().getName());
        return dto;
    }
}
