/* eslint-disable */
import React, { Component } from 'react'
import MainHeader from '../components/MainHeader'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions/request'

export class NewsDetail extends Component {
    componentDidMount = () => {
        this.props.OnGetNewsByID(this.props.match.params.id);
    }
    render() {
        var { newsDetail } = this.props;
        // console.log(newsDetail);
        return (
            <div>
                <MainHeader />
                {/* Banner start */}
                <div className="sub-banner overview-bgi">
                    <div className="overlay">
                        <div className="container">
                            <div className="breadcrumb-area">
                                <h1>Tin tức mới nhất</h1>
                                <ul className="breadcrumbs">
                                    <li>
                                        <Link to="/">Trang chủ</Link>
                                    </li>
                                    <li className="active">Tin tức</li>
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
                            <div className="col-lg-12 col-md-12 col-xs-12">
                                {/* Blog box start */}
                                <div className="thumbnail blog-box clearfix">
                                    {newsDetail.image && newsDetail.image.url !== '' ? <img src={newsDetail.image.url} alt="blog-1" className="img-responsive" style={{width: "100%", height: "400px"}}/> : null}
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
                                        {<div dangerouslySetInnerHTML={{ __html: newsDetail.content }} ></div>}
                                    </div>
                                </div>
                                {/* Blog box end */}
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
