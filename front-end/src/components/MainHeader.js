import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {HOME, NEWS, ABOUT, LIST_ESTATES} from '../constants/Navbar'

class MainHeader extends Component {
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
    onContactAgent = (e) => {
        e.preventDefault();
        this.props.history.push('/agents')
    }
    onContactCompany = (e) => {
        e.preventDefault();
        this.props.history.push('/companies/1')
    }
    onLogin = (e) => {
        e.preventDefault();
        this.props.history.push('/login');
    }
    onListEstate = (e) => {
        e.preventDefault();
        this.props.history.push('/estatelistview')
    }
    onHandleProfile = (e) => {
        e.preventDefault();
        let token = JSON.parse(localStorage.getItem('res'));
        console.log(token.googleId);
        // console.log(this.state.token);
        if (token.user._id) {
            this.props.history.push(`/profile`);
        }

    }
    onSignOut = (e) => {
        e.preventDefault();
        this.props.history.push('/');
        localStorage.removeItem('res');
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

    // componentDidMount =() => {
    //     let token = localStorage.getItem('res');
    //     this.setState({
    //         token: token
    //     })
    // }

    // getSnapshotBeforeUpdate = (prevState) => {
    //     if(prevState.token !== JSON.parse(localStorage.getItem('res')))
    //     return this.state.token
        
    // }

    // componentDidUpdate = (snapshot) => {
    //     if(snapshot)
    //     {
    //         this.setState({
    //             token: JSON.parse(localStorage.getItem('res'))
    //         })
    //     }
    // }
    render() {
        var token = localStorage.getItem('res')
        console.log(token)
        // if(token.id){
        //     this.setState({
        //         username: token.username
        //     })
        // }
        // else {
        //     this.setState({
        //         username: token.w3.ig
        //     })
        // }dd
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
                                            Trang chủ
                                        </a>
                                    </li>
                                    <li className={this.props.component === ABOUT ? "active" : ""}>
                                        <a href="true" onClick={this.onRedirectHome}>
                                            Về chúng tôi
                                        </a>
                                    </li>
                                    <li className={this.props.component === NEWS ? "active" : ""}>
                                        <a href="true" onClick={this.onNews}>
                                            Tin tức
                                        </a>
                                    </li>
                                    <li className={this.props.component === LIST_ESTATES ? "active" : ""}>
                                        <a href="true" onClick={this.onListEstate}>
                                            Danh sách
                                        </a>
                                    </li>
                                    {/* <li className="dropdown mega-dropdown">
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
                                    </li> */}
                                    <li className="dropdown">
                                        <a
                                            href="true"
                                            tabIndex={0}
                                            data-toggle="dropdown"
                                            data-submenu
                                            aria-expanded="false"
                                        >
                                            Danh bạ <span className="caret" />
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li >
                                                <a onClick={this.onContactAgent} href="true" tabIndex={0}>Nhà môi giới</a>
                                                
                                            </li>
                                            <li >
                                                <a onClick={this.onContactCompany} href="true" tabIndex={0}>Công ty</a>
                                                
                                            </li>
                                            
                                        </ul>
                                    </li>
                                </ul>
                                <ul className="nav navbar-nav navbar-right rightside-navbar">
                                    <li>
                                        <a href="true" onClick={this.onSubmitProperty} className="button" style={{ marginRight: '5px' }}>
                                            Đăng bài
                                        </a>
                                    </li>

                                    {this.onAfterLogin(token)}
                                    {/* <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                        <ul className="top-social-media pull-right">
                                            
                                        </ul>
                                    </div> */}
                                </ul>
                            </div>
                        </nav>
                    </div>
                </header>
            </div>


        );
    }
}

export default withRouter(MainHeader);