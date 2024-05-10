import { useState } from "react";
import { useSelector } from "react-redux";
import { selectGetCourses } from "../../redux/reducers";
import CourseDetailsScreen from "./CourseDetailsScreen";

export default function CourseListing() {
  const courses = useSelector(selectGetCourses);
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const getFilteredCourses = (query, courses) => {
    if (!query) return courses;
    return courses.filter(course => course.name.toLowerCase().includes(query.toLowerCase()));
  };

  const filteredCourses = getFilteredCourses(query, courses);

  return (
    <div className="screen">
      <div className="search-bar">
        <label htmlFor="search">
          Search: <input type="text" onChange={handleSearch} />
        </label>
      </div>
      {filteredCourses.map(course => <CourseDetailsScreen key={course.id} course={course} />)}
    </div>
  );
}
