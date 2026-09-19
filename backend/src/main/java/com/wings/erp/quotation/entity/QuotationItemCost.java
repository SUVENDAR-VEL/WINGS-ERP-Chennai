package com.wings.erp.quotation.entity;
import com.wings.erp.common.entity.BaseEntity;
import com.wings.erp.common.enums.CostComponent;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.math.BigDecimal;

@Entity
@Table(name = "quotation_item_costs")
@Getter
@Setter
public class QuotationItemCost extends BaseEntity {
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "quotation_item_id", nullable = false)
    private QuotationItem quotationItem;

    @Enumerated(EnumType.STRING)
    @Column(name = "cost_component", nullable = false, length = 50)
    private CostComponent costComponent;

    @Column(name = "standard_rate")
    private BigDecimal standardRate;

    @Column(name = "actual_rate", nullable = false)
    private BigDecimal actualRate;

    @Column(name = "calculated_value", nullable = false)
    private BigDecimal calculatedValue;
}
