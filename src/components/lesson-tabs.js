import React from "react";
import {connect} from "react-redux";

const LessonTabs = ({lessons=[]}) => (
  <div>
    <h3>Lesson Tabs</h3>
    <ul className="nav nav-tabs">
      {
        lessons.map(lesson =>
          <li className="nav-item">
            <a className="nav-link" href="#">{lesson.title}</a>
          </li>
        )
      }
    </ul>
  </div>
)

const stpm = (state) => {
  return {
    lessons: state.lessons
  }
}
const dtpm = (dispatch) => {}

export default connect(stpm, dtpm)(LessonTabs);