import React from "react";

const initialState = {
  modules: [
    {_id: '0032', title: 'module-32'},
    {_id: '0046', title: 'module-46'},
  ]
}

const moduleReducer = (state=initialState, action) => {
  switch (action.type) {
    case  'CREATE_MODULE':
    case 'DELETE_MODULE':
    case 'UPDATE_MODULE':
    default:
      return state;
  }
}

export default moduleReducer;