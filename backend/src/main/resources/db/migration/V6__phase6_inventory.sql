-- V6__phase6_inventory.sql

CREATE TABLE item_master (
    id UUID PRIMARY KEY,
    item_code VARCHAR(50) NOT NULL UNIQUE,
    item_name VARCHAR(255) NOT NULL,
    category VARCHAR(50) NOT NULL,
    material VARCHAR(100),
    grade VARCHAR(100),
    unit_of_measure VARCHAR(20) NOT NULL,
    minimum_stock DECIMAL(19,4) DEFAULT 0,
    maximum_stock DECIMAL(19,4) DEFAULT 0,
    reorder_level DECIMAL(19,4) DEFAULT 0,
    status VARCHAR(50) DEFAULT 'ACTIVE',
    current_stock DECIMAL(19,4) NOT NULL DEFAULT 0,
    version BIGINT DEFAULT 0,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    created_by UUID,
    updated_by UUID
);

CREATE TABLE stock_ledger (
    id UUID PRIMARY KEY,
    transaction_date TIMESTAMP NOT NULL,
    transaction_type VARCHAR(50) NOT NULL,
    reference_number VARCHAR(100),
    item_id UUID NOT NULL,
    quantity DECIMAL(19,4) NOT NULL,
    uom VARCHAR(20) NOT NULL,
    remarks TEXT,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    created_by UUID,
    updated_by UUID,
    CONSTRAINT fk_stock_ledger_item FOREIGN KEY (item_id) REFERENCES item_master(id)
);

CREATE TABLE raw_material_receipts (
    id UUID PRIMARY KEY,
    receipt_number VARCHAR(50) NOT NULL UNIQUE,
    supplier VARCHAR(255) NOT NULL,
    item_id UUID NOT NULL,
    heat_lot_number VARCHAR(100),
    quantity DECIMAL(19,4) NOT NULL,
    uom VARCHAR(20) NOT NULL,
    receipt_date DATE NOT NULL,
    inspection_status VARCHAR(50) NOT NULL DEFAULT 'PENDING',
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    created_by UUID,
    updated_by UUID,
    CONSTRAINT fk_raw_material_receipts_item FOREIGN KEY (item_id) REFERENCES item_master(id)
);
