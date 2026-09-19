package com.wings.erp.enquiry.dto;
import lombok.Data;
import java.time.LocalDate;

@Data
public class EnquiryItemDto {
    private String partNumber;
    private String partName;
    private String drawingNumber;
    private String revision;
    private String material;
    private Integer requestedQuantity;
    private LocalDate targetDeliveryDate;
    private String customerRemarks;
}
