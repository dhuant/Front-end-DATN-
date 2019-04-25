import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {MY_PROPERTIES, CHANGE_PASSWORD, SUBMIT_ESTATE, PROFILE} from '../../constants/Profile'

class Info extends Component {
    onMyProperties = (e) => {
        e.preventDefault();
        this.props.history.push('/myproperties');
    }
    onSubmitProperty = (e) => {
        e.preventDefault();
        this.props.history.push('/submitproperty');
    }
    onChangePassword = (e) => {
        e.preventDefault();
        this.props.history.push('/changepassword');
    }
    onShowProfile = (e) => {
        e.preventDefault();
        this.props.history.push('/profile');
    }
    
    render() {
        let userInfo = JSON.parse(localStorage.getItem('res'))
        return (
            <div>
                <div className="user-account-box">
                    <div className="header clearfix">
                        <div className="edit-profile-photo">
                            <img src={userInfo.user.avatar} alt="agent-1" className="img-responsive" />
                            {/* <div className="change-photo-btn">
                                <div className="photoUpload">
                                    <span><i className="fa fa-upload" /> Upload Photo</span>
                                    <input type="file" className="upload" />
                                </div>
                            </div> */}
                        </div>
                        <h3>{userInfo.user.fullname}</h3>
                        <p>{userInfo.user.email}</p>
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
                                    <i className="flaticon-social" />Profile
                                </a>
                            </li>
                            <li>
                                <a href="true" onClick={this.onMyProperties} className={this.props.component === MY_PROPERTIES ? "active" : ""}>
                                    <i className="flaticon-apartment" />My Properties
                                </a>
                            </li>
                            <li>
                                <a href="true" onClick={this.onSubmitProperty} className={this.props.component === SUBMIT_ESTATE ? "active" : ""}>
                                    <i className="fa fa-plus" />Submit New Property
                                </a>
                            </li>
                            <li>
                                <a href="true" onClick={this.onChangePassword} className={this.props.component === CHANGE_PASSWORD ? "active" : ""}>
                                    <i className="flaticon-security" />Change Password
                                </a>
                            </li>
                            <li>
                                <a href="true">
                                    <i className="flaticon-sign-out-option" />Log Out
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default (withRouter(Info));
