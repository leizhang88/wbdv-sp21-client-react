import React from "react";
import CourseCard from "./course-card";
import {Link} from "react-router-dom";

const CourseGrid = ({courses, deleteCourse}) =>
  <div>
    <div className="row">
      <nav className="col-10">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item active">Courses</li>
        </ol>
      </nav>
      <span className="col-2 d-flex justify-content-end">
        <Link to="/courses/table">
          <i className="fas fa-1x fa-list float-end"></i>
        </Link>
      </span>
    </div>
    <div className="row mt-3">
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