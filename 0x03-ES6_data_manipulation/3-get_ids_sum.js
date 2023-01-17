export default function getStudentIdsSum(arr) {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
}
