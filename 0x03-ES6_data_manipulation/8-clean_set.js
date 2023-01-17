export default function cleanSet(set, startString) {
  if (startString === '' || typeof startString !== 'string') {
    return '';
  }
  let result = '';
  for (const str of set) {
    if (str.startsWith(startString)) {
      if (result.length > 0) {
        result += '-';
      }
      result += str.slice(startString.length);
    }
  }
  return result;
}
