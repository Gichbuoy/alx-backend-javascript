interface Teacher : Teacher = {
firstName: string,
lastName: string,
fullTimeEmployee: boolean,
yearsOfExperince?: number,
location: string,
contract?: boolean,
}

//Directors inherit attributes from teachers!but adds number of reports to it

interface Directors extends  Teacher {
    numberOfRepors: number;
    }

    function printTeacher(firstName: string, lastName: string); string {
    }
