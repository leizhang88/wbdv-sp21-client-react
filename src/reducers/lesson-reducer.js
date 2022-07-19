import React from "react";

const initialState = {
  lessons: [
    {_id: '01', title: 'Lesson 01'},
    {_id: '02', title: 'Lesson 02'},
  ]
}

const lessonReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'CREATE_LESSON':
    case 'DELETE_LESSON':
    case 'UPDATE_LESSON':
    default:
      return state
  }
}

export default lessonReducer;