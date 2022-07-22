import React from "react";

const initialState = {
  widgets: [
    {_id: "10001003", type: "HEADING"}
  ]
}

const widgetReducer = (state=initialState, action) => {
  switch (action.type) {
    case "FIND_WIDGETS_FOR_TOPIC":
      return {
        ...state,
        widgets: action.widgets
      }
    case "CREATE_WIDGET":
      return {
        ...state,
        widgets: [
          ...state.widgets,
          action.widget
        ]
      }
    case "DELETE_WIDGET":
      return {
        ...state,
        widgets: state.widgets.filter(w => w.id !== action.widget.id)
      }
    case "UPDATE_WIDGET":
      return {
        ...state,
        widgets: state.widgets.map(w => w.id === action.widget.id ? action.widget : w)
      }
    default:
      return state;
  }
}

export default widgetReducer;