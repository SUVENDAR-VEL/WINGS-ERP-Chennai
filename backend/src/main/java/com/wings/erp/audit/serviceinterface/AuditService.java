package com.wings.erp.audit.serviceinterface;
public interface AuditService {
    void logAction(String action, String entityName, java.util.UUID entityId, String details);
}
