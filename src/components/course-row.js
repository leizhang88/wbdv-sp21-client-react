import React from "react";

const CourseRow = ({title, owner, lastModified, course, deleteCourse}) =>
    <tr>
        <td>{title}</td>
        <td>{owner}</td>
        <td>{lastModified}</td>
        <td>
            <span className="d-flex justify-content-end">
                <i className="fas fa-check me-sm-2 me-xs-1"></i>
                <i className="fas fa-trash me-sm-2 me-xs-1" onClick={() => deleteCourse(course)}></i>
                <i className="fas fa-edit me-sm-2 me-xs-1"></i>
            </span>
        </td>
    </tr>

export default CourseRow;