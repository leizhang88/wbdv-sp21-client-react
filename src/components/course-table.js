import React from "react";
import CourseRow from "./course-row";

class CourseTable extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Course Table</h2>
                <table className="table">
                    <tbody>
                    {
                        this.props.courses.map((course, idx) =>
                        <CourseRow
                            key={idx}
                            title={course.title}
                            owner={course.owner}
                            lastModified={course.lastModified}
                            course={course}
                            deleteCourse={this.props.deleteCourse}
                        />
                        )
                    }
                    </tbody>
                </table>
            </div>)
    }
}

export default CourseTable;