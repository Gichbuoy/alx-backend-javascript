import getListStudentIds from './1-get_list_student_ids';

export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    return 0;
  }
  const ids = getListStudentIds(students);
  return ids.reduce((sum, id) => sum + id, 0);
}
