export default function getStudentsByLocation(students, city) {
  if (typeof city != 'string' || !Array.isArray(students)) {
    return [];
  }
  return students.filter((student) => student.location === city);
}
