import React from 'react';

const About = () => {
    return (
        <div className="container-fluid">
            <div className="row m-2 bg-light border rounded shadow">
                <div className="col-9">
                    <div className="card bg-light shadow mx-auto mt-5">
                        <p className="card-title m-2">یونس قربانی</p>
                        <p className="card-body">
                            علاقه مندی های من برنامه نویسی و تدریس هست.
                        </p>
                    </div>
                </div>
                <div className="col-3">
                    <img
                        className="img-fluid rounded m-2"
                        src="https://via.placeholder.com/250x400"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
