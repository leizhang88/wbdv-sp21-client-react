import React from "react";
import {Link} from "react-router-dom";

export default () => (
  <div className="container-lg">
    <h1>Home</h1>
    <div className="list-group">
      <Link to="/courses/table" className="list-group-item">
        Course Table
      </Link>
      <Link to="/courses/grid" className="list-group-item">
        Course Grid
      </Link>
      <Link to="/editor" className="list-group-item">
        Course Editor
      </Link>
    </div>
  </div>
)