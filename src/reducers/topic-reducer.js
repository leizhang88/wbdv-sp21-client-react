import React from "react";

const initialState = {
  topics: [
    // {_id: '01', title: 'Map'},
    // {_id: '02', title: 'Filter'},
    // {_id: '03', title: 'Spread'}
  ]
}

const topicReducer = (state=initialState, action) => {
  switch (action.type) {
    case "FIND_TOPICS_FOR_LESSON":
      return {
        ...state,
        topics: action.topics
      }
    case 'CREATE_TOPIC':
      return ({
        ...state,
        topics: [
          ...state.topics,
          {_id: (new Date()).getTime(), title: 'NEW TOPIC'}
        ]
      })
    case 'DELETE_TOPIC':
      return ({
        ...state,
        topics: state.topics.filter(t => t._id !== action.topicToDelete._id)
      })
    case 'UPDATE_TOPIC':
      return ({
        ...state,
        topics: state.topics.map(t => t._id === action.topic._id ? action.topic : t)
      })
    default:
      return state;
  }
}

export default topicReducer;