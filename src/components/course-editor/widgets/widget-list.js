import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import widgetService from "../../../services/widget-service";
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";

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
  return (<div>
      <div className="d-flex">
        <h4>Widget List</h4>
        <div className="mx-2">
            <span onClick={() => createWidget(topicId)}
                  className="badge rounded-pill text-bg-warning">
              <i className="fas fa fa-plus mx-0"></i>
            </span>
        </div>
      </div>
      <ul className="list-group">
        {widgets.map((w, idx) => (
          <li key={idx} className="list-group-item">
            {w.type === "HEADING" && <HeadingWidget widget={w}/>}
            {w.type === "PARAGRAPH" && <ParagraphWidget widget={w}/>}
          </li>))}
        {JSON.stringify(widgets)}
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
  createWidget: (topicId) =>
    widgetService.createWidget(topicId, {text: "WIDGET TEXT"})
    .then(newWidget => dispatch({
      type: "CREATE_WIDGET", widget: newWidget
    })),
  deleteWidget: (widget) =>
    widgetService.deleteWidget(widget._id)
    .then(statue => dispatch({
      type: "DELETE_WIDGET", widget
    })),
  updateWidget: (widget) =>
    widgetService.updateWidget(widget._id, widget)
    .then(status => dispatch({
      type: "UPDATE_WIDGET", widget
    }))
})

export default connect(stmp, dtmp)(WidgetList);