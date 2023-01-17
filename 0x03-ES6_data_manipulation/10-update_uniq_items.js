export default function updateUniqueItems(map) {
  return map.forEach((value, key) => {
    if (value == 1) {
      map.set(key, 100);
    }
    return map.get(key);
  })
}
