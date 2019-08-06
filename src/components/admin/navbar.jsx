import React from 'react';
import{Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='rtl navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow'>
            <a className='navbar-brand col-sm-3 col-md-2 mr-0' href='www.google.com'>
                سلام مهدی
            </a>
            <p className='mt-2' style={{color:'white'}}>
                تعداد پست ها
                <span className='badge badge-warning badge-pill m-1'>20</span>
            </p>
            <p className='mt-2' style={{color:'white'}}>
                تعداد دوره ها
                <span className='badge badge-warning badge-pill m-1'>5</span>
            </p>
            <ul className='navbar-nav px-3'>
                <li className='nav-item text-nowrap'>
                    <Link className='nav-link' to='/login'>
                        خروج
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;