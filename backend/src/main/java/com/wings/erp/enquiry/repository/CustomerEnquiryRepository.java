package com.wings.erp.enquiry.repository;
import com.wings.erp.enquiry.entity.CustomerEnquiry;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;
public interface CustomerEnquiryRepository extends JpaRepository<CustomerEnquiry, UUID> {}
