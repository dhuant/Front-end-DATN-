import React, { Component } from 'react';

class SidebarAgentDetail extends Component {
    render() {
        return (
            <div>
                <div className="sidebar">
                    <div className="sidebar-widget contact-1">
                        <div className="main-title-2">
                            <h1><span>Contact</span> Agent</h1>
                        </div>
                        <div className="contact-form">
                            <form id="agent_form" action="http://themevessel-item.s3-website-us-east-1.amazonaws.com/nest/index.html" method="GET" encType="multipart/form-data">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group your-name">
                                            <input type="email" name="name" className="input-text" placeholder="Your Name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group your-email">
                                            <input type="email" name="email" className="input-text" placeholder="Your Email" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group your-phone">
                                            <input type="text" name="phone" className="input-text" placeholder="Your Phone" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group message">
                                            <textarea className="input-text" name="message" placeholder=" Message" defaultValue={""} />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <button type="submit" className="button-md button-theme btn-block">Send Message</button>
                                    </div>
                                </div>
                            </form>
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