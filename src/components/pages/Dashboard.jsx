import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectGetCourses, selectUser } from "../../redux/reducers";
import EnrolledCoursesList from "./EnrolledCoursesList";

export default function Dashboard() {
  const user = useSelector(selectUser);
  const isEnrolledInCourses = user.enrolledCoursesIds.length === 0;

  const courses = useSelector(selectGetCourses);

  return (
    <div className={`screen dashboard ${isEnrolledInCourses ? "centered-message" : null}`}>
      <h1>Welcome back, {user.name}</h1>
      {isEnrolledInCourses
        ? (
          <h3>
            You have not enrolled in any course yet. Find one 👉 <Link to="/course-listing">HERE</Link>
          </h3>
        )
        : (
          <>
            <h3>Your courses:</h3>
            <EnrolledCoursesList courses={courses} user={user} />
          </>
        )}
    </div>
  );
}
