const ExamsRepo = require('./exam.memory.repositiry.js');
const TeacherRepo = require('../teacher/teacher.memory.repository.js')

const getAll = () => ExamsRepo.getAll();

const getById = (id) => ExamsRepo.getById(id);

const getTeachersByExamId = async (examId) => TeacherRepo.getTeacherByExamId(await ExamsRepo.getTeacherIdByExamId(examId))

const createExam = ({abiturientID, teacherID, date, score }) =>
  ExamsRepo.createExam({ abiturientID, teacherID, date, score });

const deleteById = async (id) => {
  const examDeletable = await getById(id);
  ExamsRepo.deleteById(id);

  return examDeletable;
};

const updateById = ({ id, abiturientID, teacherID, date, score }) =>
  ExamsRepo.updateById({ id, abiturientID, teacherID, date, score });

module.exports = { getAll, getById, createExam, deleteById, updateById, getTeachersByExamId };
