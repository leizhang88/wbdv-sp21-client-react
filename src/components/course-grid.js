import React from "react";
import CourseCard from "./course-card";
import {Link} from "react-router-dom";

const CourseGrid = ({courses, deleteCourse}) =>
  <div>
    <Link to="/courses/table">
      <i className="fas fa-2x fa-list float-end"></i>
    </Link>
    <h2>Course Grid</h2>
    <div className="row">
      {courses.map((course, idx) =>
        <CourseCard
          key={idx}
          course={course}
          deleteCourse={deleteCourse}
        />
      )}
    </div>
  </div>

export default CourseGrid;