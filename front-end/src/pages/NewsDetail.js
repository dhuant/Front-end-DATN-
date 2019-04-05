/* eslint-disable */
import React, { Component } from 'react'
import MainHeader from '../components/MainHeader'
import Footer from '../components/Footer'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import * as actions from '../actions/request'

export class NewsDetail extends Component {
    componentDidMount = () => {
        this.props.OnGetNewsByID(this.props.match.params.id);
    }
    render() {
        var {newsDetail} = this.props;
        console.log(newsDetail);
        return (
            <div>
                <MainHeader />
                {/* Banner start */}
                <div className="sub-banner overview-bgi">
                    <div className="overlay">
                        <div className="container">
                            <div className="breadcrumb-area">
                                <h1>Lasted News</h1>
                                <ul className="breadcrumbs">
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li className="active">Lasted News</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Banner end */}
                {/* Blog body start */}
                <div className="blog-body content-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 col-md-10 col-xs-12">
                                {/* Blog box start */}
                                <div className="thumbnail blog-box clearfix">
                                    <img src="/img/blog/blog-1.jpg" alt="blog-1" className="img-responsive" />
                                    {/* detail */}
                                    <div className="caption detail">
                                        {/*Main title */}
                                        <h3 className="title">
                                            <a href="blog-single-sidebar-right.html">{newsDetail.title}</a>
                                        </h3>
                                        {/* Post meta */}
                                        {/* <div className="post-meta">
                                            <span><a href="#"><i className="fa fa-user" />John Antony</a></span>
                                            <span><a><i className="fa fa-calendar " />May 27, 2018</a></span>
                                            <span><a href="#"><i className="fa fa-bars" /> The Nest</a></span>
                                            <span><a href="#"><i className="fa fa-comments" />7 Comment</a></span>
                                        </div> */}
                                        {/* paragraph */}
                                        {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.more recently with desktop publishing</p>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.more recently with desktop publishing</p>
                                        <div className="row mrg-btm-30">
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                <p>But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.more recently with desktop </p>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                <img src="/img/properties/properties-3.jpg" alt="properties-3" className="img-responsive" />
                                            </div>
                                        </div>
                                        <blockquote>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. But also the leap into electronic typesetting, remaining essentially unchanged. It was
            </blockquote>
                                        <h3>This is another Sub-Heading</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. But also the leap into electronic typesetting, remaining essentially unchanged. It was Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. But also the leap into electronic typesetting, remaining essentially unchanged. It was</p> */}
                                        {<div dangerouslySetInnerHTML={{__html: newsDetail.content}} ></div>}
                                        <div className="row clearfix t-s">
                                            <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12">
                                                {/* Tags box start */}
                                                <div className="tags-box">
                                                    <h2>Tags</h2>
                                                    <ul className="tags">
                                                        <li><a href="#">Image</a></li>
                                                        <li><a href="#">Features</a></li>
                                                        <li><a href="#">Slideshow</a></li>
                                                    </ul>
                                                </div>
                                                {/* Tags box end */}
                                            </div>
                                            <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12">
                                                {/* Blog Share start */}
                                                <div className="social-media clearfix blog-share">
                                                    <h2>Share</h2>
                                                    {/* Social list */}
                                                    <ul className="social-list">
                                                        <li><a href="#" className="facebook-bg"><i className="fa fa-facebook" /></a></li>
                                                        <li><a href="#" className="twitter-bg"><i className="fa fa-twitter" /></a></li>
                                                        <li><a href="#" className="linkedin-bg"><i className="fa fa-linkedin" /></a></li>
                                                        <li><a href="#" className="google-bg"><i className="fa fa-google-plus" /></a></li>
                                                        <li><a href="#" className="rss-bg"><i className="fa fa-rss" /></a></li>
                                                    </ul>
                                                </div>
                                                {/* Blog Share end */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Blog box end */}
                                {/* Comments section start */}
                                <div className="comments-section sidebar-widget">
                                    {/* Main Title 2 */}
                                    <div className="main-title-2">
                                        <h1><span>Comments </span> Section</h1>
                                    </div>
                                    <ul className="comments">
                                        <li>
                                            <div className="comment">
                                                <div className="comment-author">
                                                    <a href="#">
                                                        <img src="/img/avatar/avatar-5.png" alt="avatar-5" />
                                                    </a>
                                                </div>
                                                <div className="comment-content">
                                                    <div className="comment-meta">
                                                        <div className="comment-meta-author">
                                                            Jane Doe
                    </div>
                                                        <div className="comment-meta-reply">
                                                            <a href="#">Reply</a>
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
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star-o" />
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt aliquam. Aliquam gravida massa at sem vulputate interdum et vel eros. Maecenas eros enim, tincidunt vel turpis vel, dapibus tempus nulla. Donec vel nulla dui. Pellentesque sed ante sed ligula hendrerit condimentum. Suspendisse rhoncus fringilla ipsum quis porta.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul>
                                                <li>
                                                    <div className="comment">
                                                        <div className="comment-author">
                                                            <a href="#">
                                                                <img src="/img/avatar/avatar-5.png" alt="avatar-5" />
                                                            </a>
                                                        </div>
                                                        <div className="comment-content">
                                                            <div className="comment-meta">
                                                                <div className="comment-meta-author">
                                                                    Jane Doe
                        </div>
                                                                <div className="comment-meta-reply">
                                                                    <a href="#">Reply</a>
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
                                            </ul>
                                        </li>
                                        <li>
                                            <div className="comment">
                                                <div className="comment-author">
                                                    <a href="#">
                                                        <img src="/img/avatar/avatar-5.png" alt="avatar-5" />
                                                    </a>
                                                </div>
                                                <div className="comment-content">
                                                    <div className="comment-meta">
                                                        <div className="comment-meta-author">
                                                            Jane Doe
                    </div>
                                                        <div className="comment-meta-reply">
                                                            <a href="#">Reply</a>
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
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star-o" />
                                                        </div>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                    </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul>
                                                <li>
                                                    <div className="comment comment-mrg-bdr-nane">
                                                        <div className="comment-author">
                                                            <a href="#">
                                                                <img src="/img/avatar/avatar-5.png" alt="avatar-5" />
                                                            </a>
                                                        </div>
                                                        <div className="comment-content">
                                                            <div className="comment-meta">
                                                                <div className="comment-meta-author">
                                                                    Jane Doe
                        </div>
                                                                <div className="comment-meta-reply">
                                                                    <a href="#">Reply</a>
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
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                {/* Comments section end */}
                                {/* Contact 1 start */}
                                <div className="contact-1 sidebar-widget">
                                    <div className="main-title-2">
                                        <h1> <span>Leave</span> a Comment</h1>
                                    </div>
                                    <div className="contact-form">
                                        <form id="contact_form" action="http://themevessel-item.s3-website-us-east-1.amazonaws.com/nest/index.html" method="GET" encType="multipart/form-data">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                    <div className="form-group fullname">
                                                        <input type="text" name="full-name" className="input-text" placeholder="Full Name" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                    <div className="form-group enter-email">
                                                        <input type="email" name="email" className="input-text" placeholder="Enter email" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                    <div className="form-group subject">
                                                        <input type="text" name="subject" className="input-text" placeholder="Subject" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                    <div className="form-group number">
                                                        <input type="text" name="phone" className="input-text" placeholder="Phone Number" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 clearfix">
                                                    <div className="form-group message">
                                                        <textarea className="input-text" name="message" placeholder="Write message" defaultValue={""} />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-6 col-sm-12 col-xs-12">
                                                    <div className="form-group send-btn mb-0">
                                                        <button type="submit" className="button-md button-theme">Send Message</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                {/* Contact end */}
                            </div>
                            
                        </div>
                    </div>
                </div>
                {/* Blog body end */}
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        newsDetail: state.newsDetail
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        OnGetNewsByID: (id) => dispatch(actions.actGetNewsByIdRequest(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsDetail)
