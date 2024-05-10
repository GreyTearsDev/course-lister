import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home centered-message">
      <h1>Welcome to Course Lister</h1>
      <h3>
        Check out our courses 👉 <Link to="/course-listing">HERE</Link>
      </h3>
    </div>
  );
}
