import React from "react";
import {useHistory} from "react-router-dom";
import moduleReducer from "../reducers/module-reducer";
import {createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import lessonReducer from "../reducers/lesson-reducer";

// const store = createStore(moduleReducer)
const store = createStore(lessonReducer)

const CourseEditor = ({history}) => {
  return (
    <Provider store={store}>
      <div>
        <h2>
          Course Editor
          <i onClick={() => history.goBack()} className="fas fa-times float-end"></i>
        </h2>
        <ModuleList/>
        <LessonTabs/>
      </div>
    </Provider>
  );
};

export default CourseEditor;