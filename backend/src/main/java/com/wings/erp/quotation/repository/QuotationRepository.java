package com.wings.erp.quotation.repository;
import com.wings.erp.quotation.entity.Quotation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.UUID;
public interface QuotationRepository extends JpaRepository<Quotation, UUID> {
    @Query(value = "SELECT nextval('quotation_number_seq')", nativeQuery = true)
    Long getNextQuotationNumber();
}
