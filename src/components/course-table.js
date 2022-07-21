import React from "react";
import CourseRow from "./course-row";
import {Link} from "react-router-dom";

class CourseTable extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="row">
          <nav className="col-10">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item active">Courses</li>
            </ol>
          </nav>
          <span className="col-2 d-flex justify-content-end">
            <Link to="/courses/grid">
              <i className="fas fa fa-th-large"></i>
            </Link>
          </span>
        </div>
        <table className="table">
          <thead>
          <tr>
            <th>Title</th>
            <th>Owned by</th>
            <th>Last modified</th>
            <th>
            </th>
          </tr>
          </thead>
          <tbody>
          {
            this.props.courses.map((course, idx) =>
              <CourseRow
                key={idx}
                title={course.title}
                owner={course.owner}
                lastModified={course.lastModified}
                course={course}
                updateCourse={this.props.updateCourse}
                deleteCourse={this.props.deleteCourse}
              />
            )
          }
          </tbody>
        </table>
      </div>)
  }
}

export default CourseTable;