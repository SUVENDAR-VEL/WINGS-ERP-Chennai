package com.wings.erp.enquiry.serviceinterface;
import com.wings.erp.enquiry.dto.EnquiryCreateDto;
import com.wings.erp.enquiry.entity.CustomerEnquiry;
import java.util.List;
public interface EnquiryService {
    List<CustomerEnquiry> getAll();
    CustomerEnquiry create(EnquiryCreateDto dto);
}
