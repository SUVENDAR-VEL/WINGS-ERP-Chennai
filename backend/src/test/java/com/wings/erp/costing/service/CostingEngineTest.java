package com.wings.erp.costing.service;

import com.wings.erp.costing.dto.CostCalculationDto;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import java.math.BigDecimal;

class CostingEngineTest {
    
    @Test
    void testCalculate_withStandardRates() {
        CostingEngineService engine = new CostingEngineService();
        
        CostCalculationDto result = engine.calculate(
            new BigDecimal("100.00"), // RM
            new BigDecimal("50.00"),  // Machine
            new BigDecimal("30.00"),  // Labour
            new BigDecimal("10.00"),  // Power
            new BigDecimal("5.00"),   // Tooling
            new BigDecimal("20.00"),  // Outside Process
            new BigDecimal("10.00"),  // Overhead %
            new BigDecimal("2.00"),   // Rejection %
            new BigDecimal("15.00")   // Profit %
        );
        
        // Base = 100+50+30+10+5+20 = 215.00
        // Overhead = 215 * 0.10 = 21.50
        // CostWithOverhead = 236.50
        // Rejection = 236.50 * 0.02 = 4.73
        // TotalManufacturing = 236.50 + 4.73 = 241.23
        // Profit = 241.23 * 0.15 = 36.1845 -> half_up -> 36.18
        // Quoted Unit Price = 241.23 + 36.18 = 277.41
        
        assertEquals(new BigDecimal("21.50"), result.getOverhead());
        assertEquals(new BigDecimal("4.73"), result.getRejection());
        assertEquals(new BigDecimal("241.23"), result.getTotalManufacturingCost());
        assertEquals(new BigDecimal("36.18"), result.getProfitAmount());
        assertEquals(new BigDecimal("277.41"), result.getQuotedUnitPrice());
    }
}
