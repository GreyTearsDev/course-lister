import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setCompletionStatus } from "../../redux/reducers";

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

          return (
            <div
              className={`course course--collapsed ${course.isCompleted ? "course--completed" : null}`}
              key={course.id}
            >
              <div className="thumbnail">
                <img src={course.thumbnail} alt="" />
              </div>
              <div className="info">
                <h2>Title: {course.name}</h2>
                <h3>Instructor: {course.instructor}</h3>
                <label htmlFor="completion">
                  Completed
                  <input
                    checked={course.isCompleted}
                    type="checkbox"
                    id="completion"
                    onChange={() => handleCourseCompletion(course)}
                  />
                </label>
              </div>
            </div>
          );
        })}
    </div>
  );
}

EnrolledCoursesList.propTypes = {
  enrolledCoursesIds: PropTypes.arrayOf(PropTypes.string),
  courses: PropTypes.arrayOf(PropTypes.object),
  user: PropTypes.object,
};
