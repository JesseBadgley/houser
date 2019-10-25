UPDATE housers 
SET property_name = $1, address = $2, city = $3, state = $4, zip = $5, image = $6, monthly = $7, desired = $8
WHERE property_id = $9;