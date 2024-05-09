import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setCompletionStatus } from "../../redux/reducers";
import EnrolledCourse from "./EnrolledCourse";

export default function EnrolledCoursesList(props) {
  const dispatch = useDispatch();

  const handleCourseCompletion = (course) => {
    dispatch(setCompletionStatus(course));
  };
  return (
    <div className="enrolled-courses">
      {props.enrolledCoursesIds.length === 0
        ? (
          <h3>
            You have not enrolled in any course yet. Find one <Link to="/course-listing">HERE</Link>
          </h3>
        )
        : props.courses.map(course => {
          if (!props.user.enrolledCoursesIds.includes(course.id)) return;

          return <EnrolledCourse key={course.id} course={course} handleCourseCompletion={handleCourseCompletion} />;
        })}
    </div>
  );
}

EnrolledCoursesList.propTypes = {
  enrolledCoursesIds: PropTypes.arrayOf(PropTypes.string),
  courses: PropTypes.arrayOf(PropTypes.object),
  user: PropTypes.object,
};
