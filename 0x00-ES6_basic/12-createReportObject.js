export default function createReportObject(employeesList) {
  const report = {
    allEmployees: employeesList,
    getNumberOfDepartments: (allEmp) => Object.keys(allEmp).length,
  };

  return report;
}
