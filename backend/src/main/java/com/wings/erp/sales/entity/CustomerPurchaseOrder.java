package com.wings.erp.sales.entity;
import com.wings.erp.common.entity.BaseEntity;
import com.wings.erp.customer.entity.Customer;
import com.wings.erp.document.entity.DocumentAttachment;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.time.LocalDate;

@Entity
@Table(name = "customer_purchase_orders")
@Getter
@Setter
public class CustomerPurchaseOrder extends BaseEntity {

    @Column(name = "po_number", nullable = false, unique = true, length = 100)
    private String poNumber;

    @Column(name = "po_date", nullable = false)
    private LocalDate poDate;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customer_id", nullable = false)
    private Customer customer;

    @Column(name = "customer_reference", length = 100)
    private String customerReference;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "document_id")
    private DocumentAttachment document;

    @Column(name = "payment_terms", columnDefinition = "TEXT")
    private String paymentTerms;

    @Column(name = "delivery_terms", columnDefinition = "TEXT")
    private String deliveryTerms;

    @Column(columnDefinition = "TEXT")
    private String notes;
}
