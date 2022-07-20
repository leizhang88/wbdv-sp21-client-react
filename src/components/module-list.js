import React, {useEffect} from "react";
import {connect} from "react-redux";
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import moduleService from "../services/module-service";

const ModuleList = (
  {
    myModules=[],
    createModule,
    deleteModule,
    updateModule,
    findModulesForCourse
  }
) => {
  const {courseId, moduleId} = useParams();
  useEffect(() =>
      findModulesForCourse(courseId),
    []
  );
  return (
    <div>
      <h2>Modules</h2>
      <ul className="list-group">
        {
          myModules.map((module, idx) =>
            <li key={idx} className={`list-group-item ${module._id === moduleId ? 'active' : ''}`}>
              <EditableItem
                to={`/editor/${courseId}/${module._id}`}
                deleteItem={deleteModule}
                updateItem={updateModule}
                item={module}
              />
            </li>
          )
        }
        <li className="list-group-item">
        <span className="d-flex justify-content-center">
          <i onClick={() => createModule(courseId)} className="fas fa-plus-circle"></i>
        </span>
        </li>
      </ul>
    </div>
  )
}

const stateToPropertyMapper = (state) => ({
  myModules: state.moduleReducer.modules
})

const dispatchToPropertyMapper = (dispatch) => ({
  findModulesForCourse: (courseId) =>
    moduleService.findModulesForCourse(courseId)
      .then(actualModules => dispatch({
        type: 'FIND_MODULES_FOR_COURSE',
        modules: actualModules
      })),
  createModule: (courseId) =>
    moduleService.createModulesForCourse(courseId, {title: "NEW MODULE"})
      .then(newModule => dispatch({
        type: 'CREATE_MODULE',
        module: newModule
      })),
  deleteModule: (module) =>
    moduleService.deleteModule(module._id)
      .then(status => dispatch({
        type: 'DELETE_MODULE',
        moduleToDelete: module
      })),
  updateModule: (module) =>
    moduleService.updateModule(module._id, module)
      .then(status => dispatch({
        type: 'UPDATE_MODULE',
        module
      }))
})

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(ModuleList)
