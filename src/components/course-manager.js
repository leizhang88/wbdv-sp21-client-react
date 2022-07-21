import React, {useEffect, useState} from "react";
import {Link, Route} from "react-router-dom";
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import courseService from "../services/course-service";
import {connect} from "react-redux";

const CourseManager = (
  {
    courses=[],
    findAllCourses,
    createCourse,
    deleteCourse,
    updateCourse,
  }
  ) => {
  useEffect(() => findAllCourses(), []);
  const [courseTitle, setCourseTitle] = useState("NEW COURSE");
  return (
    <div>
      <div className="wbdv-sticky-navbar mb-3 shadow-sm">
        <div className="row">
          <div className="col-1">
            <i className="fas fa-2x fa-bars"></i>
          </div>
          <div className="col-3 wbdv-navbar-title">
            <span>Course Manager</span>
          </div>
          <div className="col-6">
            <input
              onChange={(e) => setCourseTitle(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="col-2">
							<span className="float-start">
							  <i
                  onClick={() => createCourse({title: courseTitle})}
                  className="fas fa-2x fa-circle-plus wbdv-add-course-btn"
                ></i>
              </span>
          </div>
        </div>
      </div>
      <div className="container-lg">

        <Route path="/courses/table" exact={true}>
          <CourseTable
            courses={courses}
            updateCourse={updateCourse}
            deleteCourse={deleteCourse}
          />
        </Route>
        <Route path="/courses/grid" exact={true}>
          <CourseGrid
            courses={courses}
            deleteCourse={deleteCourse}
          />
        </Route>
      </div>
    </div>
  )
}

const stmp = (state) => ({
  ...state,
  courses: state.courseReducer.courses
})

const dtmp = (dispatch) => ({
  findAllCourses: () =>
    courseService.findAllCourses()
      .then(courses => dispatch({
        type: "FIND_ALL_COURSES",
        courses
      })),
  createCourse: (course) =>
    courseService.createCourse(course)
      .then(course => dispatch({
        type: "CREATE_COURSE",
        course
      })),
  deleteCourse: (course) =>
    courseService.deleteCourse(course._id)
      .then(status => dispatch({
        type: "DELETE_COURSE",
        courseToDelete: course
      })),
  updateCourse: (course) =>
    courseService.updateCourse(course._id, course)
      .then(status => dispatch({
        type: "UPDATE_COURSE",
        course
      }))
})

export default connect(stmp, dtmp)(CourseManager);