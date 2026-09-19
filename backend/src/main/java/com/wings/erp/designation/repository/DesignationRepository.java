package com.wings.erp.designation.repository;
import com.wings.erp.designation.entity.Designation;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;
public interface DesignationRepository extends JpaRepository<Designation, UUID> {}
