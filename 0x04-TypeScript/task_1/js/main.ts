interface Teacher {

  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
  [key: string]: any,
}

interface Directors extends Teacher {

  numberOfReports: number,
}

interface printTeacherFunction extends Teacher {

  printTeacher: (firstName: string, lastName: string) => string,
}

interface Student {
  readonly firstName: string,
  readonly lastName: string,
  workOnHomework: () => string,
  displayName: () => string,
}

function printTeacher(firstName:string, lastName:string) {
  return `${firstName.charAt(0)}. ${lastName}`;
}

class StudentClass implements Student {

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework():string { return  "Currently working"; }
  displayName():string { return this.firstName; }
}
