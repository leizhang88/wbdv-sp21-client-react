import React, {useEffect} from "react";
import {useParams, Link, Route} from "react-router-dom";
import {connect, Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";
import courseService from "../services/course-service";
import WidgetList from "./course-editor/widgets/widget-list";

const CourseEditor = (
  {
    history,
    courses = [],
    findAllCourses,
  }
) => {
  const {courseId} = useParams();
  useEffect(() => {findAllCourses()}, []);
  const courseTitle =
    (courses === "undefined" || courses.length === 0 ? "Course" : courses.find(c => c._id === courseId).title);
  return (
    <div className="container-md">
      <div className="row">
        <nav className="col-10">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item"><Link to="/courses/table">Courses</Link></li>
            <li className="breadcrumb-item active">{courseTitle}</li>
          </ol>
        </nav>
        <div className="col-2 d-flex justify-content-end">
          <i onClick={() => history.goBack()} className="fas fa fa-arrow-rotate-left"></i>
        </div>
      </div>
      <h2>

      </h2>
      <div className="row">
        <div className="col-3">
          <ModuleList/>
        </div>
        <div className="col-9">
          <LessonTabs/>
          <TopicPills/>
          <WidgetList/>
        </div>
      </div>
    </div>
  );
}

const stmp = (state) => ({
  ...state,
  courses: state.courseReducer.courses
})

const dtmp = (dispatch) => ({
  findAllCourses: () =>
    courseService.findAllCourses()
      .then(actualCourses => dispatch({
        type: "FIND_ALL_COURSES",
        courses: actualCourses
      }))
})

export default connect(stmp, dtmp)(CourseEditor);