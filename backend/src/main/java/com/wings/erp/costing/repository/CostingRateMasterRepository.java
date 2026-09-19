package com.wings.erp.costing.repository;
import com.wings.erp.common.enums.CostComponent;
import com.wings.erp.costing.entity.CostingRateMaster;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
import java.util.UUID;
public interface CostingRateMasterRepository extends JpaRepository<CostingRateMaster, UUID> {
    Optional<CostingRateMaster> findByComponentType(CostComponent componentType);
}
