const MODULES_URL = "https://wbdv-generic-server.herokuapp.com/api/lzhang/modules"
const LESSONS_URL = "https://wbdv-generic-server.herokuapp.com/api/lzhang/lessons"

export const findLessonsForModule = (moduleId) =>
  fetch(`${MODULES_URL}/${moduleId}/lessons`)
    .then(response => response.json())

export const createLesson = (moduleId, lesson) =>
  fetch(`${MODULES_URL}/${moduleId}/lessons`, {
    method: "POST",
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(lesson)
  })
    .then(response => response.json())

export const deleteLesson = (lessonId) =>
  fetch(`${LESSONS_URL}/${lessonId}`, {
    method: "DELETE"
  }).then(response => response.json())

export const updateLesson = (lessonId, lesson) =>
  fetch(`${LESSONS_URL}/${lessonId}`, {
    method: "PUT",
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(lesson)
  })
    .then(response => response.json())

export default {
  findLessonsForModule,
  createLesson,
  deleteLesson,
  updateLesson
}
