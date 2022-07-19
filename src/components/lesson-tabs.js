import React from "react";
import {connect} from "react-redux";
import EditableItem from "./editable-item";

const LessonTabs = ({lessons=[]}) => (
  <div>
    <h3>Lesson Tabs</h3>
    <ul className="nav nav-tabs">
      {
        lessons.map(lesson =>
          <li key={lesson._id} className="nav-item">
            <a className="nav-link" href="#">
              <EditableItem item={lesson}/>
            </a>
          </li>
        )
      }
    </ul>
  </div>
)

const stpm = (state) => ({
    lessons: state.lessonReducer.lessons
})
const dtpm = (dispatch) => {}

export default connect(stpm, dtpm)(LessonTabs);