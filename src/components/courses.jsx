import React from 'react';
import getCourses from './../services/fakeCourses';

const Courses = () => {
    const courses = getCourses()
    return (
        <div className="container-fluid">
            <div className="row">
                {courses.map(course => (
                    <div
                        className="col-lg-3 col-md-4 col-sm-6 col-xs-6 card m-2"
                        key={course.id}
                    >
                        <div className="card-img">
                            <img
                                className="img-fluid img-thumbnail"
                                src={course.imageUrl}
                                alt=""
                            />
                        </div>

                        <div className="card-title">
                            <p className="text-center m-2">{course.title}</p>
                        </div>

                        <div className="card-footer">
                            <span className="fa fa-clock-o m-1" />
                            {course.time}

                            <span className="badge badge-pill m-1 badge-primary float-left">
                                {course.price}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Courses;