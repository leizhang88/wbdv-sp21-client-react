import React, {useState} from "react";
import {Link} from "react-router-dom";
import {updateCourse} from "../services/course.service.client";

const CourseRow = (
  {
    title,
    owner,
    lastModified,
    course,
    updateCourse,
    deleteCourse
  }) => {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title)

  const saveTitle = () => {
    setEditing(false);
    const newCourse = {
      ...course,
      title: newTitle
    }
    updateCourse(newCourse)
  }

  return (
    <tr>
      <td>
        {
          !editing &&
          <Link to="/courses/editor">
            {title}
          </Link>
        }
        {
          editing &&
          <input
            onChange={(event) => setNewTitle(event.target.value)}
            value={newTitle}
            className="form-control"
          />
        }
      </td>
      <td>{owner}</td>
      <td>{lastModified}</td>
      <td>
      <span className="d-flex justify-content-end">
        {editing && <i onClick={() => saveTitle()} className="fas fa-check me-sm-2 me-xs-1"></i>}
        {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit me-sm-2 me-xs-1"></i>}
        <i onClick={() => deleteCourse(course)} className="fas fa-trash me-sm-2 me-xs-1"></i>
      </span>
      </td>
    </tr>
  );
}

export default CourseRow;