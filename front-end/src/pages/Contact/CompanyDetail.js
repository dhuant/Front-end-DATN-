import React, { Component } from 'react';
import MainHeader from '../../components/MainHeader';
// import InfoEstateOfAgent from '../../components/ContactDetail/InfoEstateOfAgent';
import SidebarAgentDetail from '../../components/ContactDetail/SidebarAgentDetail';
import * as actions from '../../actions/Contact/requestContact';
import { connect } from 'react-redux';
import Employee from '../../components/Contact/Employee';
import { Pagination } from 'antd';
const pageSize = 5
class CompanyDetail extends Component {
    constructor(props) {
        super(props);
        this.props.reqGetInfoCompany(this.props.match.params.id);
        this.state = {
            current: 1,
            pageEmployee: []
        }
    }
    onChange = page => {
        console.log(page);
        this.setState({
            current: page,
        });
    };
    componentDidMount() {
        this.props.reqGetInfoCompany(this.props.match.params.id);
        // let employees = this.props.employees;
        // let arr = [];
        // employees.forEach(element => {
        //     arr.push(element)
        // });
        // this.setState({
        //     pageEmployee: arr
        // })
    }
    render() {
        let company = this.props.info;
        let { employees, totalPage } = this.props;
        let total = 1
        let list =[]
        let current = this.state.current
        let offset = (current - 1) * pageSize;
        let des = 'Hiện chưa có nhân viên'
        let listEmployees = 'Không có nhân viên'
        if (employees.length > 0) {
            total = employees.length
            des = `Hiện đang có ${employees.length} nhân viên`
            list = employees.slice(offset,current * pageSize)
            listEmployees = list.map((employee, index) => {
                return (
                    <Employee
                        key={index}
                        employee={employee.employee}
                    />
                )
            }
            )
        }
        let mobile = 'Đang cập nhật'
        if (company.phone !== '') {
            mobile = company.phone
        }
        let address = 'Đang cập nhật'

        if (company.address !== '') {
            address = company.address
        }
        console.log(company)
        return (
            <div>
                <MainHeader />
                {/* Sub banner start */}
                <div className="sub-banner overview-bgi" >
                    <div className="overlay">
                        <div className="container">
                            <div className="breadcrumb-area">
                                <h1>Thông tin công ty</h1>
                                <ul className="breadcrumbs">
                                    <li><a href="index.html">Trang chủ</a></li>
                                    <li className="active">Thông tin công ty</li>
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
                                <div className="agent-detail clearfix" style={{ height: '300px' }}>
                                    <div className="col-lg-5 col-md-6 col-sm-5 agent-theme">
                                        <img src={company.avatar} alt="agent-1" className="img-responsive" style={{ height: '300px', width: '300px' }} />
                                    </div>
                                    <div className="col-lg-7 col-md-6 col-sm-7 agent-content clearfix">
                                        {/* <h5>Creative Director</h5> */}
                                        <h3>
                                            {company.companyname}
                                        </h3>
                                        {/* Address list */}
                                        <ul className="address-list">

                                            <li>
                                                <span>
                                                    <i className="fa fa-envelope" />Email:
                                                </span>
                                                {company.email}
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
                                                {mobile}
                                            </li>
                                            <li>
                                                <span>
                                                    <i className="fa fa-map-marker" />Điện thoại:
                                                </span>
                                                {address}
                                            </li>
                                        </ul>
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
                                            <li className="active"><a href="#tab1default" data-toggle="tab" aria-expanded="true">Thông tin thêm</a></li>
                                            <li className><a href="#tab2default" data-toggle="tab" aria-expanded="false">Giấy tờ</a></li>
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
                                        <h1><span>Danh sách nhân viên</span> </h1>
                                    </div>
                                    {/* Option bar start */}
                                    <div className="option-bar">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-5 col-sm-5 col-xs-2">
                                                <h4>
                                                    <span className="heading-icon">
                                                        <i className="fa fa-th-list" />
                                                    </span>
                                                    <span className="hidden-xs">Danh sách nhân viên</span>
                                                </h4>
                                            </div>
                                            <div className="col-lg-6 col-md-7 col-sm-7 col-xs-10 cod-pad">
                                                <div className="sorting-options">
                                                    <select className="sorting">
                                                        <option>Mới tham gia</option>
                                                        <option>Bất động sản thuê</option>
                                                        <option>Properties (High To Low)</option>
                                                        <option>Properties (Low To High)</option>
                                                    </select>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Option bar end */}
                                    <div className="clearfix" />
                                    <h4>{des}</h4>
                                    <div className="row">
                                        {listEmployees}
                                    </div>
                                    <div style ={{textAlign:'center'}}>
                                    <Pagination current={this.state.current} pageSize={pageSize}onChange={this.onChange} total={total} />

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
        reqGetInfoCompany: (id) => dispatch(actions.reqGetInfoCompany(id))
    }
}
const mapStateToProp = (state) => {
    return {
        info: state.infoCompany,
        employees: state.employees,
        totalPage: state.totalPage
    }
}
export default connect(mapStateToProp, mapDispathToProp)(CompanyDetail);