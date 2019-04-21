import React, { Component } from 'react'
import moment from 'moment'

export default class Comments extends Component {
    onHandleStars = (starsNumber) => {
        var result = []
        for(var i = 0; i< starsNumber; i++){
            result.push(<i key={i} className="fa fa-star" />)
        }
        for(var j = 0;j <5 - starsNumber; j++){
            result.push(<i key={i + j} className="fa fa-star-o" />)
        }
        return result
    }
    render() {
        let {comment} = this.props
        console.log(comment)
        return (
            <li>
                <div className="comment">
                    <div className="comment-author">
                        <a href="true">
                            <img src="/img/avatar/avatar-5.png" alt="avatar-5" />
                        </a>
                    </div>
                    <div className="comment-content">
                        <div className="comment-meta">
                            <div className="comment-meta-author">
                                {comment.fullname}
                            </div>
                            <div className="comment-meta-reply">
                                <a href="true">Reply</a>
                            </div>
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
                {/* <ul>
                    <li>
                        <div className="comment">
                            <div className="comment-author">
                                <a href="true">
                                    <img src="/img/avatar/avatar-5.png" alt="avatar-5" />
                                </a>
                            </div>
                            <div className="comment-content">
                                <div className="comment-meta">
                                    <div className="comment-meta-author">
                                        Jane Doe
                                    </div>
                                    <div className="comment-meta-reply">
                                        <a href="true">Reply</a>
                                    </div>
                                    <div className="comment-meta-date">
                                        <span className="hidden-xs">8:42 PM 3/3/2017</span>
                                    </div>
                                </div>
                                <div className="clearfix" />
                                <div className="comment-body">
                                    <div className="comment-rating">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star-half-o" />
                                        <i className="fa fa-star-o" />
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt aliquam. Aliquam gravida massa at sem vulputate interdum et vel eros. Maecenas eros enim, tincidunt vel turpis vel, dapibus tempus nulla. Donec vel nulla dui.</p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul> */}
            </li>
        )
    }
}
