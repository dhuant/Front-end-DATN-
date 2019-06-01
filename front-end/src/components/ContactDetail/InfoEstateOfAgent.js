import React, { Component } from 'react';

class InfoEstateOfAgent extends Component {
    render() {
        return (
            <div>
                <div className="property clearfix wow fadeInUp delay-03s" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                    <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12 col-pad">
                        {/* Property img */}
                        <div className="property-img">
                            <div className="property-tag button alt featured">Featured</div>
                            <div className="property-tag button sale">For Sale</div>
                            <div className="property-price">$150,000</div>
                            <img src="img/properties/properties-list-1.jpg" alt="fp-list" className="img-responsive hp-1" />
                            <div className="property-overlay">
                                <a href="true" className="overlay-link">
                                    <i className="fa fa-link" />
                                </a>

                                <div className="property-magnify-gallery">
                                    <a href="img/properties/properties-1.jpg" className="overlay-link">
                                        <i className="fa fa-expand" />
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12 property-content ">
                        {/* title */}
                        <h1 className="title">
                            <a href="true">Beautiful Single Home</a>
                        </h1>
                        <p>Mô tả</p>
                        {/* Property address */}
                        <h6 style={{fontSize:'13px'}}>
                            <b>Địa chỉ:</b> Hồ Chí Minh
                        </h6>
                        <h6 style={{fontSize:'13px'}}>
                            <b>Diện tích:</b> 30m2
                        </h6>
                        
                        {/* Property footer */}
                        <div className="property-footer">
                            <span className="left">
                                <a href="true"><i className="fa fa-user" />Jhon Doe</a>
                            </span>
                            <span className="right">
                                <i className="fa fa-calendar" />5 Days ago
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default InfoEstateOfAgent;