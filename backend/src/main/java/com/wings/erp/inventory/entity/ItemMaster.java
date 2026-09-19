package com.wings.erp.inventory.entity;

import com.wings.erp.common.entity.BaseEntity;
import com.wings.erp.inventory.enums.ItemCategory;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Table;
import jakarta.persistence.Version;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Entity
@Table(name = "item_master")
@Getter
@Setter
public class ItemMaster extends BaseEntity {

    @Column(name = "item_code", nullable = false, unique = true, length = 50)
    private String itemCode;

    @Column(name = "item_name", nullable = false, length = 255)
    private String itemName;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 50)
    private ItemCategory category;

    @Column(length = 100)
    private String material;

    @Column(length = 100)
    private String grade;

    @Column(name = "unit_of_measure", nullable = false, length = 20)
    private String unitOfMeasure;

    @Column(name = "minimum_stock", precision = 19, scale = 4)
    private BigDecimal minimumStock = BigDecimal.ZERO;

    @Column(name = "maximum_stock", precision = 19, scale = 4)
    private BigDecimal maximumStock = BigDecimal.ZERO;

    @Column(name = "reorder_level", precision = 19, scale = 4)
    private BigDecimal reorderLevel = BigDecimal.ZERO;

    @Column(length = 50)
    private String status = "ACTIVE";

    @Column(name = "current_stock", nullable = false, precision = 19, scale = 4)
    private BigDecimal currentStock = BigDecimal.ZERO;

    @Version
    private Long version;
}
