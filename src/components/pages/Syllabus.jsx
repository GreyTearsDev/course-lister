import { PropTypes } from "prop-types";

export default function Syllabus({ syllabus }) {
  return (
    <div className="list list--small">
      <h2>Syllabus</h2>
      {syllabus.map(content => {
        return (
          <div key={content.week} className="list__syllabus">
            <h3>Topic: {content.topic}</h3>
            <h4>Week {content.week}</h4>
            <p>{content.content}</p>
          </div>
        );
      })}
    </div>
  );
}

Syllabus.propTypes = {
  syllabus: PropTypes.arrayOf(PropTypes.object).isRequired,
};
