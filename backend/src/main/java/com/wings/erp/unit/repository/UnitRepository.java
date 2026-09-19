package com.wings.erp.unit.repository;
import com.wings.erp.unit.entity.Unit;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;
public interface UnitRepository extends JpaRepository<Unit, UUID> {}
