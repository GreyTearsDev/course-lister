import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <h1>
        <Link to="/">Course Lister</Link>
      </h1>
      <ul>
        <li>
          <Link to="course-listing">courses</Link>
        </li>
        <li>
          <Link to="dashboard">dashboard</Link>
        </li>
      </ul>
    </nav>
  );
}
