import logo from './logo.svg';
import './App.css';
import CourseManager from "./components/course-manager";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home";
import CourseEditor from "./components/course-editor";

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Route path="/" exact={true} component={Home}/>
        <Route path="/courses" component={CourseManager}/>
        <Route path="/editor" component={CourseEditor}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
