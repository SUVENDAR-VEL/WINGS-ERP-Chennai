package com.wings.erp.customer.serviceinterface;
import com.wings.erp.customer.entity.Customer;
import java.util.List;
public interface CustomerService {
    List<Customer> getAll();
    Customer create(Customer customer);
}
