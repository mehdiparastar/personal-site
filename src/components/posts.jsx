import React, { Component } from 'react';
import {getPosts} from './../services/postService';
import Like from './like';
import Pagination from './pagination';
import { paginate } from '../utils/paginate';

class Posts extends Component {
    state = {
        posts: [],
        currentPage: 1,
        pageSize: 5
    }

    async componentDidMount() {
        const {data} = await getPosts()
        this.setState({ posts: data })
    }

    handlePageCheange = page => {
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
        const {length: count} = this.state.posts

        if (count===0) return <p>پستی برای نمایش وجود ندارد</p>

        const { totalCount, data } = this.getPageData()
        return (
            <React.Fragment>
                {
                    data.map(post => (
                        <div className='container-fluid' key={post._id}>
                            <div className='card shadow-lg bg-light m-2'>
                                <article className='p-3'>
                                    <div className='card-header'>
                                        <h3 className='card-title'>
                                            <a href='www.google.com'>{post.postTitle}</a>
                                        </h3>
                                        <span className='card-subtitle'>
                                            <span className="fa fa-calendar m-2" />
                                            {post.postDate}
                                        </span>
                                        <img
                                            className='card-img'
                                            src={post.postImageUrl}
                                            alt=''
                                        />
                                    </div>
                                    <div className='card-body'>
                                        <p className='card-text'>
                                            {post.postContent}
                                        </p>
                                    </div>
                                    <div className='card-footer'>
                                        <ul className='list-inline float-right'>

                                            <li className='list-inline-item'>
                                                <span className='fa fa-link m-1' />
                                                برچسب ها:
                                            </li>

                                            <li className='list-inline-item'>
                                                <a href='mehdi'>{post.postTags}</a>
                                            </li>
                                        </ul>
                                        <Like post={post} />
                                    </div>
                                </article>
                            </div>
                        </div>
                    ))
                }
                <Pagination
                    itemCount={totalCount}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={this.handlePageCheange}
                />
            </React.Fragment>
        );
    }
}

export default Posts;
