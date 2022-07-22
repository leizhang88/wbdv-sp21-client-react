import React from "react";
import {Link} from "react-router-dom";

export default () => (
  <div className="container-sm">
    <div className="d-flex justify-content-center">
      <h1 className="wbdv-home-title">Whiteboard</h1>
    </div>
    <div className="wbdv-home-subtitle">To even better online learning experience</div>
    <div className="row">
      <div className="d-grid gap-2 col-sm-8 col-md-4 mx-auto">
        <button className="btn btn-primary" type="button">
          <Link to="/courses/table" className="list-group-item">
            Go to Courses
          </Link>
        </button>
      </div>
    </div>
  </div>
)