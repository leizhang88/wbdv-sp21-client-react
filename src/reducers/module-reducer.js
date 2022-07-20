import React from "react";

const initialState = {
  modules: [
    // {_id: '0032', title: 'module-32'},
    // {_id: '0046', title: 'module-46'},
  ]
}

const moduleReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'FIND_MODULES_FOR_COURSE':
      return {
        ...state,
        modules: action.modules
      }
    case  'CREATE_MODULE':
      return {
        modules: [
          ...state.modules,
          action.module
        ]
      }
    case 'DELETE_MODULE':
      return {
        ...state,
        modules: state.modules.filter(module => module._id === action.moduleToDelete._id ? false : true)
      }
    case 'UPDATE_MODULE':
      return {
        ...state,
        modules: state.modules.map(module => module._id === action.module._id ? action.module : module)
      }
    default:
      return state;
  }
}

export default moduleReducer;