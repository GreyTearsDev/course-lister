import PropTypes from "prop-types";

export default function CourseMainInfo(props) {
  return (
    <div className="info__main">
      {props.expandCourse ? null : (
        <button
          className="btn btn--large"
          onClick={props.handleEnroll}
        >
          {!props.enroll ? "Enroll" : "Drop out"}
        </button>
      )}
      <h2>{props.course.name}</h2>
      <h4>Instructor: {props.course.instructor}</h4>
      <h4>Duration: {props.course.duration}</h4>
      <h4>Status: {props.course.enrollmentStatus}</h4>
      <h4>
        Prerequisites: {props.course.prerequisites.join(", ")}
      </h4>
      <p>{props.course.description}</p>
    </div>
  );
}

CourseMainInfo.propTypes = {
  expandCourse: PropTypes.bool,
  handleEnroll: PropTypes.func,
  course: PropTypes.object,
};
