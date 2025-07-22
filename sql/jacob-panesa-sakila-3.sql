USE sakila;

SELECT 
co.country,
COUNT(c.customer_id) AS customer_count
FROM country co
LEFT JOIN city ci ON co.country_id = ci.country_id
LEFT JOIN address a ON ci.city_id = a.city_id
LEFT JOIN customer c ON a.address_id = c.address_id
GROUP BY co.country
ORDER BY co.country;

SELECT 
    ci.city,
    co.country,
    COUNT(c.customer_id) AS customer_count
FROM customer c
JOIN address a ON c.address_id = a.address_id
JOIN city ci ON a.city_id = ci.city_id
JOIN country co ON ci.country_id = co.country_id
GROUP BY ci.city, co.country
ORDER BY co.country, ci.city;

SELECT 
YEAR(payment_date) AS year,
MONTHNAME(payment_date) AS month,
ROUND(AVG(amount), 2) AS average_rental_amount,
SUM(amount) AS total_rental_amount,
COUNT(*) AS total_transactions
FROM payment
GROUP BY YEAR(payment_date), MONTH(payment_date), MONTHNAME(payment_date)
ORDER BY YEAR(payment_date), MONTH(payment_date);

SELECT 
DATE_FORMAT(payment_date, '%h %p') AS hour_of_the_day,
SUM(amount) AS total_payments_received
FROM payment
GROUP BY DATE_FORMAT(payment_date, '%h %p'), HOUR(payment_date)
ORDER BY total_payments_received DESC
LIMIT 10;