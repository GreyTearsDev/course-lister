import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCourseToUser, removeCourseFromUser, selectUser, toggleEnroll } from "../../redux/reducers";
import CourseMainInfo from "./CourseMainInfo";
import CourseSecondaryInfo from "./CourseSecondaryInfo";

export default function CourseDetailsScreen({ course }) {
  const [enroll, setEnroll] = useState(false);
  const [expandCourse, setExpandCourse] = useState(false);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleEnroll = () => {
    if (!enroll) {
      dispatch(addCourseToUser(course.id));
    } else {
      dispatch(removeCourseFromUser(course.id));
    }
    dispatch(toggleEnroll(course.id));
    setEnroll(!enroll);
  };

  const handleClick = () => {
    setExpandCourse(!expandCourse);
  };

  return (
    <div key={course.id} className="screen course">
      <div className="thumbnail">
        <img src={course.thumbnail} />
      </div>

      <div className="info">
        <CourseMainInfo
          course={course}
          handleEnroll={handleEnroll}
          enroll={enroll}
          expandCourse={expandCourse}
        />

        <CourseSecondaryInfo
          course={course}
          expandCourse={expandCourse}
        />

        <button onClick={handleClick}>{expandCourse ? "Collapse" : "Expand"}</button>
      </div>
    </div>
  );
}

CourseDetailsScreen.propTypes = {
  course: PropTypes.object.isRequired,
};
