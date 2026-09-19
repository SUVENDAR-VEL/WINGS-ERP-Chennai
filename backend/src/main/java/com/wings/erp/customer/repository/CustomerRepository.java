package com.wings.erp.customer.repository;
import com.wings.erp.customer.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.UUID;
public interface CustomerRepository extends JpaRepository<Customer, UUID> {
    @Query(value = "SELECT nextval('customer_code_seq')", nativeQuery = true)
    Long getNextCustomerCodeSequence();
}
