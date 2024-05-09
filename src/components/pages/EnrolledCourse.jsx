import PropTypes from "prop-types";

export default function EnrolledCourse(props) {
  return (
    <div
      className={`course course--collapsed ${props.course.isCompleted ? "course--completed" : null}`}
    >
      <div className="thumbnail">
        <img src={props.course.thumbnail} alt="" />
      </div>
      <div className="info">
        <h2>Title: {props.course.name}</h2>
        <h3>Instructor: {props.course.instructor}</h3>
        <label htmlFor="completion">
          Completed
          <input
            checked={props.course.isCompleted}
            type="checkbox"
            id="completion"
            onChange={() => props.handleCourseCompletion(props.course)}
          />
        </label>
      </div>
    </div>
  );
}

EnrolledCourse.propTypes = {
  course: PropTypes.object,
  handleCourseCompletion: PropTypes.func,
};
