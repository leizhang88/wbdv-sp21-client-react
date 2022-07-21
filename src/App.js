import logo from './logo.svg';
import './App.css';
import CourseManagerClass from "./components/course-manager-class";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home";
import CourseEditor from "./components/course-editor";
import {combineReducers, createStore} from "redux";
import courseReducer from "./reducers/course-reducer";
import {Provider} from "react-redux";
import moduleReducer from "./reducers/module-reducer";
import lessonReducer from "./reducers/lesson-reducer";
import topicReducer from "./reducers/topic-reducer";
import CourseManager from "./components/course-manager";

const reducer = combineReducers({
  courseReducer: courseReducer,
  moduleReducer: moduleReducer,
  lessonReducer: lessonReducer,
  topicReducer: topicReducer
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
