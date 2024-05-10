import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { setCompletionStatus } from "../../redux/reducers";
import EnrolledCourse from "./EnrolledCourse";

export default function EnrolledCoursesList(props) {
  const dispatch = useDispatch();

  const handleCourseCompletion = (course) => {
    dispatch(setCompletionStatus(course));
  };
  return (
    <div className="enrolled-courses">
      {props.courses.map(course => {
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
