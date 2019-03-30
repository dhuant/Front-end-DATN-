import React, { Component } from 'react';
import axios from 'axios';
class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            error: ''
        };
    }
    componentDidMount() {
        if (localStorage.getItem('token') === 'true') {
            // console.log('logged');
            this.props.history.push('/');
        }
    }
    handleEmailChange = (e) => {
        console.log(e.target.value);
        this.setState({
            email: e.target.value
        })
    }
    handlePasswordChange = (e) => {
        console.log(e.target.value);
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
        axios.post('http://localhost:3001/users/login',{
            email: this.state.email,
            password: this.state.password
        }, headers)
            .then(res => {
                console.log(res);
                if (res.data.status === 200) {
                    localStorage.setItem('token', true);
                    // console.log(res.data.result);
                    this.props.history.push('/');
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
                                        <div style={{ marginBottom: '10px' }}>
                                            <a className="btn-google m-b-20" href>
                                                <img src="images/icons/icon-google.png" alt="GOOGLE" />
                                                Google
                                            </a>
                                        </div>
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

export default Login;