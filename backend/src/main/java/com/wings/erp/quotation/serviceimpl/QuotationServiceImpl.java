package com.wings.erp.quotation.serviceimpl;
import com.wings.erp.common.enums.QuotationStatus;
import com.wings.erp.quotation.entity.Quotation;
import com.wings.erp.quotation.entity.QuotationItem;
import com.wings.erp.quotation.entity.QuotationItemCost;
import com.wings.erp.quotation.repository.QuotationRepository;
import com.wings.erp.quotation.serviceinterface.QuotationService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class QuotationServiceImpl implements QuotationService {
    private final QuotationRepository repository;

    @Override
    public List<Quotation> getAll() {
        return repository.findAll();
    }
    
    @Override
    public Quotation getById(UUID id) {
        return repository.findById(id).orElseThrow();
    }

    @Override
    @Transactional
    public Quotation createNextVersion(UUID originalQuotationId) {
        Quotation original = repository.findById(originalQuotationId).orElseThrow();
        
        Quotation newVersion = new Quotation();
        newVersion.setQuotationNumber(original.getQuotationNumber());
        newVersion.setVersion(original.getVersion() + 1);
        newVersion.setEnquiry(original.getEnquiry());
        newVersion.setCustomer(original.getCustomer());
        newVersion.setQuotationDate(original.getQuotationDate());
        newVersion.setValidityDate(original.getValidityDate());
        newVersion.setStatus(QuotationStatus.DRAFT);
        newVersion.setPaymentTerms(original.getPaymentTerms());
        newVersion.setDeliveryTerms(original.getDeliveryTerms());
        newVersion.setNotes(original.getNotes());
        
        // Deep copy items and costs
        for (QuotationItem originalItem : original.getItems()) {
            QuotationItem newItem = new QuotationItem();
            newItem.setEnquiryItem(originalItem.getEnquiryItem());
            newItem.setPartNumber(originalItem.getPartNumber());
            newItem.setDrawingNumber(originalItem.getDrawingNumber());
            newItem.setRevision(originalItem.getRevision());
            newItem.setQuantity(originalItem.getQuantity());
            newItem.setEstimatedUnitCost(originalItem.getEstimatedUnitCost());
            newItem.setProfitMarginPercent(originalItem.getProfitMarginPercent());
            newItem.setQuotedUnitPrice(originalItem.getQuotedUnitPrice());
            newItem.setTotalValue(originalItem.getTotalValue());
            newItem.setDeliveryDate(originalItem.getDeliveryDate());
            
            for (QuotationItemCost origCost : originalItem.getItemCosts()) {
                QuotationItemCost newCost = new QuotationItemCost();
                newCost.setCostComponent(origCost.getCostComponent());
                newCost.setStandardRate(origCost.getStandardRate());
                newCost.setActualRate(origCost.getActualRate());
                newCost.setCalculatedValue(origCost.getCalculatedValue());
                newItem.addItemCost(newCost);
            }
            
            newVersion.addItem(newItem);
        }
        
        return repository.save(newVersion);
    }
    
    @Override
    @Transactional
    public void approveQuotation(UUID quotationId) {
        Quotation quotation = repository.findById(quotationId).orElseThrow();
        // Transition to SENT after approval
        quotation.setStatus(QuotationStatus.SENT);
        repository.save(quotation);
    }
}
