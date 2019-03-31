import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SingleEstateListView extends Component {
    render() {
        let { estate } = this.props;

        return (
            <Link to={`/properties/${estate._id}`}>
                <div>
                    <div className="property clearfix wow fadeInUp delay-03s">
                        <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12 col-pad">
                            {/* Property img */}
                            <div className="property-img">
                                <div className="property-tag button alt featured">Featured</div>
                                <div className="property-tag button sale">For Sale</div>
                                <div className="property-price">{estate.price}$</div>
                                <img src="img/properties/properties-list-1.jpg" alt="fp-list" className="img-responsive hp-1" />
                                <div className="property-overlay">
                                    <a href="properties-details.html" className="overlay-link">
                                        <i className="fa fa-link" />
                                    </a>
                                    <a className="overlay-link property-video" title="Lexus GS F">
                                        <i className="fa fa-video-camera" />
                                    </a>
                                    <div className="property-magnify-gallery">
                                        <a href="img/properties/properties-1.jpg" className="overlay-link">
                                            <i className="fa fa-expand" />
                                        </a>
                                        <a href="img/properties/properties-2.jpg" className="hidden" />
                                        <a href="img/properties/properties-3.jpg" className="hidden" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12 property-content ">
                            {/* title */}
                            <h1 className="title">
                                <a href="properties-details.html">{estate.name}</a>
                            </h1>
                            {/* Property address */}
                            <h3 className="property-address">
                                <a href="properties-details.html">
                                    <i className="fa fa-map-marker" />{estate.address}
                            </a>
                            </h3>
                            {/* Facilities List */}
                            <ul className="facilities-list clearfix">
                                <li>
                                    <i className="flaticon-square-layouting-with-black-square-in-east-area" />
                                    <span>{estate.area} sq ft</span>
                                </li>
                                <li>
                                    <i className="flaticon-bed" />
                                    <span>3 Beds</span>
                                </li>
                                <li>
                                    <i className="flaticon-monitor" />
                                    <span>TV </span>
                                </li>
                                <li>
                                    <i className="flaticon-holidays" />
                                    <span> 2 Baths</span>
                                </li>
                                <li>
                                    <i className="flaticon-vehicle" />
                                    <span>1 Garage</span>
                                </li>
                                <li>
                                    <i className="flaticon-building" />
                                    <span> 3 Balcony</span>
                                </li>
                            </ul>
                            {/* Property footer */}
                            <div className="property-footer">
                                <span className="left">
                                    <a href="#"><i className="fa fa-user" />{estate.investor}</a>
                                </span>
                                <span className="right">
                                    <i className="fa fa-calendar" />5 Days ago
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}
