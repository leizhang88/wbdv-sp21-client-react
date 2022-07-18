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
        <table className="table">
          <thead>
          <tr>
            <th>Title</th>
            <th>Owned by</th>
            <th>Last modified</th>
            <th>
              <span className="float-end">
                <Link to="/courses/grid">
                  <i className="fas fa-2x fa-th-large"></i>
                </Link>
              </span>
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