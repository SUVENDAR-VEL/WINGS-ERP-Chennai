package com.wings.erp.employee.repository;
import com.wings.erp.employee.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;
public interface EmployeeRepository extends JpaRepository<Employee, UUID> {}
