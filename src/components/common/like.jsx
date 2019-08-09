import React, { Component } from 'react';
import { incPostLike } from '../../services/postService';

class Like extends Component {
    state = {
        post: this.props.post
    }

    handleLikeClick = async (post) => {
        const originalPost = this.state.post
        const likedPost = { ...post }
        likedPost.postLike++
        this.setState({ post: likedPost })
        try {
            await incPostLike(post._id)
        } catch (ex) {
            this.setState({post:originalPost})
        }
    }
    render() {
        const { post } = this.state
        return (
            <div
                className='fa fa-heart float-left'
                style={{ color: 'red', cursor: 'pointer' }}
                onClick={() => this.handleLikeClick(post)}
            >
                <span className='badge-primary badge-pill m-1'>
                    {post.postLike}
                </span>
            </div>
        );
    }
}

export default Like;