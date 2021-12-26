import {v4 as uuid} from 'uuid';

import {TTeacher, TTeacherModel } from './teacher.type'

class Teacher {
  id : string;

  lastName : string;

  firstName : string;

  degree : string;

  constructor({
                lastName = 'Sergey',
                firstName = 'Hardzeichyk',
                degree = 'Lord',
              }: Partial<TTeacher> = {}) {
    this.id = uuid();
    this.lastName = lastName;
    this.firstName = firstName;
    this.degree = degree;
  }

  static toResponse(teacher:TTeacherModel):TTeacherModel {
    const { id, lastName, firstName, degree } = teacher;
    return { id, lastName, firstName, degree };
  }
}

export default Teacher;