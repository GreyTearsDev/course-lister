import { useSelector } from "react-redux";
import { selectGetCourses } from "../../redux/reducers";
import CourseDetailsScreen from "./CourseDetailsScreen";

export default function CourseListing() {
  const courses = useSelector(selectGetCourses);
  return (
    <>
      <div>
        {courses.map(course => <CourseDetailsScreen key={course.id} course={course} />)}
      </div>
    </>
  );
}
