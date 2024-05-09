import { v4 as uuidv4 } from "uuid";

export default function createCourse(
  name,
  instructor,
  description,
  enrollmentStatus,
  thumbnail,
  duration,
  schedule,
  location,
  prerequisites,
  syllabus,
  enrolled,
) {
  return {
    id: uuidv4(),
    name: name,
    instructor: instructor,
    description: description,
    enrollmentStatus: enrollmentStatus,
    thumbnail: thumbnail,
    duration: duration,
    schedule: schedule,
    location: location,
    prerequisites: prerequisites,
    syllabus: syllabus,
    enrolled: false,
  }
}
