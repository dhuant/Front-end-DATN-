import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { ADD_ACCOUNT, CHANGE_PASSWORD, LIST_EMPLOYEES, PROFILE, MY_TRANSACTION, MY_TRANSACTION_HISTORY } from '../../../constants/Company/profileCompany'
import Dropzone from 'react-dropzone'
import request from 'superagent'
import { message } from 'antd'

const CLOUDINARY_UPLOAD_PRESET = 'nn6imhmo';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dne3aha8f/image/upload';

class InfoCompany extends Component {
    constructor(props) {
        super(props)

        this.state = {
            uploadedFile: null,
            uploadedFileCloudinaryUrl: ''
        }
    }

    onImageSelect(files) {
        this.setState({
            uploadedFile: files[0]
        });
        console.log(files)
        this.handleImageUpload(files[0]);
    }

    handleImageUpload(file) {
        console.log(file)
        request
            .post(CLOUDINARY_UPLOAD_URL)
            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
            .field('file', file)
            .then(response => {
                console.log(response)
                this.setState({
                    uploadedFileCloudinaryUrl: response.body.secure_url,
                })
            })
            .catch(err => message.error(`Có lỗi xảy ra: ${err}`))
    }

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
        var { uploadedFileCloudinaryUrl } = this.state
        if (uploadedFileCloudinaryUrl !== '') localStorage.setItem('avatar', uploadedFileCloudinaryUrl)
        return (
            <div>
                <div className="user-account-box">
                    <div className="header clearfix" >
                        <div className="edit-profile-photo">
                            <img style={{ width: "150px", height: "150px" }} src={localStorage.getItem('avatar') ? localStorage.getItem('avatar') : userInfoCompany.avatar} alt="agent-1" className="img-responsive" />
                            <div className="change-photo-btn">
                                <div className="photoUpload">
                                    <Dropzone
                                        onDrop={this.onImageSelect.bind(this)}
                                        multiple={false}
                                        accept="image/*">
                                        {({ getRootProps, getInputProps }) => {
                                            return (
                                                <div
                                                    {...getRootProps()}
                                                >
                                                    <input {...getInputProps()} />
                                                    {
                                                        <span><i className="fa fa-upload" /> Đổi ảnh đại diện</span>
                                                    }
                                                </div>
                                            )
                                        }}
                                    </Dropzone>
                                </div>
                            </div>
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
