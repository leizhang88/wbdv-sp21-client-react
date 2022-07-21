import React from "react";
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import {Link, Route} from "react-router-dom";
import courseService from "../services/course-service";

class CourseManagerClass extends React.Component {

  state = {
    courses: [],
    title: 'XXXX'
  }

  componentDidMount() {
    courseService.findAllCourses().then(courses => this.setState({courses}));
  }

  getDateTime = () => {
    let d = new Date();
    return (`
    ${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}@${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}
    `);
  }

  addCourse = () => {
    const newCourse = {
      title: this.state.title,
      owner: 'Me',
      lastModified: this.getDateTime()
    }
    courseService.createCourse(newCourse)
      .then(course => this.setState((prevState) => (
        {
          ...prevState,
          courses: [...prevState.courses, course]
        })))
  }

  deleteCourse = (courseToDelete) => {
    courseService.deleteCourse(courseToDelete._id)
      .then(status => this.setState((prevState) => ({
        ...prevState, courses: prevState.courses.filter(course => course !== courseToDelete)
      })))
  }

  updateCourse = (newCourse) => {
    courseService.updateCourse(newCourse._id, newCourse)
      .then(status => this.setState(prevState => ({
        ...prevState, courses: prevState.courses.map((c) => c._id === newCourse._id ? newCourse : c)
      })))
  }

  render() {
    return (
      <div>
        <div className="wbdv-sticky-navbar mb-3">
          <div className="row">
            <div className="col-1">
              <i className="fas fa-2x fa-bars"></i>
            </div>
            <div className="col-2 wbdv-navbar-title">
              <span>Course Manager</span>
            </div>
            <div className="col-8">
              <input
                onChange={(event) => this.state.title = event.target.value}
                className="form-control"
              />
            </div>
            <div className="col-1">
							<span className="float-end">
							  <i
                  onClick={this.addCourse}
                  className="fas fa-2x fa-circle-plus wbdv-add-course-btn"
                ></i>
                <Link to="/">
                  <i className="fas fa-2x fa-home"></i>
                </Link>
              </span>
            </div>
          </div>
        </div>
        <div className="container-lg">
          <Route path="/courses/table" exact={true}>
            <CourseTable
              courses={this.state.courses}
              updateCourse={this.updateCourse}
              deleteCourse={this.deleteCourse}
            />
          </Route>
          <Route path="/courses/grid" exact={true}>
            <CourseGrid
              courses={this.state.courses}
              deleteCourse={this.deleteCourse}
            />
          </Route>
        </div>
      </div>);
  }

}

export default CourseManagerClass;