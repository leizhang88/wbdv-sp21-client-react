import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import widgetService from "../../../services/widget-service";
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {LoremIpsum} from "lorem-ipsum";


const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 6
  }
});

const WidgetList = (
  {
    widgets = [],
    findWidgetsForTopic,
    createWidget,
    deleteWidget,
    updateWidget,
  }) => {
  const {topicId} = useParams();
  useEffect(() => findWidgetsForTopic(topicId), [topicId]);
  const [editingWidget, setEditingWidget] = useState({});
  const [type, setType] = useState("");
  const [text, setText] = useState("");
  return (<div>
      <div className="d-flex mb-2">
        <div className="text-secondary text-opacity-75">Add widget:</div>
        <div className="mx-1">
            <button onClick={() => {
              setType("HEADING");
              setText("Header");
              createWidget(topicId, {type, text})}}
                    className="btn btn-sm btn-outline-secondary wbdv-widget-btn">heading</button>
        </div>
        <div className="mx-1">
            <button onClick={() => {
              setType("PARAGRAPH");
              setText(lorem.generateParagraphs(2));
              createWidget(topicId, {type, text})}}
                    className="btn btn-sm btn-outline-secondary wbdv-widget-btn">paragraph</button>
        </div>
        <div className="mx-1">
            <button onClick={() => {
              setType("LIST");
              setText("first line\/nsecond line");
              createWidget(topicId, {type, text})}}
                    className="btn btn-sm btn-outline-secondary wbdv-widget-btn">list</button>
        </div>
        <div className="mx-1">
            <button onClick={() => {
              setType("IMAGE");
              setText("An image");
              createWidget(topicId, {type, text, src: ""})}}
                    className="btn btn-sm btn-outline-secondary wbdv-widget-btn">image</button>
        </div>
      </div>
      <ul className="list-group">
        {widgets.map((w, idx) => (
          <li key={idx} className="list-group-item">
            {
              w.type === "HEADING" &&
              <HeadingWidget
                widget={w}
                deleteWidget={deleteWidget}
                updateWidget={updateWidget}
              />
            }
            {
              w.type === "PARAGRAPH" && <ParagraphWidget widget={w}/>
            }
          </li>))}
      </ul>
    </div>)
}

const stmp = (state) => ({
  widgets: state.widgetReducer.widgets
})
const dtmp = (dispatch) => ({
  findWidgetsForTopic: (topicId) =>
    widgetService.findWidgetsForTopic(topicId)
    .then(actualWidgets => dispatch({
      type: "FIND_WIDGETS_FOR_TOPIC", widgets: actualWidgets
    })),
  createWidget: (topicId, widget) =>
    widgetService.createWidget(topicId, widget)
    .then(newWidget => dispatch({
      type: "CREATE_WIDGET", widget: newWidget
    })),
  deleteWidget: (widget) =>
    widgetService.deleteWidget(widget.id)
    .then(statue => dispatch({
      type: "DELETE_WIDGET", widget
    })),
  updateWidget: (widget) =>
    widgetService.updateWidget(widget.id, widget)
    .then(status => dispatch({
      type: "UPDATE_WIDGET", widget
    }))
})

export default connect(stmp, dtmp)(WidgetList);