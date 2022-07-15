import React from "react";
import CourseCard from "./course-card";

const CourseGrid = ({courses, deleteCourse}) =>
    <div>
        <h2>Course Grid</h2>
        <div className="row">
            {courses.map((course,idx) =>
                <CourseCard
                    key={idx}
                    course={course}
                    deleteCourse={deleteCourse}
                />
            )}
        </div>
    </div>

export default CourseGrid;