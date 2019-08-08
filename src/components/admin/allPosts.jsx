import React, { Component } from 'react';
import { getPosts, deletePost } from '../../services/postService';
import { paginate } from '../../utils/paginate';
import Pagination from '../pagination';
import { toast } from 'react-toastify';

class AllPosts extends Component {
    state = {
        posts: [],
        currentPage: 1,
        pageSize: 5
    }

    async componentDidMount() {
        const { data } = await getPosts()
        this.setState({ posts: data })
    }

    handleDelete = async postId => {
        const originalPosts = this.state.posts

        const posts = this.state.posts.filter(p => postId !== p._id)

        this.setState({ posts })

        try {
            const result = await deletePost(postId)
            if (result && result.status === 200)
                toast.success('حذف با موفقیت انجام شد')
        } catch (ex) {
            console.log(ex)
            if (ex.response && ex.response.status === 404)
                toast.error('شما اجازه حذف این پست را ندارید')

            this.setState({ posts: originalPosts })
        }
    }

    handleRedirect = post => {
        this.props.history.push({
            pathname: '/admin/editpost',
            post
        })
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
        let count = 1
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
                    </thead>
                    <tbody>
                        {data.map(post => (
                            <tr key={post._id}>
                                <th scope='row'>{count++}</th>
                                <td>{post.postTitle}</td>
                                <td>{post.postDate}</td>
                                <td>{post.postLike}</td>
                                <td>
                                    <button
                                        className='btn btn-primary'
                                        onClick={()=>this.handleRedirect(post)}
                                    >ویرایش
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className='btn btn-danger'
                                        onClick={() => this.handleDelete(post._id)}
                                    >
                                        حذف
                                    </button>
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

export default AllPosts;