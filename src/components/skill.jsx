import React from 'react';

const Skill = () => {
    return (
        <div className="container-fluid">
            <div className="card m-2">
                <p className="card-title text-center m-2">مهارت های من</p>
                <div className="card-body">
                    لینوکس
                    <div className="progress m-2">
                        <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: '80%' }}
                        />
                    </div>
                    نود جی اس
                    <div className="progress m-2">
                        <div
                            className="progress-bar bg-danger"
                            role="progressbar"
                            style={{ width: '90%' }}
                        />
                    </div>
                    ری اکت
                    <div className="progress m-2">
                        <div
                            className="progress-bar bg-primary"
                            role="progressbar"
                            style={{ width: '80%' }}
                        />
                    </div>
                    ویو جی اس
                    <div className="progress m-2">
                        <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: '50%' }}
                        />
                    </div>
                    سی شارپ
                    <div className="progress m-2">
                        <div
                            className="progress-bar bg-dark"
                            role="progressbar"
                            style={{ width: '85%' }}
                        />
                    </div>
                    ری اکت نیتیو
                    <div className="progress m-2">
                        <div
                            className="progress-bar bg-secondary"
                            role="progressbar"
                            style={{ width: '95%' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;
