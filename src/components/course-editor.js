import React from "react";
import {useParams} from "react-router-dom";
import moduleReducer from "../reducers/module-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import lessonReducer from "../reducers/lesson-reducer";
import TopicPills from "./topic-pills";
import topicReducer from "../reducers/topic-reducer";

const reducer = combineReducers({
  moduleReducer: moduleReducer,
  lessonReducer: lessonReducer,
  topicReducer: topicReducer
})

const store = createStore(reducer)

const CourseEditor = ({history}) => {
  const {courseId, lessonId} = useParams();
  return (
    <Provider store={store}>
      <div className="container-md">
        <h2>
          Course {courseId}
          <i onClick={() => history.goBack()} className="fas fa-times float-end"></i>
        </h2>
        <div className="row">
          <div className="col-4">
            <ModuleList/>
          </div>
          <div className="col-8">
            <LessonTabs/>
            <TopicPills/>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default CourseEditor;