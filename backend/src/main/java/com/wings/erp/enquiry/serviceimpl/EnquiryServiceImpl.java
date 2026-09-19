package com.wings.erp.enquiry.serviceimpl;
import com.wings.erp.common.enums.EnquiryStatus;
import com.wings.erp.customer.repository.CustomerRepository;
import com.wings.erp.enquiry.dto.EnquiryCreateDto;
import com.wings.erp.enquiry.entity.CustomerEnquiry;
import com.wings.erp.enquiry.entity.CustomerEnquiryItem;
import com.wings.erp.enquiry.repository.CustomerEnquiryRepository;
import com.wings.erp.enquiry.serviceinterface.EnquiryService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
public class EnquiryServiceImpl implements EnquiryService {
    private final CustomerEnquiryRepository enquiryRepo;
    private final CustomerRepository customerRepo;

    @Override
    public List<CustomerEnquiry> getAll() {
        return enquiryRepo.findAll();
    }

    @Override
    @Transactional
    public CustomerEnquiry create(EnquiryCreateDto dto) {
        CustomerEnquiry enquiry = new CustomerEnquiry();
        enquiry.setEnquiryNumber("ENQ-" + System.currentTimeMillis());
        enquiry.setCustomer(customerRepo.findById(dto.getCustomerId()).orElseThrow());
        enquiry.setEnquiryDate(dto.getEnquiryDate());
        enquiry.setExpectedDeliveryDate(dto.getExpectedDeliveryDate());
        enquiry.setSource(dto.getSource());
        enquiry.setPriority(dto.getPriority());
        enquiry.setNotes(dto.getNotes());
        enquiry.setStatus(EnquiryStatus.NEW);

        if (dto.getItems() != null) {
            dto.getItems().forEach(itemDto -> {
                CustomerEnquiryItem item = new CustomerEnquiryItem();
                item.setPartNumber(itemDto.getPartNumber());
                item.setPartName(itemDto.getPartName());
                item.setDrawingNumber(itemDto.getDrawingNumber());
                item.setRevision(itemDto.getRevision());
                item.setMaterial(itemDto.getMaterial());
                item.setRequestedQuantity(itemDto.getRequestedQuantity());
                item.setTargetDeliveryDate(itemDto.getTargetDeliveryDate());
                item.setCustomerRemarks(itemDto.getCustomerRemarks());
                enquiry.addItem(item);
            });
        }
        
        return enquiryRepo.save(enquiry);
    }
}
