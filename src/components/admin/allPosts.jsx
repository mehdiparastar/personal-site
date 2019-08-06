import React, { Component } from 'react';
import getPosts from '../../services/fakePosts';
import { paginate } from '../../utils/paginate';
import Pagination from '../pagination';

class AllPosts extends Component {
    state = {
        posts: [],
        currentPage: 1,
        pageSize: 5
    }

    componentDidMount() {
        const posts = getPosts()
        this.setState({ posts })
    }

    handlePageChange = page => {
        this.setState({ currentPage: page })
    }

    getPageData = () => {
        const { pageSize, currentPage, posts: allPosts } = this.state
        const posts = paginate(allPosts, currentPage, pageSize)
        return {
            totalCount: allPosts.length,
            data: posts
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
                            <th>عنوان پست</th>
                            <th>تاریخ انتشار</th>
                            <th>تعداد لایک</th>
                        </tr>
                        <tbody>
                            {data.map(post => (
                                <tr key={post.id}>
                                    <th scope='row'>{post.id}</th>
                                    <td>{post.postTitle}</td>
                                    <td>{post.postDate}</td>
                                    <td>{post.like}</td>
                                    <td>
                                        <button className='btn btn-primary' onClick=''>ویرایش</button>
                                    </td>
                                    <td>
                                        <button className='btn btn-danger' onClick=''>حذف</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </thead>
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

export default AllPosts;