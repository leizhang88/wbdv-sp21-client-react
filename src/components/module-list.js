import React from "react";
import {connect} from "react-redux";
import EditableItem from "./editable-item";

const ModuleList = (
  {
    myModules=[],
    createModule,
    deleteModule,
    updateModule
  }
) => (
  <div>
    <h2>Module List</h2>
    <ul className="list-group">
      {
        myModules.map(module =>
          <li key={module._id} className="list-group-item">
            <EditableItem
              deleteItem={deleteModule}
              updateItem={updateModule}
              item={module}
            />
          </li>
        )
      }
      <li className="list-group-item">
        <span className="d-flex justify-content-center">
          <i onClick={createModule} className="fas fa-plus"></i>
        </span>
      </li>
    </ul>
  </div>
)

const stateToPropertyMapper = (state) => ({
  myModules: state.moduleReducer.modules
})

const dispatchToPropertyMapper = (dispatch) => ({
  createModule: () => dispatch({type: 'CREATE_MODULE'}),
  deleteModule: (module) => dispatch({
    type: 'DELETE_MODULE',
    moduleToDelete: module
  }),
  updateModule: (module) => dispatch({
    type: 'UPDATE_MODULE',
    module
  })
})

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(ModuleList)
