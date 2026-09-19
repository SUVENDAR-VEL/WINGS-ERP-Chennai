package com.wings.erp.enquiry.dto;
import com.wings.erp.common.enums.EnquiryPriority;
import lombok.Data;
import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@Data
public class EnquiryCreateDto {
    private UUID customerId;
    private LocalDate enquiryDate;
    private LocalDate expectedDeliveryDate;
    private String source;
    private EnquiryPriority priority;
    private String notes;
    private List<EnquiryItemDto> items;
}
