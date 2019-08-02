import React from 'react';
import _ from 'lodash'

const Pagination = ({ itemCount, pageSize, onPageChange, currentPage }) => {
    const pageCount = Math.ceil(itemCount / pageSize)

    if (pageCount === 1) return null

    const pages = _.range(1, pageCount + 1)

    return (
        <nav>
            <ul className='pagination justify-content-center'>
                {
                    pages.map(page => (
                        <li className={page === currentPage ? 'page-item active' : 'page-item'} key={page} style={{ cursor: 'pointer' }}>
                            <a className='page-link' onClick={() => onPageChange(page)}>{page}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
}

export default Pagination;
