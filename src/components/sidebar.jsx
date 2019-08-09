import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import getNavLinks from '../services/navLinks';
import UserInfo from './common/userInfo';
import { getCourseCount } from '../../src/services/courseService'

class Sidebar extends Component {
    state = {
        courseCount: ''
    }

    async componentDidMount() {
        const { data: courseCount } = await getCourseCount()
        this.setState({ courseCount: courseCount.count })
    }

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
                                    {nav.text === 'دوره ها' ?
                                        (
                                            <span className='badge-danger badge-pill'>{this.state.courseCount}</span>
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