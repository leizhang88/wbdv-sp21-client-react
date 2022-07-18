import React from "react";
import { useHistory } from "react-router-dom";

const CourseEditor = ({history}) => {
  return (
    <div>
      <h2>
        Course Editor
        <i onClick={() => history.goBack()} className="fas fa-times float-end"></i>
      </h2>
    </div>
  );
};

export default CourseEditor;