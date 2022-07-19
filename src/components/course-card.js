import React from "react";
import {Link} from "react-router-dom";

const CourseCard = ({course, deleteCourse}) => (
    <div className="col-3 mb-3">
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                    the card's content.</p>
                <Link to="/editor" className="btn btn-primary">
                  Edit
                </Link>
                <i onClick={() => deleteCourse(course)} className="fas fa-trash"></i>
            </div>
        </div>
    </div>
);

export default CourseCard;