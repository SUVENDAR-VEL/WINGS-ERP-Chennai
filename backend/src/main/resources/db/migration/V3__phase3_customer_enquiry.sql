-- 1. Create customers table
CREATE SEQUENCE customer_code_seq START WITH 1001 INCREMENT BY 1;

CREATE TABLE customers (
    id UUID PRIMARY KEY,
    customer_code VARCHAR(50) NOT NULL UNIQUE,
    company_name VARCHAR(255) NOT NULL,
    contact_person VARCHAR(100),
    email VARCHAR(255),
    mobile VARCHAR(20),
    alternate_mobile VARCHAR(20),
    billing_address TEXT,
    shipping_address TEXT,
    city VARCHAR(100),
    state VARCHAR(100),
    pincode VARCHAR(20),
    gstin VARCHAR(50),
    payment_terms VARCHAR(100),
    credit_limit NUMERIC(15, 2),
    status VARCHAR(50) DEFAULT 'ACTIVE',
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    created_by UUID,
    updated_by UUID
);

-- 2. Create customer_enquiries table
CREATE TABLE customer_enquiries (
    id UUID PRIMARY KEY,
    enquiry_number VARCHAR(50) NOT NULL UNIQUE,
    customer_id UUID NOT NULL REFERENCES customers(id),
    enquiry_date DATE NOT NULL,
    expected_delivery_date DATE,
    source VARCHAR(100),
    priority VARCHAR(50),
    notes TEXT,
    status VARCHAR(50) NOT NULL DEFAULT 'NEW',
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    created_by UUID,
    updated_by UUID
);

-- 3. Create customer_enquiry_items table
CREATE TABLE customer_enquiry_items (
    id UUID PRIMARY KEY,
    enquiry_id UUID NOT NULL REFERENCES customer_enquiries(id) ON DELETE CASCADE,
    part_number VARCHAR(100) NOT NULL,
    part_name VARCHAR(255) NOT NULL,
    drawing_number VARCHAR(100),
    revision VARCHAR(50),
    material VARCHAR(100),
    requested_quantity INTEGER NOT NULL,
    target_delivery_date DATE,
    customer_remarks TEXT,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    created_by UUID,
    updated_by UUID
);

-- 4. Create document_attachments table (Foundation for technical drawings)
CREATE TABLE document_attachments (
    id UUID PRIMARY KEY,
    entity_type VARCHAR(100) NOT NULL, -- e.g., 'ENQUIRY_ITEM'
    entity_id UUID NOT NULL,
    file_name VARCHAR(255) NOT NULL,
    file_path TEXT NOT NULL,
    content_type VARCHAR(100),
    file_size BIGINT,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    created_by UUID,
    updated_by UUID
);
