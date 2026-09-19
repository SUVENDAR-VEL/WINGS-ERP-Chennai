package com.wings.erp.sales.entity;
import com.wings.erp.common.entity.BaseEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name = "sales_order_items")
@Getter
@Setter
public class SalesOrderItem extends BaseEntity {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "sales_order_id", nullable = false)
    private SalesOrder salesOrder;

    @Column(name = "part_number", nullable = false, length = 100)
    private String partNumber;

    @Column(name = "part_name", nullable = false, length = 255)
    private String partName;

    @Column(name = "drawing_number", length = 100)
    private String drawingNumber;

    @Column(length = 50)
    private String revision;

    @Column(name = "ordered_quantity", nullable = false)
    private Integer orderedQuantity;

    @Column(name = "unit_price", nullable = false)
    private BigDecimal unitPrice;

    @Column(name = "total_value", nullable = false)
    private BigDecimal totalValue;

    @Column(name = "delivery_date")
    private LocalDate deliveryDate;

    @Column(name = "produced_quantity", nullable = false)
    private Integer producedQuantity = 0;

    @Column(name = "rejected_quantity", nullable = false)
    private Integer rejectedQuantity = 0;

    @Column(name = "delivered_quantity", nullable = false)
    private Integer deliveredQuantity = 0;

    @Column(name = "balance_quantity", nullable = false)
    private Integer balanceQuantity = 0;

    @PrePersist
    @PreUpdate
    public void calculateBalance() {
        if (orderedQuantity == null) orderedQuantity = 0;
        if (deliveredQuantity == null) deliveredQuantity = 0;
        
        // Prevent negative balances if over-delivered is not allowed
        int balance = orderedQuantity - deliveredQuantity;
        this.balanceQuantity = Math.max(balance, 0);
    }
}
