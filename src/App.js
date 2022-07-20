import logo from './logo.svg';
import './App.css';
import CourseManager from "./components/course-manager";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home";
import CourseEditor from "./components/course-editor";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/courses" component={CourseManager}/>
        {/*<Route path="/editor" component={CourseEditor}/>*/}
        <Route path={[
          "/editor/:courseId",
          "/editor/:courseId/:moduleId",
          "/editor/:courseId/:moduleId/:lessonId",
          "/editor/:courseId/:moduleId/:lessonId/:topicId",
          "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId"
        ]}
               exact={true}
               render={(props) => <CourseEditor {...props}/>}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
