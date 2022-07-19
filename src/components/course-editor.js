import React from "react";
import {useHistory} from "react-router-dom";
import moduleReducer from "../reducers/module-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import lessonReducer from "../reducers/lesson-reducer";

const reducer = combineReducers({
  moduleReducer: moduleReducer,
  lessonReducer: lessonReducer
})

const store = createStore(reducer)

const CourseEditor = ({history}) => {
  return (
    <Provider store={store}>
      <div className="container-lg">
        <h2>
          Course Editor
          <i onClick={() => history.goBack()} className="fas fa-times float-end"></i>
        </h2>
        <div className="row">
          <div className="col-4">
            <ModuleList/>
          </div>
          <div className="col-8">
            <LessonTabs/>
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default CourseEditor;