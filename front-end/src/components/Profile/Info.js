import React, { Component } from 'react';

class Info extends Component {
    render() {
        return (
            <div>
                <div className="user-account-box">
                    <div className="header clearfix">
                        <div className="edit-profile-photo">
                            <img src="img/avatar/avatar-3.jpg" alt="agent-1" className="img-responsive" />
                            <div className="change-photo-btn">
                                <div className="photoUpload">
                                    <span><i className="fa fa-upload" /> Upload Photo</span>
                                    <input type="file" className="upload" />
                                </div>
                            </div>
                        </div>
                        <h3>John Doe</h3>
                        <p>johndoe@gmail.com</p>
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
                                <a href="user-profile.html" className="active">
                                    <i className="flaticon-social" />Profile
                                </a>
                            </li>
                            <li>
                                <a href="my-properties.html">
                                    <i className="flaticon-apartment" />My Properties
                                </a>
                            </li>
                            <li>
                                <a href="favorited-properties.html">
                                    <i className="fa fa-heart" />Favorited Properties
                                </a>
                            </li>
                            <li>
                                <a href="submit-property.html">
                                    <i className="fa fa-plus" />Submit New Property
                                </a>
                            </li>
                            <li>
                                <a href="change-password.html">
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

export default Info;
