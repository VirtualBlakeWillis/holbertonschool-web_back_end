/* eslint-disable no-param-reassign */
export default function updateStudentGradeByCity(students, city, newGrades) {
  const result = students.filter((arg) => arg.location === city)
    .map((student) => {
      student.grade = 'N/A';
      return student;
    })
    .map((student) => {
      for (const i of newGrades) {
        if (student.id === i.studentId) {
          student.grade = i.grade;
        }
      }
      return student;
    });

  return result;
}
