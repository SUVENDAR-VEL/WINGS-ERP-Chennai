package com.wings.erp.audit.repository;
import com.wings.erp.audit.entity.AuditLog;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;
public interface AuditLogRepository extends JpaRepository<AuditLog, UUID> {}
