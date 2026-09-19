package com.wings.erp.costing.dto;
import lombok.Data;
import java.math.BigDecimal;

@Data
public class CostCalculationDto {
    private BigDecimal rawMaterial;
    private BigDecimal machine;
    private BigDecimal labour;
    private BigDecimal power;
    private BigDecimal tooling;
    private BigDecimal outsideProcess;
    private BigDecimal overhead;
    private BigDecimal rejection;
    private BigDecimal totalManufacturingCost;
    private BigDecimal profitMarginPercent;
    private BigDecimal profitAmount;
    private BigDecimal quotedUnitPrice;
}
