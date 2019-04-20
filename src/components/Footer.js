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
                                        <h1>LIÊN HỆ VỚI CHÚNG TÔI</h1>
                                    </div>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the
                                        industry's printing and
            </p>
                                    <ul className="personal-info">
                                        <li>
                                            <i className="fa fa-map-marker" />
                                            Địa chỉ: Trường Đại học Khoa học Tự nhiên, ĐHQG-HCM
              </li>
                                        <li>
                                            <i className="fa fa-envelope" />
                                            Email:<a href="mailto:tungmazdatic@gmail.com">
                                                tungmazdatic@gmail.com
                </a>
                                        </li>
                                        <li>
                                            <i className="fa fa-phone" />
                                            Số điện thoại:{" "}
                                            <a href="tel:+84 989 871 786">0989 871 786</a>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                            {/* Links */}
                            <div className="col-lg-2 col-md-2 col-sm-6 col-xs-12">
                                <div className="footer-item">
                                    <div className="main-title-2">
                                        <h1>LIÊN KẾT</h1>
                                    </div>
                                    <ul className="links">
                                        <li>
                                            <a href="index.html">Trang chủ</a>
                                        </li>
                                        <li>
                                            <a href="about.html">Về chúng tôi</a>
                                        </li>
                                        <li>
                                            <a href="contact.html">Liên hệ</a>
                                        </li>
                                        <li>
                                            <a href="blog-single-sidebar-right.html">Blog</a>
                                        </li>
                                        <li>
                                            <a href="blog-single-sidebar-right.html">Dịch vụ</a>
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
                                                    THEO DÕI NHỮNG THÔNG TIN MỚI NHẤT
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