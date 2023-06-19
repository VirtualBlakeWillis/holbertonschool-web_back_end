-- task 2
SELECT origin, COUNT(*) AS fan_count
FROM metal_bands
GROUP BY origin
ORDER BY fan_count DESC;
