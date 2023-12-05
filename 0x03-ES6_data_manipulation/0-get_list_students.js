class Student {
  constructor(id, firstname, area) {
    this.id = id;
    this.firstName = firstname;
    this.location = area;
  }
}

export default function getListStudents() {
  const student1 = new Student(1, 'Guillaume', 'San Francisco');
  const student2 = new Student(2, 'James', 'Colombia');
  const student3 = new Student(5, 'Serena', 'San Francisco');
  return [student1, student2, student3];
}
