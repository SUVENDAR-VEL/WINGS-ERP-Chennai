package com.wings.erp.customer.serviceimpl;
import com.wings.erp.customer.entity.Customer;
import com.wings.erp.customer.repository.CustomerRepository;
import com.wings.erp.customer.serviceinterface.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CustomerServiceImpl implements CustomerService {
    private final CustomerRepository repository;

    @Override
    public List<Customer> getAll() {
        return repository.findAll();
    }

    @Override
    @Transactional
    public Customer create(Customer customer) {
        Long seq = repository.getNextCustomerCodeSequence();
        customer.setCustomerCode(String.format("CUST-%04d", seq));
        return repository.save(customer);
    }
}
