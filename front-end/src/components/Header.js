import React from 'react';

const Header = () => {
    return (
        <div>
        <header className="top-header hidden-xs" id="top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                <div className="list-inline">
                                    <a href="tel:1-8X0-666-8X88">
                                        <i className="fa fa-phone" />1-8X0-666-8X88
                                 </a>
                                    <a href="tel:info@themevessel.com">
                                        <i className="fa fa-envelope" />info@themevessel.com
                            </a>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                <ul className="top-social-media pull-right">
                                    <li>
                                        <a href="login.html" className="sign-in">
                                            <i className="fa fa-sign-in" /> Login
                                    </a>
                                    </li>
                                    <li>
                                        <a href="signup.html" className="sign-in">
                                            <i className="fa fa-user" /> Register
                                    </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
        </div>
    );
};

export default Header;