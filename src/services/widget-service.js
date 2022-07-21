const WIDGETS_URL = "http://localhost:8080/api/widgets"
const TOPICS_URL = "http://localhost:8080/api/topics"

export const findWidgetsForTopic = (topicId) =>
  fetch(`${TOPICS_URL}/${topicId}/widgets`)
    .then(response => response.json())

export const createWidget = (topicId, widget) =>
  fetch(`${TOPICS_URL}/${topicId}/widgets`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(widget)
  }).then(response => response.json())

export const deleteWidget = (widgetId) =>
  fetch(`${WIDGETS_URL}/${widgetId}`, {
    method: "DELETE"
  }).then(response => response.json())

export const updateWidget = (widgetId, widget) =>
  fetch(`${WIDGETS_URL}/${widgetId}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(widget)
  }).then(response => response.json())

export default {
  findWidgetsForTopic,
  createWidget,
  deleteWidget,
  updateWidget
}