import React from "react";
import {connect} from "react-redux";
import EditableItem from "./editable-item";

const LessonTabs = (
  {
    lessons=[],
    createLesson,
    deleteLesson,
    updateLesson
  }
  ) => (
  <div className="mb-3">
    <h3>Lessons</h3>
    <ul className="nav nav-tabs">
      {
        lessons.map((lesson, idx) =>
          <li key={idx} className="nav-item">
            <EditableItem
              deleteItem={deleteLesson}
              updateItem={updateLesson}
              item={lesson}
            />
          </li>
        )
      }
      <li className="nav-item">
        <a className="nav-link" href="#">
          <i
            onClick={createLesson}
            className="fas fa fa-plus justify-content-center"
          ></i>
        </a>
      </li>
    </ul>
  </div>
)

const stpm = (state) => ({
  lessons: state.lessonReducer.lessons
})
const dtpm = (dispatch) => ({
  createLesson: () => dispatch({type: 'CREATE_LESSON'}),
  deleteLesson: (lesson) => dispatch({
    type: 'DELETE_LESSON',
    lessonToDelete: lesson
  }),
  updateLesson: (lesson) => dispatch({
    type: 'UPDATE_LESSON',
    lesson
  })
})

export default connect(stpm, dtpm)(LessonTabs);