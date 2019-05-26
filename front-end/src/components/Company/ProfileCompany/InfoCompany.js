import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {ADD_ACCOUNT, MY_FOLLOWING, SUBMIT_ESTATE, PROFILE, MY_TRANSACTION, MY_TRANSACTION_HISTORY} from '../../../constants/Company/profileCompany'


class InfoCompany extends Component {
    onAddAccountEmployee = (e) => {
        e.preventDefault();
        this.props.history.push('/company/add-account-employee');
    }
    onSubmitProperty = (e) => {
        e.preventDefault();
        this.props.history.push('/company/submitproperty');
    }
    onChangePassword = (e) => {
        e.preventDefault();
        this.props.history.push('/company/changepassword');
    }
    onShowProfile = (e) => {
        e.preventDefault();
        this.props.history.push('/company/profile-admin');
    }
    onShowMyFollowing = (e) => {
        e.preventDefault()
        this.props.history.push('/company/myfollowing')
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
                    <div className="header clearfix">
                        <div className="edit-profile-photo">
                            <img src={userInfoCompany.avatar} alt="agent-1" className="img-responsive" />
                            {/* <div className="change-photo-btn">
                                <div className="photoUpload">
                                    <span><i className="fa fa-upload" /> Upload Photo</span>
                                    <input type="file" className="upload" />
                                </div>
                            </div> */}
                        </div>
                        {/* <h3>{userInfoCompany.fullname}</h3> */}
                        <p>{userInfoCompany.email}</p>
                        <ul className="social-list clearfix">
                            <li>
                                <a href="true" className="facebook">
                                    <i className="fa fa-facebook" />
                                </a>
                            </li>
                            <li>
                                <a href="true" className="twitter">
                                    <i className="fa fa-twitter" />
                                </a>
                            </li>
                            <li>
                                <a href="true" className="linkedin">
                                    <i className="fa fa-linkedin" />
                                </a>
                            </li>
                            <li>
                                <a href="true" className="google">
                                    <i className="fa fa-google-plus" />
                                </a>
                            </li>
                            <li>
                                <a href="true" className="rss">
                                    <i className="fa fa-rss" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="content">
                        <ul>
                            <li>
                                <a href="true" onClick={this.onShowProfile} className={this.props.component === PROFILE ? "active" : ""}>
                                    <i className="flaticon-social" />Thông tin cơ bản
                                </a>
                            </li>
                            <li>
                                <a href="true" onClick={this.onAddAccountEmployee} className={this.props.component === ADD_ACCOUNT ? "active" : ""}>
                                    <i className="flaticon-apartment" />Thêm tài khoản nhân viên
                                </a>
                            </li>
                            <li>
                                <a href="true" onClick={this.onShowMyFollowing} className={this.props.component === MY_FOLLOWING ? "active" : ""}>
                                    <i className="flaticon-shape" />Danh sách yêu thích
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
                                <a href="true" onClick={this.onSubmitProperty} className={this.props.component === SUBMIT_ESTATE ? "active" : ""}>
                                    <i className="fa fa-plus" />Đăng bài
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
