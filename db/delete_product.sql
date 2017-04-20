-- This query will take in an id. Find and delete the product with the id.

delete from products
where id = $1;
