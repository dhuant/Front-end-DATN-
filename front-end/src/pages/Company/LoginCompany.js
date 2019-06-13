/* eslint-disable */
import React, { Component } from 'react';
import axios from 'axios';
// import { GoogleLogin } from 'react-google-login';
import * as Config from '../../constants/Config'
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions/Company/requestCompany';
import * as actionAuth from '../../actions/auth'
import { connect } from 'react-redux';
import { message, Modal } from 'antd'
//=== tai khoan
// thaodien@gmail.com
// 5yPQAn
//===
class Login extends Component {
    constructor(props) {
        super(props);
        this.props.actCheckAuth('')
        this.state = {
            email: '',
            password: '',
            error: '',
            isAuthenticated: false,
            user: null,
            token: ''
        };
    }
    componentDidMount(){
        if(localStorage.getItem('company')){
            this.props.history.push('/company/profile-admin')
        }
        
    }
    logout = () => {
        this.setState({
            isAuthenticated: false,
            token: '', user: null
        })
    };
    onResetPassword = (e) => {
        e.preventDefault();
        this.props.history.push('/company/forgotpassword');
    }

    handleEmailChange = (e) => {
        // console.log(e.target.value);
        this.setState({
            email: e.target.value
        })
    }
    handlePasswordChange = (e) => {
        // console.log(e.target.value);
        this.setState({
            password: e.target.value
        })
    }
    signIn = (e) => {
        e.preventDefault();
        let id = 1;
        // var headers = {

        //     "Access-Control-Allow-Origin": "*",
        // }
        axios.post(`${Config.API_URL}/company/login`, {
            email: this.state.email,
            password: this.state.password
        })
            .then(res => {
                // console.log(res);
                if (res.status === 200) {
                    message.success("Đăng nhập thành công");
                    console.log(res);
                    localStorage.setItem('company', JSON.stringify(res.data));
                    this.props.actCheckAuth(true)
                    this.props.history.push(`/company/profile-admin`);
                }

            })
            .catch((err) => {
                console.log(err.response)
                message.error(err.response.data.message)
                // message.error("Tài khoản của bạn không đúng")
            });
    }
    render() {
        Modal.destroyAll()
        return (
            <div className="content-area" style={{ backgroundColor: 'lightgray' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* Form content box start */}
                            <div className="form-content-box">
                                {/* details */}
                                <div className="details">
                                    {/* Main title */}
                                    <div className="main-title">
                                        <h1>
                                            <span>Đăng nhập công ty</span>
                                        </h1>
                                    </div>
                                    {/* Form start */}
                                    <form onSubmit={this.signIn}>
                                        {/* <div style={{ marginBottom: '10px' }}>
                                            <a className="btn-google m-b-20" href>
                                                <img src="images/icons/icon-google.png" alt="GOOGLE" />
                                                Google
                                            </a>
                                        </div> */}
                                        <div className="form-group">
                                            <input
                                                onChange={this.handleEmailChange}
                                                type="email"
                                                name="email"
                                                className="input-text"
                                                placeholder="Nhập Email"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                onChange={this.handlePasswordChange}
                                                type="password"
                                                name="Password"
                                                className="input-text"
                                                placeholder="Mật khẩu"
                                                required
                                            />
                                        </div>
                                        <div className="checkbox">
                                            <div className="ez-checkbox pull-left">
                                                <label>
                                                    <input type="checkbox" className="ez-hide" />
                                                    Ghi nhớ đăng nhập
                                            </label>
                                            </div>
                                            <a
                                                onClick={this.onResetPassword}
                                                className="link-not-important pull-right"
                                            >
                                                Quên mật khẩu?
                                            </a>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="form-group">
                                            <button
                                                // onClick={this.signIn}
                                                type="submit"
                                                className="button-md button-theme btn-block"
                                            >
                                                Đăng nhập
                                            </button>
                                            <br />

                                        </div>
                                    </form>
                                    {/* Form end */}
                                </div>
                                {/* Footer */}

                            </div>
                            {/* Form content box end */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispathToProp = (dispatch) => {
    return {
        // actGetInfoUserCompany: () => dispatch(actions.actGetInfoUserCompany()),
        actCheckAuth: (isAuth) => dispatch(actionAuth.actCheckAuth(isAuth))
    }
}
const mapStateToProp = (state) => {
    return {

    }
}
export default connect(mapStateToProp, mapDispathToProp)(withRouter(Login));