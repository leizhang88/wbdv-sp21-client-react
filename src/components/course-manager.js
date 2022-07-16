import React from "react";
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor";
import {Route, Routes} from "react-router-dom";

class CourseManager extends React.Component {

	state = {
		courses: [
			{title: 'CS5200', owner: 'me', lastModified: '07/08/2022'},
			{title: 'CS5600', owner: 'me', lastModified: '07/08/2022'},
			{title: 'CS5610', owner: 'me', lastModified: '07/08/2022'}
		]
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
				{/*<Route path="/courses/editor" element={*/}
				{/*	<CourseEditor/>*/}
				{/*}*/}
				{/*/>*/}
				<Route path="/courses/editor"
							 element={<CourseEditor/>}
				/>
				</Routes>
			</div>);
	}

	addCourse = () => {
		const newCourse = {
			title: 'NEW COURSE',
			owner: 'NEW OWNER',
			lastModified: 'UNKNOWN'
		}
		this.state.courses.push(newCourse);
		this.setState(this.state);
	}

	deleteCourse = (courseToDelete) => {
		const newCourses = this.state.courses.filter(course => course !== courseToDelete);
		this.setState({
			courses: newCourses
		});
	}

}

export default CourseManager;