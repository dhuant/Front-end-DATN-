import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
class MainHeader extends Component {
    onSubmitProperty = (e) => {
        e.preventDefault();
        this.props.history.push('/submitproperty');
    }
    render() {
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
                                <a href="index.html" className="logo">
                                    <img src="img/logos/logo.png" alt="logo" />
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
                                    <li className="dropdown active">
                                        <a
                                            tabIndex={0}
                                            data-toggle="dropdown"
                                            data-submenu
                                            aria-expanded="false"
                                        >
                                            Home<span className="caret" />
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a href="index.html">Home 1</a>
                                            </li>
                                            <li>
                                                <a href="index-2.html">Home 2</a>
                                            </li>
                                            <li>
                                                <a href="index-3.html">Home 3</a>
                                            </li>
                                            <li>
                                                <a href="index-4.html">Home 4</a>
                                            </li>
                                            <li>
                                                <a href="index-5.html">Home 5</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a
                                            tabIndex={0}
                                            data-toggle="dropdown"
                                            data-submenu
                                            aria-expanded="false"
                                        >
                                            Properties<span className="caret" />
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li className="dropdown-submenu">
                                                <a tabIndex={0}>List Layout</a>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <a href="properties-list-rightside.html">
                                                            Right Sidebar
                              </a>
                                                    </li>
                                                    <li>
                                                        <a href="properties-list-leftside.html">
                                                            Left Sidebar
                              </a>
                                                    </li>
                                                    <li>
                                                        <a href="properties-list-fullwidth.html">
                                                            Fullwidth
                              </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown-submenu">
                                                <a tabIndex={0}>Grid Layout</a>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <a href="properties-grid-rightside.html">
                                                            Right Sidebar
                              </a>
                                                    </li>
                                                    <li>
                                                        <a href="properties-grid-leftside.html">
                                                            Left Sidebar
                              </a>
                                                    </li>
                                                    <li>
                                                        <a href="properties-grid-fullwidth.html">
                                                            Fullwidth
                              </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown-submenu">
                                                <a tabIndex={0}>Map View</a>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <a href="properties-map-leftside-list.html">
                                                            Map List 1
                              </a>
                                                    </li>
                                                    <li>
                                                        <a href="properties-map-rightside-list.html">
                                                            Map List 2
                              </a>
                                                    </li>
                                                    <li>
                                                        <a href="properties-map-leftside-grid.html">
                                                            Map Grid 1
                              </a>
                                                    </li>
                                                    <li>
                                                        <a href="properties-map-rightside-grid.html">
                                                            Map Grid 2
                              </a>
                                                    </li>
                                                    <li>
                                                        <a href="properties-map-full.html">
                                                            Map FullWidth
                              </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown-submenu">
                                                <a tabIndex={0}>Property Detail</a>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <a href="properties-details.html">
                                                            Property Detail 1
                              </a>
                                                    </li>
                                                    <li>
                                                        <a href="properties-details-2.html">
                                                            Property Detail 2
                              </a>
                                                    </li>
                                                    <li>
                                                        <a href="properties-details-3.html">
                                                            Property Detail 3
                              </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a
                                            tabIndex={0}
                                            data-toggle="dropdown"
                                            data-submenu
                                            aria-expanded="false"
                                        >
                                            Agents<span className="caret" />
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a href="agent-listing-grid.html">Agent grid</a>
                                            </li>
                                            <li>
                                                <a href="agent-listing-grid-sidebar.html">
                                                    Agent Grid sidebarbar
                          </a>
                                            </li>
                                            <li>
                                                <a href="agent-listing-row.html">Agent list</a>
                                            </li>
                                            <li>
                                                <a href="agent-listing-row-sidebar.html">
                                                    Agent List Sidebarbar
                          </a>
                                            </li>
                                            <li>
                                                <a href="agent-single.html">Agent Detail</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown mega-dropdown">
                                        <a
                                            href="#"
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
                                                        <a onClick={this.onSubmitProperty}>Submit Property</a>
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
                                            tabIndex={0}
                                            data-toggle="dropdown"
                                            data-submenu
                                            aria-expanded="false"
                                        >
                                            Blog<span className="caret" />
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li className="dropdown-submenu">
                                                <a tabIndex={0}>Classic</a>
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
                                                <a tabIndex={0}>Columns</a>
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
                                                <a tabIndex={0}>Blog Details</a>
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
                                    <li>
                                        <a onClick={this.onSubmitProperty} className="button">
                                            Submit Property
                      </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </header>
            </div>


        );
    }
}

export default (withRouter(MainHeader));