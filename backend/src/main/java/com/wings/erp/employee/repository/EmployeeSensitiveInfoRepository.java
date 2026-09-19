package com.wings.erp.employee.repository;
import com.wings.erp.employee.entity.EmployeeSensitiveInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
import java.util.UUID;
public interface EmployeeSensitiveInfoRepository extends JpaRepository<EmployeeSensitiveInfo, UUID> {
    Optional<EmployeeSensitiveInfo> findByEmployeeId(UUID employeeId);
}
