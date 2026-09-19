-- 1. Create customer_purchase_orders table
CREATE TABLE customer_purchase_orders (
    id UUID PRIMARY KEY,
    po_number VARCHAR(100) NOT NULL UNIQUE,
    po_date DATE NOT NULL,
    customer_id UUID NOT NULL REFERENCES customers(id),
    customer_reference VARCHAR(100),
    document_id UUID REFERENCES document_attachments(id),
    payment_terms TEXT,
    delivery_terms TEXT,
    notes TEXT,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    created_by UUID,
    updated_by UUID
);

-- 2. Create sales_orders table
CREATE SEQUENCE sales_order_number_seq START WITH 1001 INCREMENT BY 1;

CREATE TABLE sales_orders (
    id UUID PRIMARY KEY,
    sales_order_number VARCHAR(50) NOT NULL UNIQUE,
    customer_id UUID NOT NULL REFERENCES customers(id),
    customer_po_id UUID REFERENCES customer_purchase_orders(id),
    quotation_id UUID REFERENCES quotations(id),
    order_date DATE NOT NULL,
    delivery_date DATE,
    priority VARCHAR(50) NOT NULL DEFAULT 'MEDIUM',
    status VARCHAR(50) NOT NULL DEFAULT 'DRAFT',
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    created_by UUID,
    updated_by UUID
);

-- 3. Create sales_order_items table
CREATE TABLE sales_order_items (
    id UUID PRIMARY KEY,
    sales_order_id UUID NOT NULL REFERENCES sales_orders(id) ON DELETE CASCADE,
    part_number VARCHAR(100) NOT NULL,
    part_name VARCHAR(255) NOT NULL,
    drawing_number VARCHAR(100),
    revision VARCHAR(50),
    ordered_quantity INTEGER NOT NULL CHECK (ordered_quantity > 0),
    unit_price NUMERIC(15, 2) NOT NULL,
    total_value NUMERIC(15, 2) NOT NULL,
    delivery_date DATE,
    
    -- Production tracking counters
    produced_quantity INTEGER NOT NULL DEFAULT 0 CHECK (produced_quantity >= 0),
    rejected_quantity INTEGER NOT NULL DEFAULT 0 CHECK (rejected_quantity >= 0),
    delivered_quantity INTEGER NOT NULL DEFAULT 0 CHECK (delivered_quantity >= 0),
    balance_quantity INTEGER NOT NULL DEFAULT 0 CHECK (balance_quantity >= 0),
    
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    created_by UUID,
    updated_by UUID
);
