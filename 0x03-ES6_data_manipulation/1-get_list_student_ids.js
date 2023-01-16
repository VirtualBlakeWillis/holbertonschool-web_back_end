export default function getListStudentIds(arr) {
  if (Array.isArray(arr)) {
    return arr.map((x) => x.id);
  }
  return [];
}
