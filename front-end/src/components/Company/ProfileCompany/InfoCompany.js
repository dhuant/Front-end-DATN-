import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {ADD_ACCOUNT, CHANGE_PASSWORD,LIST_EMPLOYEES, PROFILE, MY_TRANSACTION, MY_TRANSACTION_HISTORY} from '../../../constants/Company/profileCompany'


class InfoCompany extends Component {
    onAddAccountEmployee = (e) => {
        e.preventDefault();
        this.props.history.push('/company/add-account-employee');
    }
    onChangePassword = (e) => {
        e.preventDefault();
        this.props.history.push('/company/changepassword');
    }
    onShowProfile = (e) => {
        e.preventDefault();
        this.props.history.push('/company/profile-admin');
    }
    onShowListEmployees = (e) => {
        e.preventDefault()
        this.props.history.push('/company/list-employees')
    }
    onShowMyTransactions = (e) => {
        e.preventDefault()
        this.props.history.push('/company/mytransactions')
    }
    onShowTransactionHistory = (e) => {
        e.preventDefault()
        this.props.history.push('/company/transhistory')
    }
    
    render() {
        let userInfoCompany = JSON.parse(localStorage.getItem('company'))
        return (
            <div>
                <div className="user-account-box">
                    <div className="header clearfix" style={{padding:'15px 15px 15px 15px'}}>
                        <div style={{textAlign:'center', padding:'25px 25px 25px 25px'}}>
                            <img style={{textAlign:'center'}} src={userInfoCompany.avatar} alt="agent-1" className="img-responsive" />
                            {/* <img src='https://res.cloudinary.com/dne3aha8f/image/upload/v1559203321/ddtyciszy3oiwdjasrjh.png?fbclid=IwAR3RFWWiOrMw-sMiNigCXJMFEGdpYw_FUBa4PxZYZLTtHvjLaa1JjBpNGy0' alt="agent-1" className="img-responsive" /> */}
                            
                            {/* <div className="change-photo-btn">
                                <div className="photoUpload">
                                    <span><i className="fa fa-upload" /> Upload Photo</span>
                                    <input type="file" className="upload" />
                                </div>
                            </div> */}
                        </div>
                        {/* <h3>{userInfoCompany.fullname}</h3> */}
                    </div>
                    <div className="content">
                        <ul>
                            <li>
                                <a href="true" onClick={this.onShowProfile} className={this.props.component === PROFILE ? "active" : ""}>
                                    <i className="flaticon-social" />Thông tin cơ bản
                                </a>
                            </li>
                            <li>
                                <a href="true" onClick={this.onChangePassword} className={this.props.component === CHANGE_PASSWORD ? "active" : ""}>
                                    <i className="fa fa-plus" />Đổi mật khẩu
                                </a>
                            </li>
                            <li>
                                <a href="true" onClick={this.onAddAccountEmployee} className={this.props.component === ADD_ACCOUNT ? "active" : ""}>
                                    <i className="flaticon-apartment" />Thêm tài khoản nhân viên
                                </a>
                            </li>
                            <li>
                                <a href="true" onClick={this.onShowListEmployees} className={this.props.component === LIST_EMPLOYEES ? "active" : ""}>
                                    <i className="flaticon-shape" />Danh sách nhân viên
                                </a>
                            </li>
                            <li>
                                <a href="true" onClick={this.onShowMyTransactions} className={this.props.component === MY_TRANSACTION ? "active" : ""}>
                                    <i className="flaticon-monitor" />Giao dịch hiện hành
                                </a>
                            </li>
                            <li>
                                <a href="true" onClick={this.onShowTransactionHistory} className={this.props.component === MY_TRANSACTION_HISTORY ? "active" : ""}>
                                    <i className="flaticon-internet" />Lịch sử giao dịch
                                </a>
                            </li>
                            
                            <li>
                                <a href="true">
                                    <i className="flaticon-sign-out-option" />Đăng xuất
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default (withRouter(InfoCompany));
