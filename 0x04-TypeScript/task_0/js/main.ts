interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string,
};

const student1: Student = {
    firstName: 'Elvis',
    lastName: 'Kibet',
    age: 25,
    location: 'Nairobi',
};

const student2: Student = {
  firstName: 'Yannick',
  lastName: 'Bett',
  age: 21,
  location: 'Eldoret',
};

const studentList: Student[] = [student1, student2];

const body = document.querySelector('body');
const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');


thead.innerHTML = `
<tr>
  <th>First Name</th>
  <th>Last Name</th>
  <th>Age</th>
  <th>Location</th>
</tr>
`;


let tableData: string;

studentList.forEach((student) => {
  tableData += `
      <tr>
        <td>${student.firstName}</td>
        <td>${student.lastName}</td>
        <td>${student.age}</td>
        <td>${student.location}</td>
      </tr>
    `
});

tbody.innerHTML = tableData;

table.appendChild(thead);
table.appendChild(tbody);
body.appendChild(table);
