import React from "react";
import {connect} from "react-redux";

const ModuleList = ({myModules}) => (
  <div>
    <h2>Module List</h2>
    <ul className="list-group">
      {
        myModules.map(module =>
          <li className="list-group-item">
            {module.title}
          </li>
        )
      }
    </ul>
  </div>
)

const stateToPropertyMapper = (state) => {
  return {
    myModules: state.modules
  }
}

const dispatchToPropertyMapper = (dispatch) => {

}

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(ModuleList)
