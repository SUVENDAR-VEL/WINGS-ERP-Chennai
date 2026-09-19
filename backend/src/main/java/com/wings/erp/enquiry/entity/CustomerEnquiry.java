package com.wings.erp.enquiry.entity;

import com.wings.erp.common.entity.BaseEntity;
import com.wings.erp.common.enums.EnquiryPriority;
import com.wings.erp.common.enums.EnquiryStatus;
import com.wings.erp.customer.entity.Customer;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "customer_enquiries")
@Getter
@Setter
public class CustomerEnquiry extends BaseEntity {

    @Column(name = "enquiry_number", nullable = false, unique = true, length = 50)
    private String enquiryNumber;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customer_id", nullable = false)
    private Customer customer;

    @Column(name = "enquiry_date", nullable = false)
    private LocalDate enquiryDate;

    @Column(name = "expected_delivery_date")
    private LocalDate expectedDeliveryDate;

    @Column(length = 100)
    private String source;

    @Enumerated(EnumType.STRING)
    @Column(length = 50)
    private EnquiryPriority priority;

    @Column(columnDefinition = "TEXT")
    private String notes;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 50)
    private EnquiryStatus status = EnquiryStatus.NEW;

    @OneToMany(mappedBy = "enquiry", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<CustomerEnquiryItem> items = new ArrayList<>();
    
    public void addItem(CustomerEnquiryItem item) {
        items.add(item);
        item.setEnquiry(this);
    }
}
