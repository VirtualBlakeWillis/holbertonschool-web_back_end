export default function createEmployeesObject(departmentName, employees) {
  const dpt = {
    [`${departmentName}`]: employees,
  };
  return dpt;
}
