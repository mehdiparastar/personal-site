import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import getNavLinks from '../services/navLinks';
import UserInfo from './common/userInfo';

class Sidebar extends Component {
    render() {
        const navLinks = getNavLinks()
        return (
            <nav className='col-md-2 d-none d-md-block bg-light sidebar'>
                <div className='sidebar-sticky'>

                    <UserInfo
                        imgUrl='https://via.placeholder.com/200x200'
                        fullname='مهدی پرستار'
                        text='کارشناس مانیتورینگ'
                    />

                    <hr className='shadow' />

                    <ul className='nav flex-column'>
                        {navLinks.map(nav => (
                            <li className='nav-item' key={nav.id}>
                                <Link className='nav-link' to={nav.link}>
                                    <span className={nav.icon} />
                                    <span className='m-2'>{nav.text}</span>
                                    {nav.count ?
                                        (
                                            <span className='badge-danger badge-pill'>{nav.count}</span>
                                        )
                                        :
                                        (
                                            null
                                        )
                                    }
                                </Link>
                            </li>
                        ))}
                    </ul>

                </div>
            </nav>
        );
    }
}

export default Sidebar;