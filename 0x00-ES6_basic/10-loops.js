export default function appendToEachArrayValue(array, appendString) {
  const retArray = [];
  for (let idx of array) {
    retArray.push(idx = appendString + idx);
  }

  return retArray;
}
