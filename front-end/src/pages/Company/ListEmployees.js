import React, { Component } from 'react';

import HeaderCompany from '../../components/Company/HeaderCompany'
import Footer from '../../components/Footer'
import InfoCompany from '../../components/Company/ProfileCompany/InfoCompany'
import { LIST_EMPLOYEES } from '../../constants/Company/profileCompany'
// import FollowingProject from '../components/My Properties/FollowingProject'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../../actions/Company/requestCompany';
import { Table, Tag, message } from 'antd';
class ListEmployees extends Component {
    constructor(props) {
        super(props);
        // this.props.actGetInfoUserCompany();
        this.state = {
            page: 1,
        };
    }
    componentDidMount() {
        this.props.actGetInfoUserCompany();

    }
    render() {
        const columns = [
            {
                title: 'Họ tên',
                dataIndex: 'employee.fullname',
                key: 'employee.fullname',
                sorter: (a, b) => a.employee.fullname > b.employee.fullname,
                sortDirections: ['descend', 'ascend'],
            },
            {
                title: 'Email',
                dataIndex: 'employee.email',
                key: 'employee.email',
            },
            {
                title: 'Số tin',
                dataIndex: 'employee.totalProject',
                key: 'employee.totalProject',
                sorter: (a, b) => a.employee.totalProject > b.employee.totalProject,
                render: tag => <Tag color={'green'} key={tag}>{tag}</Tag>
            },
            {
                title: 'Tình trạng tài khoản',
                dataIndex: 'employee.verify',
                filters: [
                    {
                        text: 'Đã kích hoạt',
                        value: true,
                    },
                    {
                        text: 'Chưa kích hoạt',
                        value: false,
                    },
                ],
                filterMultiple: false,
                onFilter: (value, record) => record.employee.verify === value,
                key: 'employee.verify',
                render: verify => {
                    let color = verify === true ? 'red' : 'geekblue'
                    return <Tag color={color} key={verify}>{verify === true ? 'Đã kích hoạt' : 'Chưa kích hoạt'}</Tag>
                }
            },
        ]
        let dataSource = [];
        let isLoading = true;
        let userCompany = this.props.userCompany;
        dataSource = userCompany.employees;
        return (
            <div>
                <HeaderCompany />
                {/* Sub banner start */}
                <div className="sub-banner overview-bgi">
                    <div className="overlay">
                        <div className="container">
                            <div className="breadcrumb-area">
                                <h1>Danh sách nhân viên</h1>
                                <ul className="breadcrumbs">
                                    <li><Link to="/">Trang chủ</Link></li>
                                    <li className="active">Danh sách nhân viên</li>
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
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <InfoCompany component={LIST_EMPLOYEES} />
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-12">
                                <div className="main-title-2">
                                    <h1><span>Danh sách nhân viên</span></h1>
                                </div>
                                {/* table start */}
                                <table className="manage-table responsive-table">
                                    <Table dataSource={dataSource} columns={columns} />
                                    
                                </table>
                                {/* table end */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* My Propertiess end */}
                <Footer />
            </div>
        );
    }
}

const mapDispathToProp = (dispatch) => {
    return {
        actGetInfoUserCompany: () => dispatch(actions.actGetInfoUserCompany())
    }
}
const mapStateToProp = (state) => {
    return {
        userCompany: state.userCompany
    }
}
export default connect(mapStateToProp, mapDispathToProp)(ListEmployees)
