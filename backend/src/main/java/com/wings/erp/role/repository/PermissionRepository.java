package com.wings.erp.role.repository;
import com.wings.erp.role.entity.Permission;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;
public interface PermissionRepository extends JpaRepository<Permission, UUID> {}
