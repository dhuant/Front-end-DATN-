/* eslint-disable */
import React, { Component } from 'react';
import axios from 'axios';
import { GoogleLogin } from 'react-google-login';
import * as Config from '../constants/Config'
import { withRouter } from 'react-router-dom';
import * as actions from '../actions/request';
// import { Select } from 'antd';
import { connect } from 'react-redux';


class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            error: '',
            isAuthenticated: false,
            user: null,
            token: ''
        };
    }
    onResetPassword = (e) => {
        e.preventDefault();
        this.props.history.push('/forgotpassword');
    }
    onLoginCompany =() =>{
        this.props.history.push(`/company/login`)
    }
    logout = () => {
        this.setState({
            isAuthenticated: false,
            token: '', user: null
        })
    };
    googleResponse = (response) => {
        console.log(response);
        // localStorage.setItem('tokenbeforeposting', response)
        const tokenBlob = new Blob([JSON.stringify({ access_token: response.accessToken }, null, 2)], { type: 'application/json' });
        const options = {
            method: 'POST',
            body: tokenBlob,
            mode: 'cors',
            cache: 'default'
        };
        fetch('http://localhost:3001/users/auth/google', options).then(r => r.json()
        .then(json => {
            console.log(json)
            localStorage.setItem('res', JSON.stringify(json))
            this.props.history.goBack();
        }))
        
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
    var headers = {

        "Access-Control-Allow-Origin": "*",
    }
    axios.post('http://localhost:3001/users/login', {
        email: this.state.email,
        password: this.state.password
    }, headers)
        .then(res => {
            // console.log(res.data);
            if (res.data.status === 200) {
                console.log(res.data);
                delete res.data.status;
                localStorage.setItem('user', JSON.stringify(res.data));
                this.props.actGetInfoUser(res.data.id);

                // console.log(res.data.result);
                //this.props.history.push(`/profile/${res.data.id}`);
                this.props.history.goBack();

            } else {
                this.setState({
                    error: 'Auth failed!!'
                });
            }
        })
        .catch((err) => {
            console.log("AXIOS ERROR: ", err);
        });
}
render() {
    let content = !!this.state.isAuthenticated ?
        (
            <div>
                <p>Authenticated</p>
                <div>
                    {this.state.user.email}
                </div>
                <div>
                    <button onClick={this.logout} className="button">
                        Log out
                        </button>
                </div>
            </div>
        ) :
        (
            <div>
                <GoogleLogin
                    clientId={Config.GOOGLE_CLIENT_ID}
                    buttonText="Login"
                    render={renderProps => (
                        <button
                            onClick={renderProps.onClick}
                            type="submit"
                            className="button-google btn-block"
                            // style={{ border: "solid 1px black" }}
                        >
                            <img src="/images/icons/icon-google.png" alt="GOOGLE" style={{ marginRight: "10px", width: "18px" }} />
                            Đăng nhập với Google
                            </button>
                    )}
                    onSuccess={this.googleResponse}
                    onFailure={this.onFailure}
                />
            </div>
        );
    return (
        <div className="content-area">
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
                                        <span>Đăng nhập</span>
                                    </h1>
                                </div>
                                {/* Form start */}
                                <form>
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
                                                Nhớ tài khoản
                                            </label>
                                        </div>
                                        <a
                                            onClick={this.onResetPassword}
                                            className="link-not-important pull-right"
                                        >
                                            Quên mật khẩu
                                            </a>
                                        <div className="clearfix" />
                                    </div>
                                    <div className="form-group">
                                        <button
                                            onClick={this.signIn}
                                            type="submit"
                                            className="button-md button-theme btn-block"
                                        >
                                            Đăng nhập
                                            </button>
                                        <br />
                                        <button
                                            onClick={this.onLoginCompany}
                                            type="submit"
                                            className="button-md button-theme btn-block"
                                            style={{backgroundColor:'red'}}
                                        >
                                            Đăng nhập bằng tài khoản công ty
                                            </button>
                                        <br />
                                        <div className="App">
                                            {content}
                                        </div>
                                    </div>
                                </form>
                                {/* Form end */}
                            </div>
                            {/* Footer */}
                            <div className="footer">
                                <span>
                                    New to Tempo? <a href="signup.html">Sign up now</a>
                                </span>
                            </div>
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
        actGetInfoUser: (id) => dispatch(actions.actGetInfoUser(id)),
    }
}
const mapStateToProp = (state) => {
    return {

    }
}
export default connect(mapStateToProp, mapDispathToProp)(withRouter(Login));