import React, { Component } from 'react';

class SidebarAgentDetail extends Component {
    render() {
        return (
            <div>
                <div className="sidebar">
                    <div className="sidebar-widget contact-1">
                        <div style={{ width: '100%' }}>
                            <a href="https://thegrandmanhattan.com.vn/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img style={{ width: '100%' }} src='/images/grand.jpg' alt="Ads" />
                            </a>
                        </div>
                    </div>
                    {/* Popular posts start */}
                    <div className="sidebar-widget popular-posts">
                        <div className="main-title-2">
                            <h1><span>Recent</span> Properties</h1>
                        </div>
                        <div className="media">
                            <div className="media-left">
                                <img className="media-object" src="img/properties/small-properties-1.jpg" alt="small-properties-1" />
                            </div>
                            <div className="media-body">
                                <h3 className="media-heading">
                                    <a href="properties-details.html">Modern Family Home</a>
                                </h3>
                                <p>February 27, 2018</p>
                                <div className="price">
                                    $734,000
                                                </div>
                            </div>
                        </div>
                        <div className="media">
                            <div className="media-left">
                                <img className="media-object" src="img/properties/small-properties-2.jpg" alt="small-properties-2" />
                            </div>
                            <div className="media-body">
                                <h3 className="media-heading">
                                    <a href="properties-details.html">Modern Family Home</a>
                                </h3>
                                <p>February 27, 2018</p>
                                <div className="price">
                                    $734,000
                                                </div>
                            </div>
                        </div>
                        <div className="media">
                            <div className="media-left">
                                <img className="media-object" src="img/properties/small-properties-3.jpg" alt="small-properties-3" />
                            </div>
                            <div className="media-body">
                                <h3 className="media-heading">
                                    <a href="properties-details.html">Beautiful Single Home</a>
                                </h3>
                                <p>February 27, 2018</p>
                                <div className="price">
                                    $734,000
                                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Category posts start */}
                    <div className="sidebar-widget category-posts">
                        <div className="main-title-2">
                            <h1><span>popular</span> Category</h1>
                        </div>
                        <ul className="list-unstyled list-cat">
                            <li><a href="true">Single Family </a> <span>(45)</span></li>
                            <li><a href="true">Apartment</a> <span>(21)</span></li>
                            <li><a href="true">Condo </a> <span>(23)</span></li>
                            <li><a href="true">Multi Family </a> <span>(19)</span></li>
                            <li><a href="true">Villa </a> <span>(19)</span></li>
                            <li><a href="true">Other</a> <span>(22)</span></li>
                        </ul>
                    </div>
                    {/* Social media start */}
                    <div className="social-media sidebar-widget clearfix">
                        {/* Main Title 2 */}
                        <div className="main-title-2">
                            <h1><span>Social</span> Media</h1>
                        </div>
                        {/* Social list */}
                        <ul className="social-list">
                            <li><a href="true" className="facebook-bg"><i className="fa fa-facebook" /></a></li>
                            <li><a href="true" className="twitter-bg"><i className="fa fa-twitter" /></a></li>
                            <li><a href="true" className="linkedin-bg"><i className="fa fa-linkedin" /></a></li>
                            <li><a href="true" className="google-bg"><i className="fa fa-google-plus" /></a></li>
                            <li><a href="true" className="rss-bg"><i className="fa fa-rss" /></a></li>
                        </ul>
                    </div>
                    {/* Tags box */}
                    <div className="sidebar-widget tags-box mb-0">
                        <div className="main-title-2">
                            <h1><span>popular</span> Tags</h1>
                        </div>
                        <ul className="tags">
                            <li><a href="true">Image</a></li>
                            <li><a href="true">Features</a></li>
                            <li><a href="true">Typography</a></li>
                            <li><a href="true">Gallery</a></li>
                            <li><a href="true">Slideshow</a></li>
                            <li><a href="true">Post Formats</a></li>
                            <li><a href="true">Sellers</a></li>
                            <li><a href="true">WooCommerce</a></li>
                            <li><a href="true">Shortcodes</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default SidebarAgentDetail;