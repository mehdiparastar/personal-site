import React, { Component } from 'react';
import axios from 'axios'
import { toast } from 'react-toastify';
import _ from 'lodash'

class CreatePost extends Component {
    state = {
        postTitle: '',
        postImageUrl: '',
        postContent: '',
        postTags: []
    }


    handleSubmit = async e => {
        e.preventDefault()
        console.log(this.state)
        try {
            const result = await e.preventDefault()
            axios.post('http://localhost:3900/api/post', JSON.parse(JSON.stringify(this.state)))

            if (result.status === 200) { toast.success('پست با موفقیت ساخته شد') }
        }
        catch (ex) {
            if (ex.response && ex.response.status === 400) { toast.error('لطفا کلیه موارد را پر کنید') }
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
                    value={this.state.tags}
                    onChange={e =>
                        this.setState({
                            postTags: _.split(e.target.value, ',')
                        })
                    }
                />

                <button className="btn btn-success m-5">ساخت پست جدید</button>
            </form>
        );
    }
}

export default CreatePost;