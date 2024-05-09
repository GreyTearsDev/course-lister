import PropTypes from "prop-types";
import Syllabus from "./Syllabus";

export default function CourseSecondaryInfo(props) {
  return (
    <>
      {props.expandCourse
        ? (
          <div className="info__secondary">
            <h4>Schedule: {props.course.schedule}</h4>
            <h4>{props.course.location}</h4>
            <Syllabus syllabus={props.course.syllabus} />
          </div>
        )
        : null}
    </>
  );
}

CourseSecondaryInfo.propTypes = {
  expandCourse: PropTypes.bool,
  course: PropTypes.object,
};
