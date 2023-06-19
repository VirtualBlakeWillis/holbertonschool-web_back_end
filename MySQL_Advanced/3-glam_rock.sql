-- my task 3
SELECT band_name, (COALESCE(split, 2021) - formed) AS lifespan
FROM metal_bands
WHERE FIND_IN_SET('Glam rock', style) > 0
ORDER BY lifespan DESC;
