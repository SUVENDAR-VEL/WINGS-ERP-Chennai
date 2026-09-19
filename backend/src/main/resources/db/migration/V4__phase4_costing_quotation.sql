-- 1. Create costing_rates_master table
CREATE TABLE costing_rates_master (
    id UUID PRIMARY KEY,
    component_type VARCHAR(50) NOT NULL UNIQUE,
    standard_rate NUMERIC(15, 2) NOT NULL,
    unit_of_measure VARCHAR(50),
    active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    created_by UUID,
    updated_by UUID
);

-- Seed basic rates (Standard placeholders)
INSERT INTO costing_rates_master (id, component_type, standard_rate, unit_of_measure, created_at, updated_at) VALUES
('c0000000-0000-0000-0000-000000000001', 'MACHINE', 500.00, 'PER_HOUR', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('c0000000-0000-0000-0000-000000000002', 'LABOUR', 200.00, 'PER_HOUR', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('c0000000-0000-0000-0000-000000000003', 'POWER', 8.50, 'PER_KWH', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('c0000000-0000-0000-0000-000000000004', 'OVERHEAD', 10.00, 'PERCENTAGE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('c0000000-0000-0000-0000-000000000005', 'PROFIT', 15.00, 'PERCENTAGE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('c0000000-0000-0000-0000-000000000006', 'REJECTION', 2.00, 'PERCENTAGE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- 2. Create quotations table
CREATE SEQUENCE quotation_number_seq START WITH 1001 INCREMENT BY 1;

CREATE TABLE quotations (
    id UUID PRIMARY KEY,
    quotation_number VARCHAR(50) NOT NULL,
    version INTEGER NOT NULL DEFAULT 1,
    enquiry_id UUID NOT NULL REFERENCES customer_enquiries(id),
    customer_id UUID NOT NULL REFERENCES customers(id),
    quotation_date DATE NOT NULL,
    validity_date DATE,
    status VARCHAR(50) NOT NULL DEFAULT 'DRAFT',
    payment_terms TEXT,
    delivery_terms TEXT,
    notes TEXT,
    approved_by UUID,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    created_by UUID,
    updated_by UUID,
    UNIQUE (quotation_number, version)
);

-- 3. Create quotation_items table
CREATE TABLE quotation_items (
    id UUID PRIMARY KEY,
    quotation_id UUID NOT NULL REFERENCES quotations(id) ON DELETE CASCADE,
    enquiry_item_id UUID REFERENCES customer_enquiry_items(id),
    part_number VARCHAR(100) NOT NULL,
    drawing_number VARCHAR(100),
    revision VARCHAR(50),
    quantity INTEGER NOT NULL,
    estimated_unit_cost NUMERIC(15, 2) NOT NULL,
    profit_margin_percent NUMERIC(5, 2) NOT NULL,
    quoted_unit_price NUMERIC(15, 2) NOT NULL,
    total_value NUMERIC(15, 2) NOT NULL,
    delivery_date DATE,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    created_by UUID,
    updated_by UUID
);

-- 4. Create quotation_item_costs table
CREATE TABLE quotation_item_costs (
    id UUID PRIMARY KEY,
    quotation_item_id UUID NOT NULL REFERENCES quotation_items(id) ON DELETE CASCADE,
    cost_component VARCHAR(50) NOT NULL,
    standard_rate NUMERIC(15, 2),
    actual_rate NUMERIC(15, 2) NOT NULL,
    calculated_value NUMERIC(15, 2) NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    created_by UUID,
    updated_by UUID
);
