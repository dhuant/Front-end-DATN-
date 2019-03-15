/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainHeader from '../components/MainHeader';
import { withRouter } from 'react-router-dom';
class Home extends Component {
    onGoToMap = (e) => {
        e.preventDefault();
        this.props.history.push("/maps");
    }
    onProperties = (e) => {
        e.preventDefault();
        this.props.history.push("/properties");
    }
    render() {
        return (
            <div>
                <Header />
                <MainHeader />

                {
                    /* Banner start */
                }
                <div className="banner">
                    <div
                        id="carousel-example-generic"
                        className="carousel slide"
                        data-ride="carousel"
                    >
                        {/* Wrapper for slides */}
                        <div className="carousel-inner" role="listbox">
                            <div className="item banner-max-height active">
                                <img
                                    src="img/banner/banner-slider-1.jpg"
                                    alt="banner-slider-1"
                                />
                                <div className="carousel-caption banner-slider-inner">
                                    <div className="banner-content">
                                        <h1 data-animation="animated fadeInDown delay-05s">
                                            <span>Find your </span> Dream House
                                        </h1>
                                        <p data-animation="animated fadeInUp delay-1s">
                                            Lorem ipsum dolor sit amet, conconsectetuer adipiscing
                                            elit Lorem ipsum dolor sit amet, conconsectetuer
                                        </p>
                                        <a
                                            onClick={this.onGoToMap}
                                            className="btn button-md button-theme"
                                            data-animation="animated fadeInUp delay-15s"
                                        >
                                            Go to Maps
                                        </a>
                                        <a
                                            className="btn button-md border-button-theme"
                                            data-animation="animated fadeInUp delay-15s"
                                        >
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="item banner-max-height">
                                <img
                                    src="img/banner/banner-slider-2.jpg"
                                    alt="banner-slider-2"
                                />
                                <div className="carousel-caption banner-slider-inner">
                                    <div className="banner-content">
                                        <h1 data-animation="animated fadeInDown delay-1s">
                                            <span>Sweet Home For</span> Small Family
                                        </h1>
                                        <p data-animation="animated fadeInUp delay-05s">
                                            Lorem ipsum dolor sit amet, conconsectetuer adipiscing
                                            elit Lorem ipsum dolor sit amet, conconsectetuer
                                        </p>
                                        <a
                                            className="btn button-md button-theme"
                                            data-animation="animated fadeInUp delay-15s"
                                        >
                                            Get Started Now
                                        </a>
                                        <a
                                            className="btn button-md border-button-theme"
                                            data-animation="animated fadeInUp delay-15s"
                                        >
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="item banner-max-height">
                                <img
                                    src="img/banner/banner-slider-3.jpg"
                                    alt="banner-slider-3"
                                />
                                <div className="carousel-caption banner-slider-inner">
                                    <div className="banner-content">
                                        <h1 data-animation="animated fadeInLeft delay-05s">
                                            <span>Best Place To</span> Find Home
                                        </h1>
                                        <p data-animation="animated fadeInLeft delay-1s">
                                            Lorem ipsum dolor sit amet, conconsectetuer adipiscing
                                            elit Lorem ipsum dolor sit amet, conconsectetuer
                                        </p>
                                        <a

                                            className="btn button-md button-theme"
                                            data-animation="animated fadeInLeft delay-15s"
                                        >
                                            Get Started Now
                                        </a>
                                        <a

                                            className="btn button-md border-button-theme"
                                            data-animation="animated fadeInLeft delay-20s"
                                        >
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Controls */}
                        <a
                            className="left carousel-control"
                            href="#carousel-example-generic"
                            role="button"
                            data-slide="prev"
                        >
                            <span className="slider-mover-left" aria-hidden="true">
                                <i className="fa fa-angle-left" />
                            </span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a
                            className="right carousel-control"
                            href="#carousel-example-generic"
                            role="button"
                            data-slide="next"
                        >
                            <span className="slider-mover-right" aria-hidden="true">
                                <i className="fa fa-angle-right" />
                            </span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                {
                    /* Banner end */
                }

                <div>
                    {/* Search area start */}
                    <div className="search-area">
                        <div className="container">
                            <div className="search-area-inner">
                                <div className="search-contents ">
                                    <form method="GET">
                                        <div className="row">
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                                <div className="form-group">
                                                    <select
                                                        className="selectpicker search-fields"
                                                        name="area-from"
                                                        data-live-search="true"
                                                        data-live-search-placeholder="Search value"
                                                    >
                                                        <option>Area From</option>
                                                        <option>1000</option>
                                                        <option>800</option>
                                                        <option>600</option>
                                                        <option>400</option>
                                                        <option>200</option>
                                                        <option>100</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                                <div className="form-group">
                                                    <select
                                                        className="selectpicker search-fields"
                                                        name="property-status"
                                                        data-live-search="true"
                                                        data-live-search-placeholder="Search value"
                                                    >
                                                        <option>Property Status</option>
                                                        <option>For Sale</option>
                                                        <option>For Rent</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                                <div className="form-group">
                                                    <select
                                                        className="selectpicker search-fields"
                                                        name="location"
                                                        data-live-search="true"
                                                        data-live-search-placeholder="Search value"
                                                    >
                                                        <option>Location</option>
                                                        <option>United States</option>
                                                        <option>United Kingdom</option>
                                                        <option>American Samoa</option>
                                                        <option>Belgium</option>
                                                        <option>Cameroon</option>
                                                        <option>Canada</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                                <div className="form-group">
                                                    <select
                                                        className="selectpicker search-fields"
                                                        name="property-types"
                                                        data-live-search="true"
                                                        data-live-search-placeholder="Search value"
                                                    >
                                                        <option>Property Types</option>
                                                        <option>Residential</option>
                                                        <option>Commercial</option>
                                                        <option>Land</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                                <div className="form-group">
                                                    <select
                                                        className="selectpicker search-fields"
                                                        name="bedrooms"
                                                        data-live-search="true"
                                                        data-live-search-placeholder="Search value"
                                                    >
                                                        <option>Bedrooms</option>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                        <option>6</option>
                                                        <option>7</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                                <div className="form-group">
                                                    <select
                                                        className="selectpicker search-fields"
                                                        name="bathrooms"
                                                        data-live-search="true"
                                                        data-live-search-placeholder="Search value"
                                                    >
                                                        <option>Bathrooms</option>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                        <option>6</option>
                                                        <option>7</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                                <div className="form-group">
                                                    <div className="range-slider">
                                                        <div
                                                            data-min={0}
                                                            data-max={150000}
                                                            data-unit="USD"
                                                            data-min-name="min_price"
                                                            data-max-name="max_price"
                                                            className="range-slider-ui ui-slider"
                                                            aria-disabled="false"
                                                        />
                                                        <div className="clearfix" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 ">
                                                <div className="form-group">
                                                    <button className="search-button">Search</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Search area start */}
                    {/* Featured properties start */}
                    <div className="content-area featured-properties">
                        <div className="container">
                            {/* Main title */}
                            <div className="main-title">
                                <h1>Featured Properties</h1>
                            </div>
                            <ul className="list-inline-listing filters filters-listing-navigation">
                                <li
                                    className="active btn filtr-button filtr"
                                    data-filter="all"
                                >
                                    All
        </li>
                                <li
                                    data-filter={1}
                                    className="btn btn-inline filtr-button filtr"
                                >
                                    House
        </li>
                                <li
                                    data-filter={2}
                                    className="btn btn-inline filtr-button filtr"
                                >
                                    Office
        </li>
                                <li
                                    data-filter={3}
                                    className="btn btn-inline filtr-button filtr"
                                >
                                    Apartment
        </li>
                                <li
                                    data-filter={4}
                                    className="btn btn-inline filtr-button filtr"
                                >
                                    Residential
        </li>
                            </ul>
                            <div className="row">
                                <div className="filtr-container">
                                    <div
                                        className="col-lg-4 col-md-4 col-sm-6 col-xs-12  filtr-item"
                                        data-category="1, 2, 3"
                                    >
                                        <div className="property">
                                            {/* Property img */}
                                            <div className="property-img">
                                                <div className="property-tag button alt featured">
                                                    Featured
                </div>
                                                <div className="property-tag button sale">
                                                    For Sale
                </div>
                                                <div className="property-price">$150,000</div>
                                                <img
                                                    src="img/properties/properties-1.jpg"
                                                    alt="fp"
                                                    className="img-responsive"
                                                />
                                                <div className="property-overlay">
                                                    <a
                                                        href="properties-details.html"
                                                        className="overlay-link"
                                                    >
                                                        <i className="fa fa-link" />
                                                    </a>
                                                    <a
                                                        className="overlay-link property-video"
                                                        title="Lexus GS F"
                                                    >
                                                        <i className="fa fa-video-camera" />
                                                    </a>
                                                    <div className="property-magnify-gallery">
                                                        <a
                                                            href="img/properties/properties-1.jpg"
                                                            className="overlay-link"
                                                        >
                                                            <i className="fa fa-expand" />
                                                        </a>
                                                        <a
                                                            href="img/properties/properties-2.jpg"
                                                            className="hidden"
                                                        />
                                                        <a
                                                            href="img/properties/properties-3.jpg"
                                                            className="hidden"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Property content */}
                                            <div className="property-content">
                                                {/* title */}
                                                <h1 className="title">
                                                    <a onClick={this.onProperties} href="properties-details.html">
                                                        Beautiful Single Home
                  </a>
                                                </h1>
                                                {/* Property address */}
                                                <h3 className="property-address">
                                                    <a href="properties-details.html">
                                                        <i className="fa fa-map-marker" />123 Kathal St.
                                                        Tampa City,
                  </a>
                                                </h3>
                                                {/* Facilities List */}
                                                <ul className="facilities-list clearfix">
                                                    <li>
                                                        <i className="flaticon-square-layouting-with-black-square-in-east-area" />
                                                        <span>4800 sq ft</span>
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
                                                        <a  >
                                                            <i className="fa fa-user" />Jhon Doe
                    </a>
                                                    </span>
                                                    <span className="right">
                                                        <i className="fa fa-calendar" />5 Days ago
                  </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-lg-4 col-md-4 col-sm-6 col-xs-12  filtr-item"
                                        data-category={1}
                                    >
                                        <div className="property">
                                            {/* Property img */}
                                            <div className="property-img">
                                                <div className="property-tag button alt featured">
                                                    Featured
                </div>
                                                <div className="property-tag button sale">
                                                    For Sale
                </div>
                                                <div className="property-price">$150,000</div>
                                                <img
                                                    src="img/properties/properties-2.jpg"
                                                    alt="fp"
                                                    className="img-responsive"
                                                />
                                                <div className="property-overlay">
                                                    <a
                                                        href="properties-details.html"
                                                        className="overlay-link"
                                                    >
                                                        <i className="fa fa-link" />
                                                    </a>
                                                    <a
                                                        className="overlay-link property-video"
                                                        title="Lexus GS F"
                                                    >
                                                        <i className="fa fa-video-camera" />
                                                    </a>
                                                    <div className="property-magnify-gallery">
                                                        <a
                                                            href="img/properties/properties-2.jpg"
                                                            className="overlay-link"
                                                        >
                                                            <i className="fa fa-expand" />
                                                        </a>
                                                        <a
                                                            href="img/properties/properties-4.jpg"
                                                            className="hidden"
                                                        />
                                                        <a
                                                            href="img/properties/properties-3.jpg"
                                                            className="hidden"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Property content */}
                                            <div className="property-content">
                                                {/* title */}
                                                <h1 className="title">
                                                    <a href="properties-details.html">
                                                        Modern Family Home
                  </a>
                                                </h1>
                                                {/* Property address */}
                                                <h3 className="property-address">
                                                    <a href="properties-details.html">
                                                        <i className="fa fa-map-marker" />123 Kathal St.
                                                        Tampa City,
                  </a>
                                                </h3>
                                                {/* Facilities List */}
                                                <ul className="facilities-list clearfix">
                                                    <li>
                                                        <i className="flaticon-square-layouting-with-black-square-in-east-area" />
                                                        <span>4800 sq ft</span>
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
                                                        <a  >
                                                            <i className="fa fa-user" />Jhon Doe
                    </a>
                                                    </span>
                                                    <span className="right">
                                                        <i className="fa fa-calendar" />5 Days ago
                  </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-lg-4 col-md-4 col-sm-6 col-xs-12  filtr-item"
                                        data-category="2, 3"
                                    >
                                        <div className="property">
                                            {/* Property img */}
                                            <div className="property-img">
                                                <div className="property-tag button alt featured">
                                                    Featured
                </div>
                                                <div className="property-tag button sale">
                                                    For Sale
                </div>
                                                <div className="property-price">$150,000</div>
                                                <img
                                                    src="img/properties/properties-3.jpg"
                                                    alt="fp"
                                                    className="img-responsive"
                                                />
                                                <div className="property-overlay">
                                                    <a
                                                        href="properties-details.html"
                                                        className="overlay-link"
                                                    >
                                                        <i className="fa fa-link" />
                                                    </a>
                                                    <a
                                                        className="overlay-link property-video"
                                                        title="Lexus GS F"
                                                    >
                                                        <i className="fa fa-video-camera" />
                                                    </a>
                                                    <div className="property-magnify-gallery">
                                                        <a
                                                            href="img/properties/properties-3.jpg"
                                                            className="overlay-link"
                                                        >
                                                            <i className="fa fa-expand" />
                                                        </a>
                                                        <a
                                                            href="img/properties/properties-2.jpg"
                                                            className="hidden"
                                                        />
                                                        <a
                                                            href="img/properties/properties-1.jpg"
                                                            className="hidden"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Property content */}
                                            <div className="property-content">
                                                {/* title */}
                                                <h1 className="title">
                                                    <a href="properties-details.html">
                                                        Sweet Family Home
                  </a>
                                                </h1>
                                                {/* Property address */}
                                                <h3 className="property-address">
                                                    <a href="properties-details.html">
                                                        <i className="fa fa-map-marker" />123 Kathal St.
                                                        Tampa City,
                  </a>
                                                </h3>
                                                {/* Facilities List */}
                                                <ul className="facilities-list clearfix">
                                                    <li>
                                                        <i className="flaticon-square-layouting-with-black-square-in-east-area" />
                                                        <span>4800 sq ft</span>
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
                                                        <a>
                                                            <i className="fa fa-user" />Jhon Doe
                    </a>
                                                    </span>
                                                    <span className="right">
                                                        <i className="fa fa-calendar" />5 Days ago
                  </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-lg-4 col-md-4 col-sm-6 col-xs-12  filtr-item"
                                        data-category="3, 4"
                                    >
                                        <div className="property">
                                            {/* Property img */}
                                            <div className="property-img">
                                                <div className="property-tag button alt featured">
                                                    Featured
                </div>
                                                <div className="property-tag button sale">
                                                    For Sale
                </div>
                                                <div className="property-price">$150,000</div>
                                                <img
                                                    src="img/properties/properties-4.jpg"
                                                    alt="fp"
                                                    className="img-responsive"
                                                />
                                                <div className="property-overlay">
                                                    <a
                                                        href="properties-details.html"
                                                        className="overlay-link"
                                                    >
                                                        <i className="fa fa-link" />
                                                    </a>
                                                    <a
                                                        className="overlay-link property-video"
                                                        title="Lexus GS F"
                                                    >
                                                        <i className="fa fa-video-camera" />
                                                    </a>
                                                    <div className="property-magnify-gallery">
                                                        <a
                                                            href="img/properties/properties-4.jpg"
                                                            className="overlay-link"
                                                        >
                                                            <i className="fa fa-expand" />
                                                        </a>
                                                        <a
                                                            href="img/properties/properties-2.jpg"
                                                            className="hidden"
                                                        />
                                                        <a
                                                            href="img/properties/properties-3.jpg"
                                                            className="hidden"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Property content */}
                                            <div className="property-content">
                                                {/* title */}
                                                <h1 className="title">
                                                    <a href="properties-details.html">Big Head House</a>
                                                </h1>
                                                {/* Property address */}
                                                <h3 className="property-address">
                                                    <a href="properties-details.html">
                                                        <i className="fa fa-map-marker" />123 Kathal St.
                                                        Tampa City,
                  </a>
                                                </h3>
                                                {/* Facilities List */}
                                                <ul className="facilities-list clearfix">
                                                    <li>
                                                        <i className="flaticon-square-layouting-with-black-square-in-east-area" />
                                                        <span>4800 sq ft</span>
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
                                                        <a  >
                                                            <i className="fa fa-user" />Jhon Doe
                    </a>
                                                    </span>
                                                    <span className="right">
                                                        <i className="fa fa-calendar" />5 Days ago
                  </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-lg-4 col-md-4 col-sm-6 col-xs-12  filtr-item"
                                        data-category={4}
                                    >
                                        <div className="property">
                                            {/* Property img */}
                                            <div className="property-img">
                                                <div className="property-tag button alt featured">
                                                    Featured
                </div>
                                                <div className="property-tag button sale">
                                                    For Sale
                </div>
                                                <div className="property-price">$150,000</div>
                                                <img
                                                    src="img/properties/properties-5.jpg"
                                                    alt="fp"
                                                    className="img-responsive"
                                                />
                                                <div className="property-overlay">
                                                    <a
                                                        href="properties-details.html"
                                                        className="overlay-link"
                                                    >
                                                        <i className="fa fa-link" />
                                                    </a>
                                                    <a
                                                        className="overlay-link property-video"
                                                        title="Lexus GS F"
                                                    >
                                                        <i className="fa fa-video-camera" />
                                                    </a>
                                                    <div className="property-magnify-gallery">
                                                        <a
                                                            href="img/properties/properties-5.jpg"
                                                            className="overlay-link"
                                                        >
                                                            <i className="fa fa-expand" />
                                                        </a>
                                                        <a
                                                            href="img/properties/properties-2.jpg"
                                                            className="hidden"
                                                        />
                                                        <a
                                                            href="img/properties/properties-3.jpg"
                                                            className="hidden"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Property content */}
                                            <div className="property-content">
                                                {/* title */}
                                                <h1 className="title">
                                                    <a href="properties-details.html">Park Avenue</a>
                                                </h1>
                                                {/* Property address */}
                                                <h3 className="property-address">
                                                    <a href="properties-details.html">
                                                        <i className="fa fa-map-marker" />123 Kathal St.
                                                        Tampa City,
                  </a>
                                                </h3>
                                                {/* Facilities List */}
                                                <ul className="facilities-list clearfix">
                                                    <li>
                                                        <i className="flaticon-square-layouting-with-black-square-in-east-area" />
                                                        <span>4800 sq ft</span>
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
                                                        <a >
                                                            <i className="fa fa-user" />Jhon Doe
                    </a>
                                                    </span>
                                                    <span className="right">
                                                        <i className="fa fa-calendar" />5 Days ago
                  </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-lg-4 col-md-4 col-sm-6 col-xs-12  filtr-item"
                                        data-category={1}
                                    >
                                        <div className="property">
                                            {/* Property img */}
                                            <div className="property-img">
                                                <div className="property-tag button alt featured">
                                                    Featured
                </div>
                                                <div className="property-tag button sale">
                                                    For Sale
                </div>
                                                <div className="property-price">$150,000</div>
                                                <img
                                                    src="img/properties/properties-6.jpg"
                                                    alt="fp"
                                                    className="img-responsive"
                                                />
                                                <div className="property-overlay">
                                                    <a
                                                        href="properties-details.html"
                                                        className="overlay-link"
                                                    >
                                                        <i className="fa fa-link" />
                                                    </a>
                                                    <a
                                                        className="overlay-link property-video"
                                                        title="Lexus GS F"
                                                    >
                                                        <i className="fa fa-video-camera" />
                                                    </a>
                                                    <div className="property-magnify-gallery">
                                                        <a
                                                            href="img/properties/properties-6.jpg"
                                                            className="overlay-link"
                                                        >
                                                            <i className="fa fa-expand" />
                                                        </a>
                                                        <a
                                                            href="img/properties/properties-2.jpg"
                                                            className="hidden"
                                                        />
                                                        <a
                                                            href="img/properties/properties-3.jpg"
                                                            className="hidden"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Property content */}
                                            <div className="property-content">
                                                {/* title */}
                                                <h1 className="title">
                                                    <a href="properties-details.html">Masons Villas</a>
                                                </h1>
                                                {/* Property address */}
                                                <h3 className="property-address">
                                                    <a href="properties-details.html">
                                                        <i className="fa fa-map-marker" />123 Kathal St.
                                                        Tampa City,
                  </a>
                                                </h3>
                                                {/* Facilities List */}
                                                <ul className="facilities-list clearfix">
                                                    <li>
                                                        <i className="flaticon-square-layouting-with-black-square-in-east-area" />
                                                        <span>4800 sq ft</span>
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
                                                        <a >
                                                            <i className="fa fa-user" />Jhon Doe
                    </a>
                                                    </span>
                                                    <span className="right">
                                                        <i className="fa fa-calendar" />5 Days ago
                  </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Featured properties end */}
                </div>
                {
                    /* Recently properties start */
                }
                ;<div className="mb-70 recently-properties chevron-icon">
                    <div className="container">
                        {/* Main title */}
                        <div className="main-title">
                            <h1>
                                <span>Recently</span> Properties
      </h1>
                        </div>
                        <div className="row">
                            <div className="carousel our-partners slide" id="ourPartners2">
                                <div className="col-lg-12 mrg-btm-30">
                                    <a
                                        className="right carousel-control"
                                        href="#ourPartners2"
                                        data-slide="prev"
                                    >
                                        <i className="fa fa-chevron-left icon-prev" />
                                    </a>
                                    <a
                                        className="right carousel-control"
                                        href="#ourPartners2"
                                        data-slide="next"
                                    >
                                        <i className="fa fa-chevron-right icon-next" />
                                    </a>
                                </div>
                                <div className="carousel-inner">
                                    <div className="item active">
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                            {/* Property 2 start */}
                                            <div className="property-2">
                                                {/* Property img */}
                                                <div className="property-img">
                                                    <div className="featured">Featured</div>
                                                    <div className="price-ratings">
                                                        <div className="price">$150,000</div>
                                                        <div className="ratings">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star-o" />
                                                        </div>
                                                    </div>
                                                    <img
                                                        src="img/properties/properties-4.jpg"
                                                        alt="rp"
                                                        className="img-responsive"
                                                    />
                                                    <div className="property-overlay">
                                                        <a
                                                            href="properties-details.html"
                                                            className="overlay-link"
                                                        >
                                                            <i className="fa fa-link" />
                                                        </a>
                                                        <a
                                                            className="overlay-link property-video"
                                                            title="Lexus GS F"
                                                        >
                                                            <i className="fa fa-video-camera" />
                                                        </a>
                                                        <div className="property-magnify-gallery">
                                                            <a
                                                                href="img/properties/properties-4.jpg"
                                                                className="overlay-link"
                                                            >
                                                                <i className="fa fa-expand" />
                                                            </a>
                                                            <a
                                                                href="img/properties/properties-2.jpg"
                                                                className="hidden"
                                                            />
                                                            <a
                                                                href="img/properties/properties-3.jpg"
                                                                className="hidden"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* content */}
                                                <div className="content">
                                                    {/* title */}
                                                    <h4 className="title">
                                                        <a href="properties-details.html">
                                                            Big Head House
                    </a>
                                                    </h4>
                                                    {/* Property address */}
                                                    <h3 className="property-address">
                                                        <a href="properties-details.html">
                                                            <i className="fa fa-map-marker" />123 Kathal St.
                                                            Tampa City,
                    </a>
                                                    </h3>
                                                </div>
                                                {/* Facilities List */}
                                                <ul className="facilities-list clearfix">
                                                    <li>
                                                        <i className="flaticon-square-layouting-with-black-square-in-east-area" />
                                                        <span>4800 sq ft</span>
                                                    </li>
                                                    <li>
                                                        <i className="flaticon-bed" />
                                                        <span>3</span>
                                                    </li>
                                                    <li>
                                                        <i className="flaticon-holidays" />
                                                        <span>2</span>
                                                    </li>
                                                    <li>
                                                        <i className="flaticon-vehicle" />
                                                        <span>1</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* Property 2 end */}
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                            {/* Property 2 start */}
                                            <div className="property-2">
                                                {/* Property img */}
                                                <div className="property-img">
                                                    <div className="featured">Featured</div>
                                                    <div className="price-ratings">
                                                        <div className="price">$150,000</div>
                                                        <div className="ratings">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star-o" />
                                                        </div>
                                                    </div>
                                                    <img
                                                        src="img/properties/properties-3.jpg"
                                                        alt="rp"
                                                        className="img-responsive"
                                                    />
                                                    <div className="property-overlay">
                                                        <a
                                                            href="properties-details.html"
                                                            className="overlay-link"
                                                        >
                                                            <i className="fa fa-link" />
                                                        </a>

                                                        <a
                                                            href="true"
                                                            className="overlay-link property-video"
                                                            title="Lexus GS F"
                                                        >
                                                            <i className="fa fa-video-camera" />
                                                        </a>
                                                        <div className="property-magnify-gallery">
                                                            <a
                                                                href="img/properties/properties-3.jpg"
                                                                className="overlay-link"
                                                            >
                                                                <i className="fa fa-expand" />
                                                            </a>
                                                            <a
                                                                href="img/properties/properties-2.jpg"
                                                                className="hidden"
                                                            />
                                                            <a
                                                                href="img/properties/properties-5.jpg"
                                                                className="hidden"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* content */}
                                                <div className="content">
                                                    {/* title */}
                                                    <h4 className="title">
                                                        <a href="properties-details.html">
                                                            Masons Villas
                    </a>
                                                    </h4>
                                                    {/* Property address */}
                                                    <h3 className="property-address">
                                                        <a href="properties-details.html">
                                                            <i className="fa fa-map-marker" />123 Kathal St.
                                                            Tampa City,
                    </a>
                                                    </h3>
                                                </div>
                                                {/* Facilities List */}
                                                <ul className="facilities-list clearfix">
                                                    <li>
                                                        <i className="flaticon-square-layouting-with-black-square-in-east-area" />
                                                        <span>4800 sq ft</span>
                                                    </li>
                                                    <li>
                                                        <i className="flaticon-bed" />
                                                        <span>3</span>
                                                    </li>
                                                    <li>
                                                        <i className="flaticon-holidays" />
                                                        <span>2</span>
                                                    </li>
                                                    <li>
                                                        <i className="flaticon-vehicle" />
                                                        <span>1</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* Property 2 end */}
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                            {/* Property 2 start */}
                                            <div className="property-2">
                                                {/* Property img */}
                                                <div className="property-img">
                                                    <div className="featured">Featured</div>
                                                    <div className="price-ratings">
                                                        <div className="price">$150,000</div>
                                                        <div className="ratings">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star-o" />
                                                        </div>
                                                    </div>
                                                    <img
                                                        src="img/properties/properties-2.jpg"
                                                        alt="rp"
                                                        className="img-responsive"
                                                    />
                                                    <div className="property-overlay">
                                                        <a
                                                            href="properties-details.html"
                                                            className="overlay-link"
                                                        >
                                                            <i className="fa fa-link" />
                                                        </a>
                                                        <a
                                                            className="overlay-link property-video"
                                                            title="Lexus GS F"
                                                        >
                                                            <i className="fa fa-video-camera" />
                                                        </a>
                                                        <div className="property-magnify-gallery">
                                                            <a
                                                                href="img/properties/properties-2.jpg"
                                                                className="overlay-link"
                                                            >
                                                                <i className="fa fa-expand" />
                                                            </a>
                                                            <a
                                                                href="img/properties/properties-1.jpg"
                                                                className="hidden"
                                                            />
                                                            <a
                                                                href="img/properties/properties-5.jpg"
                                                                className="hidden"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* content */}
                                                <div className="content">
                                                    {/* title */}
                                                    <h4 className="title">
                                                        <a href="properties-details.html">Park Avenue</a>
                                                    </h4>
                                                    {/* Property address */}
                                                    <h3 className="property-address">
                                                        <a href="properties-details.html">
                                                            <i className="fa fa-map-marker" />123 Kathal St.
                                                            Tampa City,
                    </a>
                                                    </h3>
                                                </div>
                                                {/* Facilities List */}
                                                <ul className="facilities-list clearfix">
                                                    <li>
                                                        <i className="flaticon-square-layouting-with-black-square-in-east-area" />
                                                        <span>4800 sq ft</span>
                                                    </li>
                                                    <li>
                                                        <i className="flaticon-bed" />
                                                        <span>3</span>
                                                    </li>
                                                    <li>
                                                        <i className="flaticon-holidays" />
                                                        <span>2</span>
                                                    </li>
                                                    <li>
                                                        <i className="flaticon-vehicle" />
                                                        <span>1</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* Property 2 end */}
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                            {/* Property 2 start */}
                                            <div className="property-2">
                                                {/* Property img */}
                                                <div className="property-img">
                                                    <div className="featured">Featured</div>
                                                    <div className="price-ratings">
                                                        <div className="price">$150,000</div>
                                                        <div className="ratings">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star-o" />
                                                        </div>
                                                    </div>
                                                    <img
                                                        src="img/properties/properties-1.jpg"
                                                        alt="rp"
                                                        className="img-responsive"
                                                    />
                                                    <div className="property-overlay">
                                                        <a
                                                            href="properties-details.html"
                                                            className="overlay-link"
                                                        >
                                                            <i className="fa fa-link" />
                                                        </a>
                                                        <a
                                                            className="overlay-link property-video"
                                                            title="Lexus GS F"
                                                        >
                                                            <i className="fa fa-video-camera" />
                                                        </a>
                                                        <div className="property-magnify-gallery">
                                                            <a
                                                                href="img/properties/properties-1.jpg"
                                                                className="overlay-link"
                                                            >
                                                                <i className="fa fa-expand" />
                                                            </a>
                                                            <a
                                                                href="img/properties/properties-2.jpg"
                                                                className="hidden"
                                                            />
                                                            <a
                                                                href="img/properties/properties-5.jpg"
                                                                className="hidden"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* content */}
                                                <div className="content">
                                                    {/* title */}
                                                    <h4 className="title">
                                                        <a href="properties-details.html">
                                                            Sweet Family Home
                    </a>
                                                    </h4>
                                                    {/* Property address */}
                                                    <h3 className="property-address">
                                                        <a href="properties-details.html">
                                                            <i className="fa fa-map-marker" />123 Kathal St.
                                                            Tampa City,
                    </a>
                                                    </h3>
                                                </div>
                                                {/* Facilities List */}
                                                <ul className="facilities-list clearfix">
                                                    <li>
                                                        <i className="flaticon-square-layouting-with-black-square-in-east-area" />
                                                        <span>4800 sq ft</span>
                                                    </li>
                                                    <li>
                                                        <i className="flaticon-bed" />
                                                        <span>3</span>
                                                    </li>
                                                    <li>
                                                        <i className="flaticon-holidays" />
                                                        <span>2</span>
                                                    </li>
                                                    <li>
                                                        <i className="flaticon-vehicle" />
                                                        <span>1</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* Property 2 end */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    /* Partners block end */
                }
                <Footer />
            </div>
        );
    }
}

export default (withRouter(Home));