import React, {useEffect} from "react";
import EditableItem from "./editable-item";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import topicService from "../services/topic-service";

const TopicPills = (
  {
    topics=[],
    findTopicsForLesson,
    createTopic,
    deleteTopic,
    updateTopic,
  }
  ) => {
  const {courseId, moduleId, lessonId, topicId} = useParams();
  useEffect(() => findTopicsForLesson(lessonId), [lessonId]);

  return (
    <div className="mb-3">
      <h4>Topics</h4>
      <nav className="nav nav-pills">{
        topics.map((topic, idx) =>
          <li key={idx} className="nav-item">
            <EditableItem
              to={`/editor/${courseId}/${moduleId}/${lessonId}/${topic._id}`}
              deleteItem={deleteTopic}
              updateItem={updateTopic}
              item={topic}
              active={topic._id === topicId}
            />
          </li>
        )
      }
        <a className="nav-link" herf="#">
          <i
            onClick={() => createTopic(lessonId)}
            className="fas fa fa-plus-circle justify-content-center"
          ></i>
        </a>
      </nav>
      {/*{*/}
      {/*  topicId !== "undefined" && typeof topicId !== "undefined" &&*/}
      {/*  topics.find(t => t._id === topicId) &&*/}
      {/*  <p className="my-2">{*/}
      {/*    topics.filter(t => t._id === topicId)[0]._id*/}
      {/*    }*/}
      {/*  </p>*/}
      {/*}*/}
    </div>
  )
}

const stpm = (state) => ({
  ...state,
  topics: state.topicReducer.topics
})

const dtpm = (dispatch) => ({
  findTopicsForLesson: (lessonId) =>
    topicService.findTopicsForLesson(lessonId)
      .then(actualTopics => dispatch({
        type: "FIND_TOPICS_FOR_LESSON",
        topics: actualTopics
      })),
  createTopic: (lessonId) =>
    topicService.createTopic(lessonId, {
      title: "NEW TOPIC",
    })
      .then(newTopic => {
        dispatch({
          type: 'CREATE_TOPIC',
          topic: newTopic
        })
        return <p>content</p>
      }),
  deleteTopic: (topic) =>
    topicService.deleteTopic(topic._id)
      .then(status => dispatch({
        type: 'DELETE_TOPIC',
        topicToDelete: topic
      })),
  updateTopic: (topic) =>
    topicService.updateTopic(topic._id, topic)
      .then(status => dispatch({
        type: 'UPDATE_TOPIC',
        topic
      }))
})

export default connect(stpm, dtpm)(TopicPills);
