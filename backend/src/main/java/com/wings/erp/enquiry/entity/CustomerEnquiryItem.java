package com.wings.erp.enquiry.entity;

import com.wings.erp.common.entity.BaseEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Table(name = "customer_enquiry_items")
@Getter
@Setter
public class CustomerEnquiryItem extends BaseEntity {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "enquiry_id", nullable = false)
    private CustomerEnquiry enquiry;

    @Column(name = "part_number", nullable = false, length = 100)
    private String partNumber;

    @Column(name = "part_name", nullable = false, length = 255)
    private String partName;

    @Column(name = "drawing_number", length = 100)
    private String drawingNumber;

    @Column(length = 50)
    private String revision;

    @Column(length = 100)
    private String material;

    @Column(name = "requested_quantity", nullable = false)
    private Integer requestedQuantity;

    @Column(name = "target_delivery_date")
    private LocalDate targetDeliveryDate;

    @Column(name = "customer_remarks", columnDefinition = "TEXT")
    private String customerRemarks;
}
