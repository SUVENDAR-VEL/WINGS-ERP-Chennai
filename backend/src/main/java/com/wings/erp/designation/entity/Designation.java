package com.wings.erp.designation.entity;

import com.wings.erp.common.entity.BaseEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "designations")
@Getter
@Setter
public class Designation extends BaseEntity {

    @Column(nullable = false, unique = true, length = 100)
    private String name;

    private Integer level;

    @Column(nullable = false)
    private boolean active = true;
}
