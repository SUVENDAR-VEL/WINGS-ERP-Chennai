package com.wings.erp.enquiry.repository;
import com.wings.erp.enquiry.entity.CustomerEnquiryItem;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;
public interface CustomerEnquiryItemRepository extends JpaRepository<CustomerEnquiryItem, UUID> {}
