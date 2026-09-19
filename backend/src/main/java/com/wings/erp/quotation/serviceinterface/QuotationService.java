package com.wings.erp.quotation.serviceinterface;
import com.wings.erp.quotation.entity.Quotation;
import java.util.UUID;
import java.util.List;
public interface QuotationService {
    List<Quotation> getAll();
    Quotation getById(UUID id);
    Quotation createNextVersion(UUID originalQuotationId);
    void approveQuotation(UUID quotationId);
}
