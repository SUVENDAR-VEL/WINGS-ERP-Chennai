package com.wings.erp.costing.service;
import com.wings.erp.costing.dto.CostCalculationDto;
import org.springframework.stereotype.Service;
import java.math.BigDecimal;
import java.math.RoundingMode;

@Service
public class CostingEngineService {
    
    public CostCalculationDto calculate(
            BigDecimal rawMaterial, BigDecimal machine, BigDecimal labour,
            BigDecimal power, BigDecimal tooling, BigDecimal outsideProcess,
            BigDecimal overheadPercent, BigDecimal rejectionPercent, BigDecimal profitMarginPercent) {
            
        CostCalculationDto result = new CostCalculationDto();
        result.setRawMaterial(rawMaterial != null ? rawMaterial : BigDecimal.ZERO);
        result.setMachine(machine != null ? machine : BigDecimal.ZERO);
        result.setLabour(labour != null ? labour : BigDecimal.ZERO);
        result.setPower(power != null ? power : BigDecimal.ZERO);
        result.setTooling(tooling != null ? tooling : BigDecimal.ZERO);
        result.setOutsideProcess(outsideProcess != null ? outsideProcess : BigDecimal.ZERO);
        
        BigDecimal baseCost = result.getRawMaterial()
                .add(result.getMachine())
                .add(result.getLabour())
                .add(result.getPower())
                .add(result.getTooling())
                .add(result.getOutsideProcess());
                
        // Overhead is percentage of base cost
        BigDecimal overhead = baseCost.multiply(overheadPercent != null ? overheadPercent : BigDecimal.ZERO)
                .divide(BigDecimal.valueOf(100), 2, RoundingMode.HALF_UP);
        result.setOverhead(overhead);
        
        BigDecimal costWithOverhead = baseCost.add(overhead);
        
        // Rejection is percentage of costWithOverhead
        BigDecimal rejection = costWithOverhead.multiply(rejectionPercent != null ? rejectionPercent : BigDecimal.ZERO)
                .divide(BigDecimal.valueOf(100), 2, RoundingMode.HALF_UP);
        result.setRejection(rejection);
        
        BigDecimal totalManufacturingCost = costWithOverhead.add(rejection);
        result.setTotalManufacturingCost(totalManufacturingCost);
        
        // Profit is percentage of total manufacturing cost
        BigDecimal actualProfitPercent = profitMarginPercent != null ? profitMarginPercent : BigDecimal.ZERO;
        result.setProfitMarginPercent(actualProfitPercent);
        
        BigDecimal profitAmount = totalManufacturingCost.multiply(actualProfitPercent)
                .divide(BigDecimal.valueOf(100), 2, RoundingMode.HALF_UP);
        result.setProfitAmount(profitAmount);
        
        BigDecimal quotedUnitPrice = totalManufacturingCost.add(profitAmount);
        result.setQuotedUnitPrice(quotedUnitPrice);
        
        return result;
    }
}
