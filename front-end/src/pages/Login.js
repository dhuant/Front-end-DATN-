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
    logout = () => {
        this.setState({
            isAuthenticated: false,
            token: '', user: null
        })
    };
    googleResponse = (response) => {
        console.log(response);
        const tokenBlob = new Blob([JSON.stringify({access_token: response.accessToken}, null, 2)], {type : 'application/json'});
        const options = {
            method: 'POST',
            body: tokenBlob,
            mode: 'cors',
            cache: 'default'
        };
        fetch('http://localhost:3001/usersGG/auth/google', options).then(r => {
            const token = r.headers.get('x-auth-token');
            console.log(token);
            // console.log(r.json());  
            r.clone().json().then(user => {
                if (token) {
                    this.setState({isAuthenticated: true, user, token})
                }
            });
        })
        if(response.Zi.accessToken !== null){
            localStorage.setItem('user', JSON.stringify(response));
            console.log(response.accessToken);
            console.log(response.googleId);
            this.props.actGetInfoUser(response.googleId);
            // this.props.actPostGoogleTokenRequest(response.accessToken);
            // this.props.history.goBack();
        }
        else (
            this.setState({ 
                error: 'Auth failed!!'
            })
        )
        this.props.history.goBack();
    
        console.log(response.googleId);   
        
    };
    onFailure = (error) => {
        alert(error);
    }

    // componentDidMount() {
    //     if (JSON.parse(localStorage.getItem('user'))) {
    //         // console.log('logged');
    //         this.props.history.push('/');
    //     }
    // }

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
        //alert('Email address is ' + this.state.email + ' Password is ' + this.state.password);
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
        // var data = {
        //     email:  'trantandat@gmail.com',
        //     password: '1234',
        //   }
        //   var header = {
        //     'Access-Control-Allow-Origin': '*',
        //   }
        //   axios.post('http://localhost:3001/users/login', data, header)
        //   .then(response=>{
        //     console.log(response);
        //   })
        //   .catch(err=>{
        //     console.log(err);
        //   })
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
                                style={{ border: "solid 1px black" }}
                            >
                                <img src="/images/icons/icon-google.png" alt="GOOGLE" style={{ marginRight: "10px", width: "18px" }} />
                                Login With Google
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
                                            <span>Login</span>
                                        </h1>
                                    </div>
                                    {/* Form start */}
                                    <form
                                        action="http://themevessel-item.s3-website-us-east-1.amazonaws.com/nest/index.html"
                                        method="GET"
                                    >
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
                                                placeholder="Email Address"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                onChange={this.handlePasswordChange}
                                                type="password"
                                                name="Password"
                                                className="input-text"
                                                placeholder="Password"
                                            />
                                        </div>
                                        <div className="checkbox">
                                            <div className="ez-checkbox pull-left">
                                                <label>
                                                    <input type="checkbox" className="ez-hide" />
                                                    Remember me
                                            </label>
                                            </div>
                                            <a
                                                href="forgot-password.html"
                                                className="link-not-important pull-right"
                                            >
                                                Forgot Password
                                            </a>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="form-group">
                                            <button
                                                onClick={this.signIn}
                                                type="submit"
                                                className="button-md button-theme btn-block"
                                            >
                                                login
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