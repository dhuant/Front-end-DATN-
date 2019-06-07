import React, { Component } from 'react';
import HeaderCompany from '../../components/Company/HeaderCompany';
import * as actions from '../../actions/Company/requestCompany';
import { connect } from 'react-redux';
class ProfileEmployee extends Component {
    constructor(props) {
        super(props);
        this.state={
            page: 1,
        }
    }
    componentDidMount(){
        this.props.reqGetInfoEmployee(this.props.match.params.id, this.state.page);
    }
    render() {
        let {info, projects} = this.props;
        console.log(info);
        console.log(projects);
        return (
            <div>
                <HeaderCompany/>
                {/* Sub banner start */}
                <div className="sub-banner overview-bgi" >
                    <div className="overlay">
                        <div className="container">
                            <div className="breadcrumb-area">
                                <h1>Thông tin nhân viên</h1>
                                <ul className="breadcrumbs">
                                    <li><a href="index.html">Trang chủ</a></li>
                                    <li className="active">Thông tin nhân viên</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Sub Banner end */}
                <div className="agent-section content-area" style={{ backgroundColor: '#ebebeb' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                                {/* Agent detail start */}
                                <div className="agent-detail clearfix" style={{height:'285px'}}>
                                    <div className="col-lg-5 col-md-6 col-sm-5 agent-theme">
                                        {/* <img src={info.avatar} style={{height:'280px',width:'290px'}} alt="agent-1" className="img-responsive" /> */}
                                    </div>
                                    <div className="col-lg-7 col-md-6 col-sm-7 agent-content clearfix">
                                        {/* <h5>Creative Director</h5> */}
                                        {/* <h3>
                                            {info.fullname}
                                        </h3>
                                        
                                        <ul className="address-list">
                                            
                                            <li>
                                                <span>
                                                    <i className="fa fa-envelope" />Email:
                                                </span>
                                                {info.email}
                                            </li>
                                            <li>
                                                <span>
                                                    <i className="fa fa-phone" />Công ty:
                                                </span>
                                                {company}
                                            </li>
                                            <li>
                                                <span>
                                                    <i className="fa fa-mobile" />Điện thoại:
                                                </span>
                                                {mobile}
                                            </li>
                                            <li>
                                                <span>
                                                <i class="fa fa-map-marker"/>Điện thoại:
                                                </span>
                                                {address}
                                            </li>
                                            
                                        </ul> */}
                                        
                                    </div>
                                </div>
                                {/* Agent detail end */}
                                
                                {/* Recently properties start */}
                                <div className="recently-properties">
                                    {/* Main title */}
                                    <div className="main-title-2">
                                        {/* <h4><span>{des}</span> </h4> */}
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
                                        
                                    </div>
                                </div>
                                {/* Partners block end */}
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12  col-xs-12">
                                
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
        reqGetInfoEmployee: (id, page) => dispatch(actions.reqGetInfoEmployee(id,page))
    }
}
const mapStateToProp = (state) => {
    return {
        info: state.infoEmployee,
        projects: state.projectsOfEmployee
    }
}
export default connect(mapStateToProp, mapDispathToProp)(ProfileEmployee);