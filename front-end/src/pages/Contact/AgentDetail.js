import React, { Component } from 'react';
import MainHeader from '../../components/MainHeader'
import SidebarAgentDetail from '../../components/ContactDetail/SidebarAgentDetail';
import InfoEstateOfAgent from '../../components/ContactDetail/InfoEstateOfAgent';
import * as actions from '../../actions/Contact/requestContact';
import { connect } from 'react-redux';
class AgentDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
        }
    }
    componentDidMount() {
        this.props.reqGetInfoAgent(this.props.match.params.id, this.state.page);
    }
    render() {
        let { info, projects } = this.props;
        console.log(info);
        console.log(projects);
        let des = 'Hiện chưa có bài đăng'
        let listProjects = ''
        if (projects.length > 0) {
            // if (option === '1') {
            // 	agents = agents.sort((a, b) => (a.price - b.price))
            // }
            // else if(option === '2'){
            // 	agents = agents.sort((a, b) => (b.price - a.price))
            // }
            // else if(option === '3') {
            // 	agents = agents.sort((a, b) => (a.area - b.area))
            // }
            // else if(option === '4') {
            // 	agents = agents.sort((a, b) => (b.area - a.area))
            // }
            des = `Hiện đang có ${projects.length} bài đăng`
            listProjects = projects.map((project, index) => {
                return (
                    <InfoEstateOfAgent
                        key={index}
                        project={project}
                    />
                )
            }
            )
        }
        let company = 'Môi giới tự do'
        if (info.company !== "0") {
            company = info.company
        }
        let mobile = 'Đang cập nhật'
        if (info.phone !== ' ' && info.phone !== "") {
            mobile = info.phone
        }
        let address = 'Đang cập nhật'

        if (info.address !== ' ' && info.address !== "") {
            address = info.address
        }
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
                                <div className="agent-detail clearfix" style={{ height: '285px' }}>
                                    <div className="col-lg-5 col-md-6 col-sm-5 agent-theme">
                                        <img src={info.avatar} style={{ height: '280px', width: '290px' }} alt="agent-1" className="img-responsive" />
                                    </div>
                                    <div className="col-lg-7 col-md-6 col-sm-7 agent-content" style={{padding:'20px 10px'}}>
                                        {/* <h5>Creative Director</h5> */}
                                        <h3>
                                            {info.fullname}
                                        </h3>
                                        {/* Address list */}
                                        <ul className="address-list">

                                            <li>
                                                <span>
                                                    <i className="fa fa-envelope" />Email:
                                                </span>
                                                {info.email}
                                            </li>
                                            {/* <li>
                                                <span>
                                                    <i className="fa fa-phone" />Công ty:
                                                </span>
                                                {company}
                                            </li> */}
                                            <li>
                                                <span>
                                                    <i className="fa fa-mobile" />Điện thoại:
                                                </span>
                                                {mobile}
                                            </li>
                                            <li>
                                                <span>
                                                    <i className="fa fa-map-marker" />Địa chỉ:
                                                </span>
                                                {address}
                                            </li>
                                            <li>
                                                <span>
                                                    <i className="fa fa-file" />Bài đăng:
                                                </span>
                                                {info.totalProject}
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                                {/* Agent detail end */}
                                <div className="sidebar-widget clearfix biography">
                                    {/* Main Title 2 */}
                                    <div className="main-title-2">
                                        <h1><span>Giới thiệu</span></h1>
                                    </div>
                                    {<div dangerouslySetInnerHTML={{ __html: info.description }} ></div>}
                                    {/* <p>
                                        {info.description}
                                    </p> */}

                                    <br />
                                    <div className="panel-box">
                                        <ul className="nav nav-tabs">
                                            <li className="active"><a href="#tab1default" data-toggle="tab" aria-expanded="true">Thông tin thêm</a></li>
                                            <li className><a href="#tab2default" data-toggle="tab" aria-expanded="false">Bằng cấp</a></li>
                                        </ul>
                                        <div className="panel with-nav-tabs panel-default">
                                            <div className="panel-body">
                                                <div className="tab-content">
                                                    <div className="tab-pane fade active in" id="tab1default">
                                                        <div className="row">
                                                            <div className="col-md-6 col-sm-6">
                                                                <ul className="additional-details-list">
                                                                    <li><span>Ngày tham gia:</span>2017</li>
                                                                    <li><span>Tổng số nhân viên:</span>100</li>
                                                                    <li><span>Tổng số bài đăng:</span>20</li>
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
                                        <h4><span>{des}</span> </h4>
                                    </div>
                                    {/* Option bar start */}
                                    <div className="option-bar">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-5 col-sm-5 col-xs-2">
                                                <h4>
                                                    <span className="heading-icon">
                                                        <i className="fa fa-th-list" />
                                                    </span>
                                                    <span className="hidden-xs">Danh sách bài đăng</span>
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

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Option bar end */}
                                    <div className="clearfix" />
                                    <div className="row">
                                        {listProjects}
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

const mapDispathToProp = (dispatch) => {
    return {
        reqGetInfoAgent: (id, page) => dispatch(actions.reqGetInfoAgent(id, page))
    }
}
const mapStateToProp = (state) => {
    return {
        info: state.infoAgent,
        projects: state.projectsOfAgent
    }
}
export default connect(mapStateToProp, mapDispathToProp)(AgentDetail);