-- 1. Create permissions table
CREATE TABLE permissions (
    id UUID PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    description VARCHAR(255),
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    created_by UUID,
    updated_by UUID
);

-- 2. Create role_permissions table
CREATE TABLE role_permissions (
    role_id UUID REFERENCES roles(id),
    permission_id UUID REFERENCES permissions(id),
    PRIMARY KEY (role_id, permission_id)
);

-- 3. Modify units table
ALTER TABLE units ADD COLUMN address TEXT;
ALTER TABLE units ADD COLUMN city VARCHAR(100);
ALTER TABLE units ADD COLUMN state VARCHAR(100);
ALTER TABLE units ADD COLUMN pincode VARCHAR(20);
ALTER TABLE units ADD COLUMN contact_number VARCHAR(50);
ALTER TABLE units ADD COLUMN email VARCHAR(100);

-- 4. Create departments table
CREATE TABLE departments (
    id UUID PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    description VARCHAR(255),
    active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    created_by UUID,
    updated_by UUID
);

-- 5. Create designations table
CREATE TABLE designations (
    id UUID PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    level INTEGER,
    active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    created_by UUID,
    updated_by UUID
);

-- 6. Modify employees table (Drop old string columns, add UUIDs)
ALTER TABLE employees DROP COLUMN department;
ALTER TABLE employees DROP COLUMN designation;

ALTER TABLE employees ADD COLUMN department_id UUID REFERENCES departments(id);
ALTER TABLE employees ADD COLUMN designation_id UUID REFERENCES designations(id);
ALTER TABLE employees ADD COLUMN unit_id UUID REFERENCES units(id);

-- 7. Create employee_sensitive_info table
CREATE TABLE employee_sensitive_info (
    id UUID PRIMARY KEY,
    employee_id UUID NOT NULL UNIQUE REFERENCES employees(id),
    aadhaar_number VARCHAR(255),
    pan_number VARCHAR(255),
    bank_details_json TEXT, -- JSON format for account_number, ifsc, bank_name
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    created_by UUID,
    updated_by UUID
);

-- 8. Create audit_logs table
CREATE TABLE audit_logs (
    id UUID PRIMARY KEY,
    action VARCHAR(50) NOT NULL,
    entity_name VARCHAR(100) NOT NULL,
    entity_id UUID,
    user_id UUID,
    timestamp TIMESTAMP NOT NULL,
    details TEXT
);

-- 9. Seed Initial Permissions
INSERT INTO permissions (id, name, description, created_at, updated_at) VALUES 
('00000000-0000-0000-0000-000000000001', 'CUSTOMER_VIEW', 'View customer details', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('00000000-0000-0000-0000-000000000002', 'CUSTOMER_CREATE', 'Create customer details', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('00000000-0000-0000-0000-000000000003', 'CUSTOMER_UPDATE', 'Update customer details', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('00000000-0000-0000-0000-000000000004', 'PRODUCTION_VIEW', 'View production details', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('00000000-0000-0000-0000-000000000005', 'PRODUCTION_CREATE', 'Create production details', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('00000000-0000-0000-0000-000000000006', 'PRODUCTION_UPDATE', 'Update production details', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('00000000-0000-0000-0000-000000000007', 'QUALITY_VIEW', 'View quality details', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('00000000-0000-0000-0000-000000000008', 'QUALITY_CREATE', 'Create quality details', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('00000000-0000-0000-0000-000000000009', 'QUALITY_UPDATE', 'Update quality details', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('00000000-0000-0000-0000-000000000010', 'INVENTORY_VIEW', 'View inventory details', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('00000000-0000-0000-0000-000000000011', 'INVENTORY_CREATE', 'Create inventory details', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('00000000-0000-0000-0000-000000000012', 'INVENTORY_UPDATE', 'Update inventory details', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('00000000-0000-0000-0000-000000000013', 'REPORT_VIEW', 'View reports', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('00000000-0000-0000-0000-000000000014', 'EMPLOYEE_VIEW', 'View employee details', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('00000000-0000-0000-0000-000000000015', 'EMPLOYEE_CREATE', 'Create employee details', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('00000000-0000-0000-0000-000000000016', 'EMPLOYEE_UPDATE', 'Update employee details', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('00000000-0000-0000-0000-000000000017', 'SENSITIVE_DATA_VIEW', 'View sensitive employee data', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('00000000-0000-0000-0000-000000000018', 'MASTER_DATA_MANAGE', 'Manage Master Data (Departments, Designations, Units)', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- 10. Assign permissions to SUPER_ADMIN (Role ID: 00000000-0000-0000-0000-000000000001)
INSERT INTO role_permissions (role_id, permission_id) 
SELECT '00000000-0000-0000-0000-000000000001', id FROM permissions;
