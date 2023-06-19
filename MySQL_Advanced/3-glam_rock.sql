-- t3
SELECT band_name, (split - formed) AS lifespan
FROM metal_bands
WHERE FIND_IN_SET('Glam Rock', main_style) > 0
ORDER BY lifespan DESC;
