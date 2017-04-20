-- This query will take in an id and return all data for that product

select *
from products
where id = $1;
