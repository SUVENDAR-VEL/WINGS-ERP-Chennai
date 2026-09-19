package com.wings.erp.quotation.repository;
import com.wings.erp.quotation.entity.QuotationItem;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;
public interface QuotationItemRepository extends JpaRepository<QuotationItem, UUID> {}
