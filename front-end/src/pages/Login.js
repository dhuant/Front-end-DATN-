import React, { Component } from 'react';

class Login extends Component {
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
                                        <div style={{marginBottom:'10px'}}>
                                            <a className="btn-google m-b-20" href>
                                                <img src="images/icons/icon-google.png" alt="GOOGLE" />
                                                Google
                                            </a>
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                name="email"
                                                className="input-text"
                                                placeholder="Email Address"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
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