USE lead_gen_business;

-- 1.What query would you run to get all the sites that client=15 owns?
SELECT * 
FROM sites 
WHERE client_id = 15;

-- 2.What query would you run to get total count of domain created for June 2011?
SELECT 
MONTHNAME(created_datetime) AS month,
COUNT(*) AS total_domains_created
FROM sites 
WHERE YEAR(created_datetime) = 2011 
AND MONTH(created_datetime) = 6
GROUP BY MONTHNAME(created_datetime);

-- 3.What query would you run to get the total revenue for the date November 19th 2012?
SELECT 
DATE(charged_datetime) AS date,
SUM(amount) AS total_revenue
FROM billing 
WHERE DATE(charged_datetime) = '2012-11-19'
GROUP BY DATE(charged_datetime);

-- 4.What query would you run to get total revenue earned monthly each year for the client with an id of 1?
SELECT 
client_id,
YEAR(charged_datetime) AS year,
MONTHNAME(charged_datetime) AS month,
SUM(amount) AS total_revenue
FROM billing 
WHERE client_id = 1
GROUP BY client_id, YEAR(charged_datetime), MONTH(charged_datetime)
ORDER BY YEAR(charged_datetime), MONTH(charged_datetime);

-- 5.What query would you run to get total revenue of each client every month per year? Order it by client id.
SELECT 
CONCAT(c.first_name, ' ', c.last_name) AS client_name,
SUM(b.amount) AS total_revenue,
MONTHNAME(b.charged_datetime) AS month_charged,
YEAR(b.charged_datetime) AS year_charged
FROM clients c
JOIN billing b ON c.client_id = b.client_id
GROUP BY c.client_id, YEAR(b.charged_datetime), MONTH(b.charged_datetime)
ORDER BY c.client_id, YEAR(b.charged_datetime), MONTH(b.charged_datetime);

-- 6.What query would you run to get which sites generated leads between March 15, 2011 to April 15, 2011? 
-- Show how many leads for each site.
SELECT 
s.site_id,
s.domain_name,
COUNT(l.leads_id) AS total_leads
FROM sites s
JOIN leads l ON s.site_id = l.site_id
WHERE l.registered_datetime >= '2011-03-15' 
  AND l.registered_datetime <= '2011-04-15'
GROUP BY s.site_id, s.domain_name
ORDER BY total_leads DESC;

-- 7.What query would you run to show all the site owners, the site name(s), and the total number of leads 
-- generated from each site for all time?
SELECT 
CONCAT(c.first_name, ' ', c.last_name) AS site_owner,
s.domain_name AS site_name,
COUNT(l.leads_id) AS total_leads
FROM clients c
JOIN sites s ON c.client_id = s.client_id
LEFT JOIN leads l ON s.site_id = l.site_id
GROUP BY c.client_id, s.site_id
ORDER BY site_owner, total_leads DESC;

-- 8.What query would you run to get a list of site owners who had leads, and the total of each for the whole 2012?
SELECT 
CONCAT(c.first_name, ' ', c.last_name) AS site_owner,
COUNT(l.leads_id) AS total_leads_2012
FROM clients c
JOIN sites s ON c.client_id = s.client_id
JOIN leads l ON s.site_id = l.site_id
WHERE YEAR(l.registered_datetime) = 2012
GROUP BY c.client_id, c.first_name, c.last_name
ORDER BY total_leads_2012 DESC;

-- 9.What query would you run to get a list of site owners and the total # of leads we've generated 
-- for each owner per month for the first half of Year 2012?
SELECT 
CONCAT(c.first_name, ' ', c.last_name) AS site_owner,
YEAR(l.registered_datetime) AS year,
MONTH(l.registered_datetime) AS month,
MONTHNAME(l.registered_datetime) AS month_name,
COUNT(l.leads_id) AS total_leads
FROM clients c
JOIN sites s ON c.client_id = s.client_id
JOIN leads l ON s.site_id = l.site_id
WHERE YEAR(l.registered_datetime) = 2012 
AND MONTH(l.registered_datetime) BETWEEN 1 AND 6
GROUP BY c.client_id, YEAR(l.registered_datetime), MONTH(l.registered_datetime)
ORDER BY site_owner, YEAR(l.registered_datetime), MONTH(l.registered_datetime);

-- 10.Write a single query that retrieves all the site names that each client owns and its total count. 
SELECT 
CONCAT(c.first_name, ' ', c.last_name) AS client_name,
GROUP_CONCAT(s.domain_name ORDER BY s.domain_name SEPARATOR ', ') AS owned_sites,
COUNT(s.site_id) AS total_sites_count
FROM clients c
LEFT JOIN sites s ON c.client_id = s.client_id
GROUP BY c.client_id, c.first_name, c.last_name
ORDER BY c.client_id;