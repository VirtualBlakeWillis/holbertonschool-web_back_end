export default function getStudentsByLocation(arr, location) {
  return arr.filter((arg) => arg.location === location);
}
