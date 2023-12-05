export default function updateStudentGradeByCity(students, city, grades) {
  if (!Array.isArray(students)
	  || !Array.isArray(grades)
	  || !city instanceof String) {
    return [];
  }
  return students.filter((student) => student.location === city).map((student) => {
    let marks = grades.find((grade) => grade.studentId === student.id);
    (marks) ? marks = marks : marks = 'N/A';
    student.grade = marks;
    return student;
  });
}
