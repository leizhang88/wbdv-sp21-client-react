import React from "react";
import EditableItem from "./editable-item";
import {connect} from "react-redux";

const TopicPills = (
  {
    topics=[],
    createTopic,
    deleteTopic,
    updateTopic,
  }
  ) => (
  <div className="mb-3">
    <h3>Topics</h3>
    <nav className="nav nav-pills">{
      topics.map((topic, idx) =>
        <li key={idx} className="nav-item">
          <EditableItem
            createItem={createTopic}
            deleteItem={deleteTopic}
            updateItem={updateTopic}
            item={topic}
          />
        </li>
      )
    }
    <a className="nav-link" herf="#">
      <i
        onClick={createTopic}
        className="fas fa fa-plus justify-content-center"
      ></i>
    </a>
    </nav>
  </div>
)

const stpm = (state) => ({
  ...state,
  topics: state.topicReducer.topics
})

const dtpm = (dispatch) => ({
  createTopic: () => dispatch({type: 'CREATE_TOPIC'}),
  deleteTopic: (topic) => dispatch(
    {
      type: 'DELETE_TOPIC',
      topicToDelete: topic
    }
  ),
  updateTopic: (topic) => dispatch(
    {
      type: 'UPDATE_TOPIC',
      topic
    }
  )
})

export default connect(stpm, dtpm)(TopicPills);
