import React, { Component } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import * as actions from '../../actions/request'
import { Modal, Button } from 'antd'

class Comments extends Component {
    onHandleStars = (starsNumber) => {
        var result = []
        for (var i = 0; i < starsNumber; i++) {
            result.push(<i key={i} className="fa fa-star" />)
        }
        for (var j = 0; j < 5 - starsNumber; j++) {
            result.push(<i key={i + j} className="fa fa-star-o" />)
        }
        return result
    }

    onEditingComment = (id) => {

    }
    onShowCommentHandle = (comment) => {
        if (comment.user.id === JSON.parse(localStorage.getItem('res')).user._id) {
            return (
                <React.Fragment>
                    <div className="comment-meta-reply">
                        <a href="true">Sửa</a>
                    </div>
                    <div className="comment-meta-reply">
                        <a href="true" style={{ backgroundColor: "red" }}>Xóa</a>
                    </div>
                </React.Fragment>
            )
        }
        else return null
    }
    render() {
        let { comment } = this.props
        console.log(comment)
        return (
            <li>
                <div className="comment">
                    <div className="comment-author">
                        <a href="true">
                            <img src={comment.user.avatar} alt="avatar-5" />
                        </a>
                    </div>
                    <div className="comment-content">
                        <div className="comment-meta">
                            <div className="comment-meta-author">
                                {comment.user.fullname}
                            </div>
                            {this.onShowCommentHandle(comment)}
                            <div className="comment-meta-date">
                                <span className="hidden-xs">{moment.unix(comment.createTime).format('DD/MM/YYYY, h:mm a')}</span>
                            </div>
                        </div>
                        <div className="clearfix" />
                        <div className="comment-body">
                            <div className="comment-rating">
                                {this.onHandleStars(comment.star)}
                            </div>
                            <p>{comment.content}</p>
                        </div>
                    </div>
                </div>

                {/* <Modal
                    visible={visible}
                    title="Title"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>
                            Return
                        </Button>,
                        <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                            Submit
                        </Button>,
                    ]}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal> */}
            </li>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        comments: state.comments
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onEditingComment: (id, data) => dispatch(actions.actEditCommentRequest(id, data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Comments)