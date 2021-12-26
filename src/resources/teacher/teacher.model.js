const { v4: uuid } = require('uuid');

class Teacher {
  constructor({
                id = uuid(),
                lastName = 'Sergey',
                firstName = 'Hardzeichyk',
                degree = 'Lord',
              } = {}) {
    this.id = id;
    this.lastName = lastName;
    this.firstName = firstName;
    this.degree = degree;
  }

  static toResponse(teacher) {
    const { id, lastName, firstName, degree } = teacher;
    return { id, lastName, firstName, degree};
  }
}

module.exports = Teacher;