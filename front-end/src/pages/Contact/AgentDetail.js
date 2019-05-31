import React, { Component } from 'react';
import MainHeader from '../../components/MainHeader'
import SidebarAgentDetail from '../../components/ContactDetail/SidebarAgentDetail';
import InfoEstateOfAgent from '../../components/ContactDetail/InfoEstateOfAgent';

class AgentDetail extends Component {
    render() {
        return (
            <div>
                <MainHeader />
                {/* Sub banner start */}
                <div className="sub-banner overview-bgi" >
                    <div className="overlay">
                        <div className="container">
                            <div className="breadcrumb-area">
                                <h1>Thông tin nhà môi giới</h1>
                                <ul className="breadcrumbs">
                                    <li><a href="index.html">Trang chủ</a></li>
                                    <li className="active">Thông tin nhà môi giới</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Sub Banner end */}

                {/* Agent section start */}
                <div className="agent-section content-area" style={{ backgroundColor: '#ebebeb' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                                {/* Agent detail start */}
                                <div className="agent-detail clearfix">
                                    <div className="col-lg-5 col-md-6 col-sm-5 agent-theme">
                                        <img src="img/agent-1.jpg" alt="agent-1" className="img-responsive" />
                                    </div>
                                    <div className="col-lg-7 col-md-6 col-sm-7 agent-content clearfix">
                                        {/* <h5>Creative Director</h5> */}
                                        <h3>
                                            John Antony
                                        </h3>
                                        {/* Address list */}
                                        <ul className="address-list">
                                            <li>
                                                <span>
                                                    <i className="fa fa-tag" />Title:
                                                </span>
                                                John Antony
                                            </li>
                                            <li>
                                                <span>
                                                    <i className="fa fa-envelope" />Email:
                                                </span>
                                                info@themevessel.com
                                            </li>
                                            <li>
                                                <span>
                                                    <i className="fa fa-phone" />Office:
                                                </span>
                                                +55 4XX-634-7071
                                            </li>
                                            <li>
                                                <span>
                                                    <i className="fa fa-mobile" />Mobile:
                                                </span>
                                                +55 4XX-634-7071
                                            </li>
                                            <li>
                                                <span>
                                                    <i className="fa fa-skype" />Skype:
                                                </span>
                                                john.antony
                                            </li>
                                        </ul>
                                        <div className="social-media">
                                            {/* Social list */}
                                            <ul className="social-list">
                                                <li><a href="true" className="facebook-bg"><i className="fa fa-facebook" /></a></li>
                                                <li><a href="true" className="twitter-bg"><i className="fa fa-twitter" /></a></li>
                                                <li><a href="true" className="linkedin-bg"><i className="fa fa-linkedin" /></a></li>
                                                <li><a href="true" className="google-bg"><i className="fa fa-google-plus" /></a></li>
                                                <li><a href="true" className="rss-bg"><i className="fa fa-rss" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* Agent detail end */}
                                <div className="sidebar-widget clearfix biography">
                                    {/* Main Title 2 */}
                                    <div className="main-title-2">
                                        <h1><span>Mô tả</span></h1>
                                    </div>
                                    <p>
                                        Mô tả thông tin ở đây
                                    </p>

                                    <br />
                                    <div className="panel-box">
                                        <ul className="nav nav-tabs">
                                            <li className="active"><a href="#tab1default" data-toggle="tab" aria-expanded="true">Additional Details</a></li>
                                            <li className><a href="#tab2default" data-toggle="tab" aria-expanded="false">Attachments</a></li>
                                        </ul>
                                        <div className="panel with-nav-tabs panel-default">
                                            <div className="panel-body">
                                                <div className="tab-content">
                                                    <div className="tab-pane fade active in" id="tab1default">
                                                        <div className="row">
                                                            <div className="col-md-6 col-sm-6">
                                                                <ul className="additional-details-list">
                                                                    <li><span>Agent Since:</span>2017</li>
                                                                    <li><span>Last Sold Property:</span>3 day ago</li>
                                                                    <li><span>Properties Sold:</span>20</li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-md-6 col-sm-6">
                                                                <ul className="additional-details-list">
                                                                    <li><span>Properties Rented:</span>26</li>
                                                                    <li><span>Average Price:</span>$180,000</li>
                                                                    <li><span>Website:</span><a href="true">www.sparker.com</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane fade features" id="tab2default">
                                                        <div className="row">
                                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-6">
                                                                <div className="attachments">
                                                                    <a href="true"><i className="fa fa-file-o" />Resume</a>
                                                                    <br /><br />
                                                                    <a href="true"><i className="fa fa-file-o" />Brochure</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Recently properties start */}
                                <div className="recently-properties">
                                    {/* Main title */}
                                    <div className="main-title-2">
                                        <h1><span>Danh sách bài đăng</span> </h1>
                                    </div>
                                    {/* Option bar start */}
                                    <div className="option-bar">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-5 col-sm-5 col-xs-2">
                                                <h4>
                                                    <span className="heading-icon">
                                                        <i className="fa fa-th-list" />
                                                    </span>
                                                    <span className="hidden-xs">Properties List</span>
                                                </h4>
                                            </div>
                                            <div className="col-lg-6 col-md-7 col-sm-7 col-xs-10 cod-pad">
                                                <div className="sorting-options">
                                                    <select className="sorting">
                                                        <option>New To Old</option>
                                                        <option>Old To New</option>
                                                        <option>Properties (High To Low)</option>
                                                        <option>Properties (Low To High)</option>
                                                    </select>
                                                    <a href="properties-list-rightside.html" className="change-view-btn active-view-btn"><i className="fa fa-th-list" /></a>
                                                    <a href="properties-grid-rightside.html" className="change-view-btn"><i className="fa fa-th-large" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Option bar end */}
                                    <div className="clearfix" />
                                    <div className="row">
                                        <InfoEstateOfAgent/>
                                        <InfoEstateOfAgent/>
                                        <InfoEstateOfAgent/>
                                    </div>
                                </div>
                                {/* Partners block end */}
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12  col-xs-12">
                                <SidebarAgentDetail />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Agent section end */}
            </div>
        );
    }
}

export default AgentDetail;