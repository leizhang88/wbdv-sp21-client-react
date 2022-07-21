import React, {useEffect} from "react";
import {connect} from "react-redux";
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import lessonService from "../services/lesson-service";

const LessonTabs = (
  {
    lessons=[],
    findLessonsForModule,
    createLesson,
    deleteLesson,
    updateLesson,
  }
  ) => {
  const {courseId, moduleId, lessonId} = useParams();
  useEffect(() => {
    if(moduleId !== "undefined" && typeof moduleId !== "undefined") {
      findLessonsForModule(moduleId)}
    },
    [moduleId]);
  return (
    <div className="mb-3">
      <h3>Lessons</h3>
      <ul className="nav nav-tabs">
        {
          lessons.map((lesson, idx) =>
            <li key={idx} className="nav-item">
              <EditableItem
                to={`/courses/edit/${courseId}/${moduleId}/${lesson._id}`}
                deleteItem={deleteLesson}
                updateItem={updateLesson}
                item={lesson}
                active={lesson._id === lessonId}
              />
            </li>
          )
        }
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i
              onClick={() => createLesson(moduleId)}
              className="fas fa fa-plus-circle justify-content-center"
            ></i>
          </a>
        </li>
      </ul>
    </div>
  )
}

const stpm = (state) => ({
  lessons: state.lessonReducer.lessons
})
const dtpm = (dispatch) => ({
  findLessonsForModule: (moduleId) =>
    lessonService.findLessonsForModule(moduleId)
      .then(actualLessons => dispatch({
        type: "FIND_LESSONS_FOR_MODULE",
        lessons: actualLessons
      })),
  createLesson: (moduleId,lesson) =>
    lessonService.createLesson(moduleId, {title: "NEW LESSON"})
      .then(newLesson => dispatch({
        type: 'CREATE_LESSON',
        lesson: newLesson
      })),
  deleteLesson: (lesson) =>
    lessonService.deleteLesson(lesson._id)
      .then(status => dispatch({
        type: 'DELETE_LESSON',
        lessonToDelete: lesson
      })),
  updateLesson: (lesson) =>
    lessonService.updateLesson(lesson._id, lesson)
      .then(status => dispatch({
        type: 'UPDATE_LESSON',
        lesson
      }))
})

export default connect(stpm, dtpm)(LessonTabs);