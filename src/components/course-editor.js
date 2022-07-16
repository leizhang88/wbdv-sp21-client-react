import React from "react";
import { useNavigate } from "react-router-dom";

const CourseEditor = ({props}) => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>
        Course Editor
        <i onClick={() => navigate(-1)} className="fas fa-times float-end"></i>
      </h2>
    </div>
  );
};

export default CourseEditor;