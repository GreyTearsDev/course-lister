import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCourseToUser, removeCourseFromUser, selectGetCourses, toggleEnroll } from "../../redux/reducers";
import CourseMainInfo from "./CourseMainInfo";
import CourseSecondaryInfo from "./CourseSecondaryInfo";

export default function CourseDetailsScreen({ course }) {
  const enroll = useSelector(selectGetCourses).find(c => c.id === course.id).enrolled;
  const [expandCourse, setExpandCourse] = useState(false);
  const dispatch = useDispatch();

  const handleEnroll = () => {
    if (!enroll) {
      dispatch(addCourseToUser(course.id));
    } else {
      dispatch(removeCourseFromUser(course.id));
    }
    dispatch(toggleEnroll(course.id));
  };

  const handleClick = () => {
    setExpandCourse(!expandCourse);
  };

  return (
    <div key={course.id} className={`course ${expandCourse ? "course--expanded" : "course--collapsed"}`}>
      <div className="thumbnail">
        <img src={course.thumbnail} />
      </div>

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

      <button className="btn btn-large" onClick={handleClick}>{expandCourse ? "Collapse" : "Expand"}</button>
    </div>
  );
}

CourseDetailsScreen.propTypes = {
  course: PropTypes.object.isRequired,
};
