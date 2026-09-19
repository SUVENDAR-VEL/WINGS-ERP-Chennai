package com.wings.erp.quotation.entity;
import com.wings.erp.common.entity.BaseEntity;
import com.wings.erp.common.enums.QuotationStatus;
import com.wings.erp.customer.entity.Customer;
import com.wings.erp.enquiry.entity.CustomerEnquiry;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "quotations")
@Getter
@Setter
public class Quotation extends BaseEntity {
    @Column(name = "quotation_number", nullable = false, length = 50)
    private String quotationNumber;

    @Column(nullable = false)
    private Integer version = 1;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "enquiry_id", nullable = false)
    private CustomerEnquiry enquiry;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customer_id", nullable = false)
    private Customer customer;

    @Column(name = "quotation_date", nullable = false)
    private LocalDate quotationDate;

    @Column(name = "validity_date")
    private LocalDate validityDate;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 50)
    private QuotationStatus status = QuotationStatus.DRAFT;

    @Column(name = "payment_terms", columnDefinition = "TEXT")
    private String paymentTerms;

    @Column(name = "delivery_terms", columnDefinition = "TEXT")
    private String deliveryTerms;

    @Column(columnDefinition = "TEXT")
    private String notes;

    @Column(name = "approved_by")
    private UUID approvedBy;

    @OneToMany(mappedBy = "quotation", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<QuotationItem> items = new ArrayList<>();

    public void addItem(QuotationItem item) {
        items.add(item);
        item.setQuotation(this);
    }
}
