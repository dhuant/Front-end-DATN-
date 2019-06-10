import React, { Component } from 'react';

import HeaderCompany from '../../components/Company/HeaderCompany'
import Footer from '../../components/Footer'
import InfoCompany from '../../components/Company/ProfileCompany/InfoCompany'
import { LIST_EMPLOYEES } from '../../constants/Company/profileCompany'
// import FollowingProject from '../components/My Properties/FollowingProject'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../../actions/Company/requestCompany';
import { Table, Tag } from 'antd';
class ListEmployees extends Component {
    constructor(props) {
        super(props);
        // this.props.actGetInfoUserCompany();
        this.state = {
            page: 1,
        };
    }
    componentDidMount() {
        let company = JSON.parse(localStorage.getItem('company'));
        this.props.actGetInfoUserCompany(company.id);
    }
    render() {
        let dataSource = [];
        let {employees} = this.props
        if(employees !==[]){
            dataSource =  employees
        }
        const columns = [
            {
                title: 'Họ tên',
                dataIndex: 'employee.fullname',
                key: 'employee.fullname',
                sorter: (a, b) => a.employee.fullname > b.employee.fullname,
                sortDirections: ['descend', 'ascend'],
                width: 200,
                fixed: 'left',
            },
            {
                title: 'Email',
                dataIndex: 'employee.email',
                key: 'employee.email',
                width: 240,
            },
            {
                title: 'Số tin',
                dataIndex: 'employee.totalProject',
                key: 'employee.totalProject',
                sorter: (a, b) => a.employee.totalProject > b.employee.totalProject,
                width: 100,
                render: tag => <Tag color={'green'} key={tag}>{tag}</Tag>
            },
            {
                title: 'Trạng thái tài khoản',
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
                width: 150,
                onFilter: (value, record) => record.employee.verify === value,
                key: 'employee.verify',
                render: verify => {
                    let color = verify === true ? 'red' : 'geekblue'
                    return <Tag color={color} key={verify}>{verify === true ? 'Đã kích hoạt' : 'Chưa kích hoạt'}</Tag>
                }
                
            },
            {
                title: 'Tình trạng',
                dataIndex: 'employee.lock',
                key: 'employee.lock',
                
                render: lock => {
                    let color = lock === true ? 'red' : 'geekblue'
                    return <Tag color={color} key={lock}>{lock === true ? 'Đã bị khóa' : 'Đang hoạt động'}</Tag>
                },
                width: 150,
                fixed: 'right',
            },
        ]
        
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
                                    <Table dataSource={dataSource} bordered columns={columns} scroll={{x:'110%', y: 300 }}
                                     onRow={(record, rowIndex) => {
                                        return {
                                            onClick: (event) => {
                                                console.log(record)
                                                this.props.history.push(`info-employee/${record.employee._id}`)
                                            },
                                        }}}
                                    />
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
        actGetInfoUserCompany: (id) => dispatch(actions.actGetInfoUserCompany(id))
    }
}
const mapStateToProp = (state) => {
    return {
        userCompany: state.userCompany,
        employees: state.employees
    }
}
export default connect(mapStateToProp, mapDispathToProp)(ListEmployees)
