export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  const studentByCity = studentsList.filter((student) => student.location === city);
  return studentByCity.map((student) => {
    const grade = newGrades.find((studentGrade) => studentGrade.studentId === student.id);
    if (grade) {
      return { ...student, grade: grade.grade };
    }
    return { ...student, grade: 'N/A' };
  });
}
