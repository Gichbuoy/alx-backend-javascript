interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

type Subjects = "Math"| "History";

class Director implements DirectorInterface {

    workFromHome(): string {
      return "Working from home";
    }
    getCoffeeBreak(): string {
      return "Getting a coffee break";
    }
    workDirectorTasks(): string {
      return "Getting to director tasks"
    }
}

class Teacher implements TeacherInterface {

  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

function createEmployee(salary: number | string): Teacher | Director {
  if (typeof salary === 'number' && salary < 500) { return new Teacher(); }
  return new Director();
}

function isDirector(employee: Teacher | Director): boolean {
  return (employee instanceof Director) ? true : false;
}

function executeWork(employee: any): string {
  return (isDirector(employee)) ? employee.workDirectorTasks() : employee.workTeacherTasks();
}
  
function teachClass(todayClass:Subjects): string {
  return (todayClass === "Math") ? "Teaching Math" : "Teaching History";
}
