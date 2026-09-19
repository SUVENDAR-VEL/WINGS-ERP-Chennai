package com.wings.erp.employee.entity;

import com.wings.erp.common.entity.BaseEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "employee_sensitive_info")
@Getter
@Setter
public class EmployeeSensitiveInfo extends BaseEntity {

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "employee_id", nullable = false, unique = true)
    private Employee employee;

    @Column(name = "aadhaar_number", length = 255)
    private String aadhaarNumber;

    @Column(name = "pan_number", length = 255)
    private String panNumber;

    @Column(name = "bank_details_json", columnDefinition = "TEXT")
    private String bankDetailsJson;
}
