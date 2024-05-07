export default function enrollInCourse(student, course) {
  student.addCourse(course.id);
  course.students.push(student);
}
