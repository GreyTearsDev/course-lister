import { useSelector } from "react-redux";
import { selectGetCourses, selectUser } from "../../redux/reducers";
import EnrolledCoursesList from "./EnrolledCoursesList";

export default function Dashboard() {
  const user = useSelector(selectUser);
  const enrolledCoursesIds = user.enrolledCoursesIds;

  const courses = useSelector(selectGetCourses);

  return (
    <div className="screen dashboard">
      <h1>Welcome back, {user.name}</h1>
      <h3>Your courses:</h3>
      <EnrolledCoursesList enrolledCoursesIds={enrolledCoursesIds} courses={courses} user={user} />
    </div>
  );
}
