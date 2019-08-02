import React from 'react';

const UserInfo = ({ imgUrl, fullname, text }) => {
    return (
        <div className='text-center'>
            <img src={imgUrl} className='img-thumbnail img-fluid' alt='' />
            <span className='card bg-danger shadow user-fullname'>
                {fullname}
            </span>
            <p>{text}</p>
        </div>
    );
}

export default UserInfo;