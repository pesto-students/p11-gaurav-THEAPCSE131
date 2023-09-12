create database Warehouse_Database;
use  Warehouse_Database;

-- Create the CITIES table
CREATE TABLE CITIES (
    CITY CHAR(20) PRIMARY KEY,
    STATE CHAR(20)
);

-- Insert demo data into the CITIES table
INSERT INTO CITIES (CITY, STATE) VALUES
    ('Pune', 'Maharashtra'),
    ('Mumbai', 'Maharashtra'),
    ('Bangalore', 'Karnataka');
    
    select * from cities;
    
    -- Create the WAREHOUSES table with a foreign key to CITIES
CREATE TABLE WAREHOUSES (
    WID INTEGER PRIMARY KEY,
    WNAME CHAR(30),
    LOCATION CHAR(20),
    EXTRA_CONTEXT JSON,
    CITY CHAR(20),
    FOREIGN KEY (CITY) REFERENCES CITIES(CITY));


-- Insert demo data into the WAREHOUSES table
INSERT INTO WAREHOUSES (WID, WNAME, LOCATION, EXTRA_CONTEXT, CITY) VALUES
    (1, 'Warehouse A', 'Location A', '{"attribute1": "value1"}', 'Pune'),
    (2, 'Warehouse B', 'Location B', '{"attribute2": "value2"}', 'Pune'),
    (3, 'Warehouse C', 'Location C', '{"attribute3": "value3"}', 'Mumbai');

select * from WAREHOUSES;

-- Create the STORES table with a foreign key to WAREHOUSES
CREATE TABLE STORES (
    SID INTEGER PRIMARY KEY,
    STORE_NAME CHAR(20),
    LOCATION_CITY CHAR(20),
    WAREHOUSE_ID INTEGER,
    FOREIGN KEY (WAREHOUSE_ID) REFERENCES WAREHOUSES(WID)
);

-- Insert demo data into the STORES table
INSERT INTO STORES (SID, STORE_NAME, LOCATION_CITY, WAREHOUSE_ID) VALUES
    (101, 'Store 1', 'Pune', 1),
    (102, 'Store 2', 'Mumbai', 3),
    (103, 'Store 3', 'Pune', 2);
    
    select * from STORES;
    
    
-- Create the CUSTOMER table
CREATE TABLE CUSTOMER (
    CNO INTEGER PRIMARY KEY,
    CNAME CHAR(50),
    ADDR VARCHAR(50),
    CU_CITY CHAR(20)
);

-- Insert demo data into the CUSTOMER table
INSERT INTO CUSTOMER (CNO, CNAME, ADDR, CU_CITY) VALUES
    (1001, 'Mr. Patil', 'Address 1', 'Pune'),
    (1002, 'Ms. Rao', 'Address 2', 'Mumbai'),
    (1003, 'Mr. Singh', 'Address 3', 'Bangalore');
    



-- Create the ORDERS table with a foreign key to CUSTOMER
CREATE TABLE ORDERS (
    ONO INT PRIMARY KEY,
    ODATE DATE,
    CUSTOMER_ID INTEGER,
    FOREIGN KEY (CUSTOMER_ID) REFERENCES CUSTOMER(CNO)
);

-- Insert demo data into the ORDERS table
INSERT INTO ORDERS (ONO, ODATE, CUSTOMER_ID) VALUES
    (2001, '2023-09-01', 1001),
    (2002, '2023-09-02', 1002),
    (2003, '2023-09-03', 1001);
    
select * from orders;

-- Create the ITEMS table
CREATE TABLE ITEMS (
    ITEMNO INTEGER PRIMARY KEY,
    DESCRIPTION TEXT,
    WEIGHT DECIMAL(5,2),
    COST DECIMAL(5,2)
);

-- Insert demo data into the ITEMS table
INSERT INTO ITEMS (ITEMNO, DESCRIPTION, WEIGHT, COST) VALUES
    (3001, 'Item 1', 2.5, 10.99),
    (3002, 'Item 2', 1.8, 8.99),
    (3003, 'Item 3', 3.2, 12.99);

select * from items;
-- Create the ITEM_ORDERS junction table for Many-to-Many relationship
CREATE TABLE ITEM_ORDERS (
    ORDER_ID INT,
    ITEM_ID INT,
    ORDERED_QUANTITY INT,
    FOREIGN KEY (ORDER_ID) REFERENCES ORDERS(ONO),
    FOREIGN KEY (ITEM_ID) REFERENCES ITEMS(ITEMNO),
    PRIMARY KEY (ORDER_ID, ITEM_ID)
);

-- Insert demo data into the ITEM_ORDERS junction table
INSERT INTO ITEM_ORDERS (ORDER_ID, ITEM_ID, ORDERED_QUANTITY) VALUES
    (2001, 3001, 5),
    (2001, 3002, 3),
    (2002, 3002, 2),
    (2003, 3003, 4);
    
Select * from item_orders;

-- Create the STORE_ITEMS junction table for Many-to-Many relationship
CREATE TABLE STORE_ITEMS (
    STORE_ID INT,
    ITEM_ID INT,
    QUANTITY INT,
    FOREIGN KEY (STORE_ID) REFERENCES STORES(SID),
    FOREIGN KEY (ITEM_ID) REFERENCES ITEMS(ITEMNO),
    PRIMARY KEY (STORE_ID, ITEM_ID)
);

-- Insert demo data into the STORE_ITEMS junction table
INSERT INTO STORE_ITEMS (STORE_ID, ITEM_ID, QUANTITY) VALUES
    (101, 3001, 10),
    (101, 3002, 15),
    (102, 3002, 8),
    (103, 3003, 12);
    
Select * from STORE_ITEMS;



