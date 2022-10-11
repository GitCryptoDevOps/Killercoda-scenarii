## Viewing and Sorting Data in MySQL

When working with databases, one of the most important skills is knowing how to view and arrange data to gain useful information. MySQL provides several ways to query databases in order to accomplish this. In this lab, we will run several queries in order to produce specific output.

List all of the rows in the orders and products tables (run a single query for each):

`mysql -u root -p`{{execute}}

`USE prod;`{{execute}}

List the rows in the orders table:

`SELECT * FROM orders;`{{execute}}

List the rows in the products table:

`SELECT * FROM products;`{{execute}}

Order the rows by the `purchaseDate` column in ascending order:

`SELECT * FROM orders ORDER BY purchaseDate;`{{execute}}

Show all the orders where the name begins with `m`:

`SELECT * FROM orders WHERE name LIKE 'm%';`{{execute}}

Show all purchases from `2018` where the `productID` is less than `4`:

`SELECT * FROM orders WHERE purchaseDate LIKE '2018%' AND productID < 4;`{{execute}}

Query on the `products` table so that the output is in alphabetical order:

`SELECT * FROM products ORDER BY type;`{{execute}}

Show where the cost is greater or equal to `1000`:

`SELECT * FROM products WHERE cost >= 1000;`{{execute}}

Show the items where cost is greater than `2000` or less than `500`:

`SELECT * FROM products WHERE cost > 2000 OR cost < 500;`{{execute}}

Perform an `INNER JOIN` on the `orders` and `products` table:

`SELECT orders.name, products.type, products.cost FROM orders INNER JOIN products WHERE orders.productID = products.id;`{{execute}}
