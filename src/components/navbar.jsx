import React from 'react';
import{Link} from 'react-router-dom'
import SearchBar from './common/searchBar';

const Navbar = () => {
    return (
        <nav className='rtl navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow'>
            <a className='navbar-brand col-sm-3 col-md-2 mr-0' href='www.google.com'>
                وب سایت شخصی
            </a>
            <SearchBar />
            <ul className='navbar-nav px-3'>
                <li className='nav-item text-nowrap'>
                    <Link className='nav-link' to='/login'>
                        ورود
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;