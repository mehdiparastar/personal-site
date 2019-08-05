import React from 'react';

const Education = () => {
    return (
        <div className="container-fluid">
            <div className="card m-2">
                <p className="card-title text-center m-2">تحصیلات من</p>

                <div className="card-body">
                    <ul className="list-group-item-warning">
                        <li className="lead list-unstyled">
                            <span className="fa fa-graduation-cap" /> تحصیلات
                        </li>

                        <li>
                            دیپلم : رشته کامپیوتر هنرستان شهید زارعی شهرستان
                            کلاله
                        </li>
                        <li>
                            فوق دیپلم: رشته کامپیوتر گرایش نرم افزار دانشگاه
                            آزاد اسلامی
                        </li>
                        <li>
                            لیسانس: رشته کامیپوتر گرایش نرم افزار دانشگاه آزاد
                            اسلامی
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Education;
