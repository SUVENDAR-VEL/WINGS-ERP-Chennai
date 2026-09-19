package com.wings.erp.inventory.serviceinterface;

import com.wings.erp.inventory.entity.RawMaterialReceipt;
import java.util.List;
import java.util.UUID;

public interface RawMaterialReceiptService {
    RawMaterialReceipt createReceipt(RawMaterialReceipt receipt);
    RawMaterialReceipt getReceiptById(UUID id);
    List<RawMaterialReceipt> getAllReceipts();
}
