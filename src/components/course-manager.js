import React from "react";
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor";
import {Route, Routes} from "react-router-dom";
import courseService, {findAllCourses, deleteCourse} from "../services/course.service.client";

class CourseManager extends React.Component {

	state = {
		courses: [
			{title: 'CS5200', owner: 'me', lastModified: '07/08/2022'},
			{title: 'CS5600', owner: 'me', lastModified: '07/08/2022'},
			{title: 'CS5610', owner: 'me', lastModified: '07/08/2022'}
		]
	}

	componentDidMount() {
		courseService.findAllCourses().then(courses => this.setState({courses}));
	}

	addCourse = () => {
		const newCourse = {
			title: 'NEW COURSE',
			owner: 'NEW OWNER',
			lastModified: 'UNKNOWN'
		}
		courseService.createCourse(newCourse)
			.then(course => this.setState(
				(prevState) => ({
					...prevState,
					courses: [
						...prevState.courses,
						course
					]
				})))
	}

	deleteCourse = (courseToDelete) => {
		courseService.deleteCourse(courseToDelete._id)
			.then(status =>
				this.setState((prevState) => ({
					...prevState,
					courses: prevState.courses.filter(course => course !== courseToDelete)
				}))
			)
	}

	updateCourse = (newCourse) => {
		courseService.updateCourse(newCourse._id, newCourse)
			.then(status => this.setState(prevState => ({
				...prevState,
				courses: prevState.courses.map((c) => c._id === newCourse._id ? newCourse : c)
			})))
	}

	render() {
		return (
			<div>
				<h1>Course Manager</h1>
				<button onClick={this.addCourse}>Add Course</button>
				<Routes>
				<Route path="/courses/table" element={
					<CourseTable
						courses={this.state.courses}
						updateCourse={this.updateCourse}
						deleteCourse={this.deleteCourse}
					/>
				}
				/>
				<Route path="/courses/grid" element={
					<CourseGrid
						courses={this.state.courses}
						deleteCourse={this.deleteCourse}
					/>
				}
				/>
				<Route path="/courses/editor"
							 element={<CourseEditor/>}
				/>
				</Routes>
			</div>);
	}

}

export default CourseManager;