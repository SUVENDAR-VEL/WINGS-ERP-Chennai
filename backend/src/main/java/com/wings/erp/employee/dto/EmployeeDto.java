package com.wings.erp.employee.dto;
import lombok.Data;
import java.util.UUID;
import java.time.LocalDate;
@Data
public class EmployeeDto {
    private UUID id;
    private String employeeCode;
    private String firstName;
    private String lastName;
    private String email;
    private String mobileNumber;
    private String departmentName;
    private String designationName;
    private String unitName;
    private String status;
    private LocalDate joiningDate;
}
