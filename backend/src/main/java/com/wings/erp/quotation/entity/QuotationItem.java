package com.wings.erp.quotation.entity;
import com.wings.erp.common.entity.BaseEntity;
import com.wings.erp.enquiry.entity.CustomerEnquiryItem;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "quotation_items")
@Getter
@Setter
public class QuotationItem extends BaseEntity {
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "quotation_id", nullable = false)
    private Quotation quotation;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "enquiry_item_id")
    private CustomerEnquiryItem enquiryItem;

    @Column(name = "part_number", nullable = false, length = 100)
    private String partNumber;

    @Column(name = "drawing_number", length = 100)
    private String drawingNumber;

    @Column(length = 50)
    private String revision;

    @Column(nullable = false)
    private Integer quantity;

    @Column(name = "estimated_unit_cost", nullable = false)
    private BigDecimal estimatedUnitCost;

    @Column(name = "profit_margin_percent", nullable = false)
    private BigDecimal profitMarginPercent;

    @Column(name = "quoted_unit_price", nullable = false)
    private BigDecimal quotedUnitPrice;

    @Column(name = "total_value", nullable = false)
    private BigDecimal totalValue;

    @Column(name = "delivery_date")
    private LocalDate deliveryDate;

    @OneToMany(mappedBy = "quotationItem", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<QuotationItemCost> itemCosts = new ArrayList<>();

    public void addItemCost(QuotationItemCost cost) {
        itemCosts.add(cost);
        cost.setQuotationItem(this);
    }
}
