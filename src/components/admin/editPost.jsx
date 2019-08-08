import React, { Component } from 'react';
import { updatePost } from '../../services/postService'
import { toast } from 'react-toastify';
import _ from 'lodash'

class EditPost extends Component {
    state = {
        _id: '',
        postTitle: '',
        postDate: '',
        postImageUrl: '',
        postContent: '',
        postTags: [],
        postLike: ''
    }

    componentDidMount() {
        const { post } = this.props.location

        if (!post) return this.props.history.push('/admin/allposts')

        this.setState({
            _id: post._id,
            postTitle: post.postTitle,
            postDate: post.postDate,
            postImageUrl: post.postImageUrl,
            postContent: post.postContent,
            postTags: post.postTags,
            postLike: post.postLike
        })
    }

    handleSubmit = async (e) => {
        try {
            e.preventDefault()

            const result = await updatePost(JSON.parse(JSON.stringify(this.state)))
            if (result.status === 200) {
                toast.success('پست با موفقیت ویرایش شد')
                this.props.history.push('/admin/allposts')
            }

        } catch (ex) {
            if (ex.response && ex.response.status === 400)
                toast.error('لطفا کلیه موارد را پر کنید');
        }
    }

    render() {
        return (
            <form
                className="form-group bg-light border rounded m-2 shadow p-5"
                onSubmit={this.handleSubmit}
            >
                <label className="col-md-4 control-label" htmlFor="txtTitle">
                    عنوان پست
                </label>
                <input
                    id="txtTitle"
                    name="postTitle"
                    type="text"
                    placeholder="عنوان"
                    className="form-control input-md m-2"
                    value={this.state.postTitle}
                    onChange={e => this.setState({ postTitle: e.target.value })}
                />

                <input
                    id="txtImageUrl"
                    name="postImageUrl"
                    type="text"
                    placeholder="لینک عکس (الزامی نیست)"
                    className="form-control input-md m-2"
                    value={this.state.postImageUrl}
                    onChange={e =>
                        this.setState({ postImageUrl: e.target.value })
                    }
                />

                <textarea
                    name="postContent"
                    className="form-control m-2"
                    rows="5"
                    placeholder="متن پست"
                    value={this.state.postContent}
                    onChange={e =>
                        this.setState({ postContent: e.target.value })
                    }
                />

                <label className="col-md-4 control-label" htmlFor="txtTags">
                    برچسب ها
                </label>

                <input
                    id="txtTags"
                    name="postTags"
                    type="text"
                    placeholder="برچسب را با (,) از هم جدا کنید"
                    className="form-control input-md m-2"
                    value={this.state.postTags}
                    onChange={e =>
                        this.setState({
                            postTags: _.split(e.target.value, ',')
                        })
                    }
                />

                <button className="btn btn-success m-5"> ویرایش پست </button>
            </form>
        );
    }
}

export default EditPost;