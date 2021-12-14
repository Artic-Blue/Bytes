\c bytes;

-- Overivew
\COPY products FROM 'db/products.csv' WITH DELIMITER ',' CSV HEADER NULL AS 'NULL';
\COPY farmers FROM 'db/farmers.csv' WITH DELIMITER ',' CSV HEADER NULL AS 'NULL';
