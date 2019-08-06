import React, { Component } from 'react';
import getCourses from '../../services/fakeCourses';
import { paginate } from '../../utils/paginate';
import Pagination from '../pagination';

class AllCourses extends Component {
    state = {
        courses: [],
        currentPage: 1,
        pageSize: 5
    }

    componentDidMount() {
        const courses = getCourses()
        this.setState({ courses: courses })
    }

    handlePageChange = page => {
        this.setState({ currentPage: page })
    }

    getPageData = () => {
        const { pageSize, currentPage, courses: allCourses } = this.state
        const courses = paginate(allCourses, currentPage, pageSize)
        return {
            totalCount: allCourses.length,
            data: courses
        }
    }

    render() {
        const { pageSize, currentPage } = this.state
        const { totalCount, data } = this.getPageData()

        return (
            <div className='bg-light m-3 p-4 border rounded'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>عنوان دوره</th>
                            <th>زمان دوره</th>
                            <th>قیمت دوره</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(course => (
                            <tr key={course.id}>
                                <th scope='row'>{course.id}</th>
                                <td>{course.title}</td>
                                <td>{course.time}</td>
                                <td>{course.price}</td>
                                <td>
                                    <button className='btn btn-primary' onClick=''>ویرایش</button>
                                </td>
                                <td>
                                    <button className='btn btn-danger' onClick=''>حذف</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination
                    itemCount={totalCount}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={this.handlePageChange}
                />
            </div>
        );

    }
}

export default AllCourses;