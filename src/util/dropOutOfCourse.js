import mockAPI from "./mockAPI";

export default function dropOutOfCourse(student, course) {
  mockAPI.find(c => c.id = course.id).students.filter(enrolledStudent => enrolledStudent.id !== student.id);
}
