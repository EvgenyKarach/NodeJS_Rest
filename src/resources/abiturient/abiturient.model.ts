import {v4 as uuid} from 'uuid';

import {TStudentModel, TStudent} from './abiturient.type';

class Student{
  id:string;

  lastName : string;

  firstName : string;

  numCertificate : number;

  constructor({
                lastName = 'Karach',
                firstName = 'Evgeny',
                numCertificate = 948352,
              }: Partial<TStudent> = {}) {
    this.id = uuid();
    this.lastName = lastName;
    this.firstName = firstName;
    this.numCertificate = numCertificate;
  }

  static toResponse(student: TStudentModel):TStudentModel {
    const { id, lastName, firstName, numCertificate } = student;
    return { id, lastName, firstName, numCertificate};
  }
}

export default Student;