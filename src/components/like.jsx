import React, { Component } from 'react';

class Like extends Component {
    state = {
        post: this.props.post
    }

    handleLikeClick = (post) => {
        const likedPost = { ...post }
        likedPost.like++
        this.setState({ post: likedPost })
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
                    {post.like}
                </span>
            </div>
        );
    }
}

export default Like;