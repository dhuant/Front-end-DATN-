/* eslint-disable */
import React, { Component } from 'react'
// import Info from '../components/Profile/Info'
import Footer from '../components/Footer'
// import SingleProperty from '../components/Profile/SingleProperty'
import SingleNews from '../components/News/SingleNews'
// import { MY_PROPERTIES } from '../constants/Profile';
import { Link } from 'react-router-dom'
import MainHeader from '../components/MainHeader';
import * as actions from '../actions/request'
import { connect } from 'react-redux'
import {NEWS} from '../constants/Navbar'

const NewsType = [
    { value: '1', label: 'Phong thủy' },
    { value: '2', label: 'Nội thất' },
    { value: '3', label: 'Ngoại thất' },
    { value: '4', label: 'Xây dựng' },
    { value: '5', label: 'Kiến trúc' },
    { value: '6', label: 'Tài chính' },
    { value: '7', label: 'Luật bất động sản' },
];
export class News extends Component {
    constructor() {
        super();
        this.state = {
            newsType: 1
        }
    }

    onChangeValue = (e) => {
        console.log(e.target.value)
        this.setState({
            newsType: e.target.value
        });
        this.props.actGetNewsByTypeRequest(e.target.value, '1');

    }

    componentWillMount = () => {
        this.props.actGetNewsByTypeRequest(this.state.newsType, '1')
    }

    render() {
        var { news } = this.props;
        let { newsType } = this.state;
        console.log(news);
        // console.log(newsType);
        return (
            <div>
                <MainHeader component={NEWS}/>
                {/* Sub banner start */}
                <div className="sub-banner overview-bgi">
                    <div className="overlay">
                        <div className="container">
                            <div className="breadcrumb-area">
                                <h1>Lasted News</h1>
                                <ul className="breadcrumbs">
                                    <li><Link to="/">Home</Link></li>
                                    <li className="active">News</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Sub Banner end */}

                {/* My Propertiess start */}
                <div className="content-area-7 my-properties">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className='row'>
                                    <div className="main-title-2 col-lg-4 col-md-4 col-xs-4">
                                        <h1><span>Lasted</span> News</h1>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-xs-6"></div>
                                    <div className="col-lg-2 col-md-2 col-xs-2">
                                        <label>
                                            News Type
                                        </label>
                                        <select className="form-control"
                                            name="type"
                                            value={newsType}
                                            onChange={this.onChangeValue}
                                            id="News">
                                            {NewsType.map((type, index) => <option key={index} value={type.value}>{type.label}</option>)}

                                        </select>
                                    </div>
                                </div>

                                {/* table start */}
                                <table className="manage-table responsive-table">
                                    <tbody>
                                        {this.ShowNewsList(news)}
                                    </tbody>
                                </table>
                                {/* table end */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Page navigation start */}

                <nav aria-label="Page navigation">
                    <ul className="pagination">
                        <li>
                            <a href="properties-list-leftside.html" aria-label="Previous">
                                <span aria-hidden="true">«</span>
                            </a>
                        </li>
                        <li className="active"><a href="#">1 <span className="sr-only">(current)</span></a></li>
                        <li><a href="properties-list-leftside.html">2</a></li>
                        <li><a href="properties-list-fullwidth.html">3</a></li>
                        <li>
                            <a href="properties-list-fullwidth.html" aria-label="Next">
                                <span aria-hidden="true">»</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                {/* Page navigation end*/}

                {/* My Propertiess end */}

                <Footer />
            </div>
        )
    }
    ShowNewsList = (newss) => {
        var result = null;
        if (newss.length > 0) {
            result = newss.map((news, index) => {
                console.log(index)
                return (
                    <SingleNews key={index} news={news} />

                );
            });
        }
        return result;
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actGetNewsByTypeRequest: (type, page) => dispatch(actions.actGetNewsByTypeRequest(type, page))
    }
}

const mapStateToProps = (state) => {
    return {
        news: state.news
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(News);
