const TeachersRepo = require('./teacher.memory.repository.js');
const ExamRepo = require('../exam/exam.memory.repositiry.js');


const getAll = () => TeachersRepo.getAll();

const getById = (id) => TeachersRepo.getById(id);

const getExamsByTeacherId = (abiturientID) => ExamRepo.getExamsByTeacherId(abiturientID);

const createTeacher = ({ lastName, firstName, degree }) =>
  TeachersRepo.createTeacher({ lastName, firstName, degree });

const deleteById = async (id) => {
  const teacherDeletable = await getById(id);
  TeachersRepo.deleteById(id);
  ExamRepo.deleteTeacherFromExam(id);


  return teacherDeletable;
};

const updateById = ({ id, lastName, firstName, degree }) =>
  TeachersRepo.updateById({ id, lastName, firstName, degree });

module.exports = { getAll, getById, createTeacher, deleteById, updateById,getExamsByTeacherId };
