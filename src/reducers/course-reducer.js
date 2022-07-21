import React from "react";

const initialState = {
  courses: []
}

const courseReducer = (state=initialState, action) => {
  switch (action.type) {
    case "FIND_ALL_COURSES":
      return {
        ...state,
        courses: action.courses
      }
    case "CREATE_COURSE":
      return {
        ...state,
        courses: [
          ...state.courses,
          action.course
        ]
      }
    case "DELETE_COURSE":
      return {
        ...state,
        courses: state.courses.filter(c => c._id !== action.courseToDelete._id)
      }
    case "UPDATE_COURSE":
      return {
        ...state,
        courses: state.courses.map(c => c._id === action.course._id ? action.course : c)
      }
    default:
      return state
  }
}

export default courseReducer;