package com.wings.erp.audit.serviceimpl;
import com.wings.erp.audit.entity.AuditLog;
import com.wings.erp.audit.repository.AuditLogRepository;
import com.wings.erp.audit.serviceinterface.AuditService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
@Service
@RequiredArgsConstructor
public class AuditServiceImpl implements AuditService {
    private final AuditLogRepository repository;
    @Override
    public void logAction(String action, String entityName, java.util.UUID entityId, String details) {
        AuditLog log = new AuditLog();
        log.setAction(action);
        log.setEntityName(entityName);
        log.setEntityId(entityId);
        log.setDetails(details);
        repository.save(log);
    }
}
