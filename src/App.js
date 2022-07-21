import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import {Provider} from "react-redux";
import Home from "./components/home";
import CourseManager from "./components/course-manager";
import CourseEditor from "./components/course-editor";
import {combineReducers, createStore} from "redux";
import courseReducer from "./reducers/course-reducer";
import moduleReducer from "./reducers/module-reducer";
import lessonReducer from "./reducers/lesson-reducer";
import topicReducer from "./reducers/topic-reducer";
import widgetReducer from "./reducers/widget-reducer";

const reducer = combineReducers({
  courseReducer: courseReducer,
  moduleReducer: moduleReducer,
  lessonReducer: lessonReducer,
  topicReducer: topicReducer,
  widgetReducer: widgetReducer,
})
const store = createStore(reducer)

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact={true} component={Home}/>
        <Provider store={store}>
          {/*<Route path="/courses" component={CourseManagerClass}/>*/}
          <Route path="/courses" component={CourseManager}/>
          <Route path={[
            "/courses/edit/:courseId",
            "/courses/edit/:courseId/:moduleId",
            "/courses/edit/:courseId/:moduleId/:lessonId",
            "/courses/edit/:courseId/:moduleId/:lessonId/:topicId",
            "/courses/edit/:courseId/:moduleId/:lessonId/:topicId/:widgetId",
            "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId"
          ]}
                 exact={true}
                 render={(props) => <CourseEditor {...props}/>}/>
        </Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
