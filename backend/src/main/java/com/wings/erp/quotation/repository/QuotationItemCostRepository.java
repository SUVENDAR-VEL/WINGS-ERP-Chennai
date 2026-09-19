package com.wings.erp.quotation.repository;
import com.wings.erp.quotation.entity.QuotationItemCost;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;
public interface QuotationItemCostRepository extends JpaRepository<QuotationItemCost, UUID> {}
