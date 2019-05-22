import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {HOME, NEWS, ABOUT} from '../../constants/Navbar'

class HeaderCompany extends Component {
    constructor() {
        super();
        this.state = {
            username: null,
            token: 'abc'
        };
    }

    onSubmitProperty = (e) => {
        e.preventDefault();
        this.props.history.push('/submitproperty');

    }
    onRedirectHome = (e) => {
        e.preventDefault();
        this.props.history.push('/');
    }
    onNews = (e) => {
        e.preventDefault();
        this.props.history.push('/news')
    }
    onLogin = (e) => {
        e.preventDefault();
        this.props.history.push('/login');
    }
    onHandleProfile = (e) => {
        e.preventDefault();
        let token = JSON.parse(localStorage.getItem('company'));      
        if (token.data.id) {
            this.props.history.push(`/company/profile`);
        }

    }
    onSignOut = (e) => {
        e.preventDefault();
        this.props.history.push('/login');
        localStorage.removeItem('company');
    }


    onAfterLogin = (token) => {
        if (token !== null)
            return (<React.Fragment>
                <li>
                    <a href="true" onClick={this.onHandleProfile} className="button" style={{ marginRight: '5px' }}>
                        <i className="fa fa-user" /> Tài khoản
                    </a>
                </li>
                <li>
                    <a href="true" onClick={this.onSignOut} className="button-signout" style={{ marginRight: '5px', color: 'red', border: '1px solid red' }}>
                        <i className="fa fa-sign-out" /> Đăng xuất
                    </a>
                </li>
            </React.Fragment>);
        else if (token === null)
            return (
                <li>
                    <a href="true" onClick={this.onLogin} className="button" style={{ marginRight: '5px' }}>
                        <i className="fa fa-sign-in" /> Đăng nhập
                                                </a>
                </li>

            );
    }

    render() {
        var token = localStorage.getItem('company')
        console.log(token)
        return (
            <div>
                <header className="main-header">
                    <div className="container">
                        <nav className="navbar navbar-default">
                            <div className="navbar-header">
                                <button
                                    type="button"
                                    className="navbar-toggle collapsed"
                                    data-toggle="collapse"
                                    data-target="#app-navigation"
                                    aria-expanded="false"
                                >
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                </button>
                                <a href="true" onClick={this.onRedirectHome} className="logo">
                                    <img src="/img/logos/logo.png" alt="logo" />
                                </a>
                            </div>
                            {/* Collect the nav links, forms, and other content for toggling */}
                            <div
                                className="navbar-collapse collapse"
                                role="navigation"
                                aria-expanded="true"
                                id="app-navigation"
                            >
                                <ul className="nav navbar-nav">
                                    <li className={this.props.component === HOME ? "active" : ""}>
                                        <a href="true" onClick={this.onRedirectHome} data-toggle="dropdown active">
                                            Home
                                        </a>
                                    </li>
                                    <li className={this.props.component === ABOUT ? "active" : ""}>
                                        <a href="true" onClick={this.onRedirectHome}>
                                            About
                                        </a>
                                    </li>
                                    <li className={this.props.component === NEWS ? "active" : ""}>
                                        <a href="true" onClick={this.onNews}>
                                            News
                                        </a>
                                    </li>
                                    <li className="dropdown mega-dropdown">
                                        <a
                                            href="true"
                                            className="dropdown-toggle"
                                            data-toggle="dropdown"
                                        >
                                            Pages <span className="caret" />
                                        </a>
                                        <ul className="dropdown-menu mega-dropdown-menu row">
                                            <li className="col-lg-3 col-md-3 col-sm-6">
                                                <ul>
                                                    <li className="dropdown-header">Pages</li>
                                                    <li>
                                                        <a href="about.html">About 1</a>
                                                    </li>
                                                    <li>
                                                        <a href="about-2.html">About 2</a>
                                                    </li>
                                                    <li>
                                                        <a href="services-1.html">Services 1</a>
                                                    </li>
                                                    <li>
                                                        <a href="services-2.html">Services 2</a>
                                                    </li>
                                                    <li>
                                                        <a href="pricing-tables.html">Pricing Tables 1</a>
                                                    </li>
                                                    <li>
                                                        <a href="pricing-tables-2.html">
                                                            Pricing Tables 2
                              </a>
                                                    </li>
                                                    <li>
                                                        <a href="pricing-tables-3.html">
                                                            Pricing Tables 3
                              </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="col-lg-3 col-md-3 col-sm-6">
                                                <ul>
                                                    <li className="dropdown-header">Pages</li>
                                                    <li>
                                                        <a href="faq.html">Faq 1</a>
                                                    </li>
                                                    <li>
                                                        <a href="faq-2.html">Faq 2</a>
                                                    </li>
                                                    <li>
                                                        <a href="gallery-1.html">Gallery 1</a>
                                                    </li>
                                                    <li>
                                                        <a href="gallery-2.html">Gallery 2</a>
                                                    </li>
                                                    <li>
                                                        <a href="gallery-3.html">Gallery 3</a>
                                                    </li>
                                                    <li>
                                                        <a href="properties-comparison.html">
                                                            Properties Comparison
                              </a>
                                                    </li>
                                                    <li>
                                                        <a href="search-brand.html">Search Brand</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="col-lg-3 col-md-3 col-sm-6">
                                                <ul>
                                                    <li className="dropdown-header">Pages</li>
                                                    <li>
                                                        <a href="contact.html">Contact 1</a>
                                                    </li>
                                                    <li>
                                                        <a href="contact-2.html">Contact 2</a>
                                                    </li>
                                                    <li>
                                                        <a href="contact-3.html">Contact 3</a>
                                                    </li>
                                                    <li>
                                                        <a href="typography.html">Typography</a>
                                                    </li>
                                                    <li>
                                                        <a href="elements.html">Elements</a>
                                                    </li>
                                                    <li>
                                                        <a href="icon.html">Icon</a>
                                                    </li>
                                                    <li>
                                                        <a href="404.html">Pages 404</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="col-lg-3 col-md-3 col-sm-6">
                                                <ul>
                                                    <li className="dropdown-header">Pages</li>
                                                    <li>
                                                        <a href="user-profile.html">User profile</a>
                                                    </li>
                                                    <li>
                                                        <a href="my-properties.html">My Properties</a>
                                                    </li>
                                                    <li>
                                                        <a href="favorited-properties.html">
                                                            Favorited properties
                              </a>
                                                    </li>
                                                    <li>
                                                        <a href="true" onClick={this.onSubmitProperty}>Submit Property</a>
                                                    </li>
                                                    <li>
                                                        <a href="login.html">Login</a>
                                                    </li>
                                                    <li>
                                                        <a href="signup.html">Signup</a>
                                                    </li>
                                                    <li>
                                                        <a href="forgot-password.html">Forgot Password</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a
                                            href="true"
                                            tabIndex={0}
                                            data-toggle="dropdown"
                                            data-submenu
                                            aria-expanded="false"
                                        >
                                            Blog<span className="caret" />
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li className="dropdown-submenu">
                                                <a href="true" tabIndex={0}>Classic</a>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <a
                                                            className="dropdown-item"
                                                            href="blog-classic-sidebar-right.html"
                                                        >
                                                            Right Sidebar
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="dropdown-item"
                                                            href="blog-classic-sidebar-left.html"
                                                        >
                                                            Left Sidebar
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="dropdown-item"
                                                            href="blog-classic-fullwidth.html"
                                                        >
                                                            FullWidth
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown-submenu">
                                                <a href="true" tabIndex={0}>Columns</a>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <a
                                                            className="dropdown-item"
                                                            href="blog-columns-2col.html"
                                                        >
                                                            2 Columns
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="dropdown-item"
                                                            href="blog-columns-3col.html"
                                                        >
                                                            3 Columns
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown-submenu">
                                                <a href="true" tabIndex={0}>Blog Details</a>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <a
                                                            className="dropdown-item"
                                                            href="blog-single-sidebar-right.html"
                                                        >
                                                            Right Sidebar
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="dropdown-item"
                                                            href="blog-single-sidebar-left.html"
                                                        >
                                                            Left Sidebar
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="dropdown-item"
                                                            href="blog-single-fullwidth.html"
                                                        >
                                                            Fullwidth
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <ul className="nav navbar-nav navbar-right rightside-navbar">
                                    {/* <li>
                                        <a href="true" onClick={this.onSubmitProperty} className="button" style={{ marginRight: '5px' }}>
                                            Đăng bài
                                        </a>
                                    </li> */}

                                    {this.onAfterLogin(token)}
                                   
                                </ul>
                            </div>
                        </nav>
                    </div>
                </header>
            </div>


        );
    }
}

export default withRouter(HeaderCompany);