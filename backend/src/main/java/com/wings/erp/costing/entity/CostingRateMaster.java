package com.wings.erp.costing.entity;
import com.wings.erp.common.entity.BaseEntity;
import com.wings.erp.common.enums.CostComponent;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.math.BigDecimal;

@Entity
@Table(name = "costing_rates_master")
@Getter
@Setter
public class CostingRateMaster extends BaseEntity {
    @Enumerated(EnumType.STRING)
    @Column(name = "component_type", nullable = false, unique = true, length = 50)
    private CostComponent componentType;

    @Column(name = "standard_rate", nullable = false)
    private BigDecimal standardRate;

    @Column(name = "unit_of_measure", length = 50)
    private String unitOfMeasure;

    @Column(nullable = false)
    private boolean active = true;
}
