const COURSES_URL = "https://wbdv-generic-server.herokuapp.com/api/lzhang/courses";

export const findAllCourses = () =>
  fetch(COURSES_URL)
    .then(response => response.json());

export const createCourse = (course) =>
  fetch(COURSES_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(course)
  }).then(response => response.json());

export const deleteCourse = (courseId) =>
  fetch(`${COURSES_URL}/${courseId}`, {method: 'DELETE'})
    .then(response => response.json());

export const updateCourse = (courseId, course) =>
  fetch(`${COURSES_URL}/${courseId}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(course)
  }).then(response => response.json());

export default {
  findAllCourses,
  createCourse,
  deleteCourse,
  updateCourse
}