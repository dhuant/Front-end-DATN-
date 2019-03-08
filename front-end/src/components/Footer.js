import React from 'react';

const Footer = () => {
    return (
        <div>
            {
                /* Footer start */
            }
            ;<footer className="main-footer clearfix">
                <div className="container">
                    {/* Footer info*/}
                    <div className="footer-info">
                        <div className="row">
                            {/* About us */}
                            <div className="col-lg-4 col-md-3 col-sm-6 col-xs-12">
                                <div className="footer-item">
                                    <div className="main-title-2">
                                        <h1>Contact Us</h1>
                                    </div>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the
                                        industry's printing and
            </p>
                                    <ul className="personal-info">
                                        <li>
                                            <i className="fa fa-map-marker" />
                                            Address: 20/F Green Road, Dhanmondi, Dhaka
              </li>
                                        <li>
                                            <i className="fa fa-envelope" />
                                            Email:<a href="mailto:sales@hotelempire.com">
                                                info@themevessel.com
                </a>
                                        </li>
                                        <li>
                                            <i className="fa fa-phone" />
                                            Phone:{" "}
                                            <a href="tel:+55-417-634-7071">+55 4XX-634-7071</a>
                                        </li>
                                        <li>
                                            <i className="fa fa-fax" />
                                            Fax: +55 4XX-634-7071
              </li>
                                    </ul>
                                </div>
                            </div>
                            {/* Links */}
                            <div className="col-lg-2 col-md-2 col-sm-6 col-xs-12">
                                <div className="footer-item">
                                    <div className="main-title-2">
                                        <h1>Links</h1>
                                    </div>
                                    <ul className="links">
                                        <li>
                                            <a href="index.html">Home</a>
                                        </li>
                                        <li>
                                            <a href="about.html">About Us</a>
                                        </li>
                                        <li>
                                            <a href="contact.html">Contact Us</a>
                                        </li>
                                        <li>
                                            <a href="blog-single-sidebar-right.html">Blog</a>
                                        </li>
                                        <li>
                                            <a href="blog-single-sidebar-right.html">Services</a>
                                        </li>
                                        <li>
                                            <a href="properties-list-rightside.html">
                                                properties Listing
                </a>
                                        </li>
                                        <li>
                                            <a href="properties-grid-rightside.html">
                                                properties Grid
                </a>
                                        </li>
                                        <li>
                                            <a href="properties-details.html">
                                                properties Details
                </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* Recent cars */}
                            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                                <div className="footer-item popular-posts">
                                    <div className="main-title-2">
                                        <h1>Popular Posts</h1>
                                    </div>
                                    <div className="media">
                                        <div className="media-left">
                                            <img
                                                className="media-object"
                                                src="img/properties/small-properties-1.jpg"
                                                alt="small-properties-1"
                                            />
                                        </div>
                                        <div className="media-body">
                                            <h3 className="media-heading">
                                                <a href="properties-details.html">
                                                    Sweet Family Home
                  </a>
                                            </h3>
                                            <p>February 27, 2018</p>
                                            <div className="price">$734,000</div>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <div className="media-left">
                                            <img
                                                className="media-object"
                                                src="img/properties/small-properties-2.jpg"
                                                alt="small-properties-2"
                                            />
                                        </div>
                                        <div className="media-body">
                                            <h3 className="media-heading">
                                                <a href="properties-details.html">
                                                    Modern Family Home
                  </a>
                                            </h3>
                                            <p>February 27, 2018</p>
                                            <div className="price">$734,000</div>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <div className="media-left">
                                            <img
                                                className="media-object"
                                                src="img/properties/small-properties-3.jpg"
                                                alt="small-properties-3"
                                            />
                                        </div>
                                        <div className="media-body">
                                            <h3 className="media-heading">
                                                <a href="properties-details.html">
                                                    Beautiful Single Home
                  </a>
                                            </h3>
                                            <p>February 27, 2018</p>
                                            <div className="price">$734,000</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Subscribe */}
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="footer-item">
                                    <div className="main-title-2">
                                        <h1>Subscribe</h1>
                                    </div>
                                    <div className="newsletter clearfix">
                                        <p>
                                            Excepteur sint occaecat cupidatat non proident, sunt
                                            in culpa qui officia deserunt mollit anim id
              </p>
                                        <form action="#" method="post">
                                            <div className="form-group">
                                                <input
                                                    className="nsu-field btn-block"
                                                    id="nsu-email-0"
                                                    type="text"
                                                    name="email"
                                                    placeholder="Enter your Email Address"
                                                    required
                                                />
                                            </div>
                                            <div className="form-group mb-0">
                                                <button
                                                    type="submit"
                                                    className="button-sm button-theme btn-block"
                                                >
                                                    Subscribe
                  </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {
                /* Footer end */
            }

        </div>
    );
};

export default Footer;