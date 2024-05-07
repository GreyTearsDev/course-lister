import { v4 as uuidv4 } from 'uuid';

export default function createStudent(name, email) {
  const enrolledCorsesIDs = [];

  const addCourse = (course) => enrolledCorsesIDs.push(course.id);
  const removeCourse = (course) => enrolledCorsesIDs.filter(existingID => existingID !== course.id);
  const getCoursesIDs = () => enrolledCorsesIDs;
  
  return {
    id: uuidv4(),
    name: name,
    email: email,
    addCourse,
    removeCourse,
    getCoursesIDs,
  }
}
