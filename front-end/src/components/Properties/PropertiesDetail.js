import React, { Component } from 'react';
import Sidebar from './Sidebar';
import { connect } from 'react-redux';

class PropertiesDetail extends Component {
    
    render() {
        //let {estate} = this.props;
        return (
            <div>
                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                    {/* Header */}
                    <div className="heading-properties clearfix sidebar-widget">
                        <div className="pull-left">
                            <h3>Sweet Family Home</h3>
                            <p>
                                <i className="fa fa-map-marker" />123 Kathal St. Tampa City,
            </p>
                        </div>
                        <div className="pull-right">
                            <h3><span>$362,100</span></h3>
                            <h5>
                                Per Manth
            </h5>
                        </div>
                    </div>
                    {/* Properties details section start */}
                    <div className="Properties-details-section sidebar-widget">
                        {/* Properties detail slider start */}
                        <div className="properties-detail-slider simple-slider mb-40">
                            <div id="carousel-custom" className="carousel slide" data-ride="carousel">
                                <div className="carousel-outer">
                                    {/* Wrapper for slides */}
                                    <div className="carousel-inner">
                                        <div className="item">
                                            <img src={"img/properties/properties-1.jpg"} className="thumb-preview" alt="Chevrolet Impala" />
                                        </div>
                                        <div className="item">
                                            <img src="img/properties/properties-3.jpg" className="thumb-preview" alt="Chevrolet Impala" />
                                        </div>
                                        <div className="item">
                                            <img src="img/properties/properties-4.jpg" className="thumb-preview" alt="Chevrolet Impala" />
                                        </div>
                                        <div className="item">
                                            <img src="img/properties/properties-5.jpg" className="thumb-preview" alt="Chevrolet Impala" />
                                        </div>
                                        <div className="item">
                                            <img src="img/properties/properties-6.jpg" className="thumb-preview" alt="Chevrolet Impala" />
                                        </div>
                                        <div className="item">
                                            <img src="img/properties/properties-7.jpg" className="thumb-preview" alt="Chevrolet Impala" />
                                        </div>
                                        <div className="item">
                                            <img src="img/properties/properties-8.jpg" className="thumb-preview" alt="Chevrolet Impala" />
                                        </div>
                                        <div className="item active">
                                            <img src="img/properties/properties-2.jpg" className="thumb-preview" alt="Chevrolet Impala" />
                                        </div>
                                    </div>
                                    {/* Controls */}
                                    <a className="left carousel-control" href="#carousel-custom" role="button" data-slide="prev">
                                        <span className="slider-mover-left no-bg t-slider-r pojison" aria-hidden="true">
                                            <i className="fa fa-angle-left" />
                                        </span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="right carousel-control" href="#carousel-custom" role="button" data-slide="next">
                                        <span className="slider-mover-right no-bg t-slider-l pojison" aria-hidden="true">
                                            <i className="fa fa-angle-right" />
                                        </span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                                {/* Indicators */}
                                <ol className="carousel-indicators thumbs visible-lg visible-md">
                                    <li data-target="#carousel-custom" data-slide-to={0} className><img src="img/properties/properties-small-1.jpg" alt="Chevrolet Impala" /></li>
                                    <li data-target="#carousel-custom" data-slide-to={1} className><img src="img/properties/properties-small-3.jpg" alt="Chevrolet Impala" /></li>
                                    <li data-target="#carousel-custom" data-slide-to={2} className><img src="img/properties/properties-small-4.jpg" alt="Chevrolet Impala" /></li>
                                    <li data-target="#carousel-custom" data-slide-to={3} className><img src="img/properties/properties-small-5.jpg" alt="Chevrolet Impala" /></li>
                                    <li data-target="#carousel-custom" data-slide-to={4} className><img src="img/properties/properties-small-6.jpg" alt="Chevrolet Impala" /></li>
                                    <li data-target="#carousel-custom" data-slide-to={5} className><img src="img/properties/properties-small-7.jpg" alt="Chevrolet Impala" /></li>
                                    <li data-target="#carousel-custom" data-slide-to={6} className><img src="img/properties/properties-small-8.jpg" alt="Chevrolet Impala" /></li>
                                    <li data-target="#carousel-custom" data-slide-to={7} className><img src="img/properties/properties-small-2.jpg" alt="Chevrolet Impala" /></li>
                                </ol>
                            </div>
                        </div>
                        {/* Properties detail slider end */}

                        {/* Advanced search start */}
                        <div className="advabced-search hidden-lg hidden-md">
                            <div className="main-title-2">
                                <h1><span>Advanced</span> Search</h1>
                            </div>
                            <form method="GET">
                                <div className="form-group">
                                    <select className="selectpicker search-fields" name="property-status" data-live-search="true" data-live-search-placeholder="Search value">
                                        <option>Property Status</option>
                                        <option>For Sale</option>
                                        <option>For Rent</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <select className="selectpicker search-fields" name="location" data-live-search="true" data-live-search-placeholder="Search value">
                                        <option>Location</option>
                                        <option>United States</option>
                                        <option>United Kingdom</option>
                                        <option>American Samoa</option>
                                        <option>Belgium</option>
                                        <option>Cameroon</option>
                                        <option>Canada</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <select className="selectpicker search-fields" name="property-types" data-live-search="true" data-live-search-placeholder="Search value">
                                        <option>Property Types</option>
                                        <option>Residential</option>
                                        <option>Commercial</option>
                                        <option>Land</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <select className="selectpicker search-fields" name="area-from" data-live-search="true" data-live-search-placeholder="Search value">
                                        <option>Area From</option>
                                        <option>1000</option>
                                        <option>800</option>
                                        <option>600</option>
                                        <option>400</option>
                                        <option>200</option>
                                        <option>100</option>
                                    </select>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="form-group">
                                            <select className="selectpicker search-fields" name="bedrooms">
                                                <option>Bedrooms</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="form-group">
                                            <select className="selectpicker search-fields" name="bathroom">
                                                <option>Bathroom</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="form-group">
                                            <select className="selectpicker search-fields" name="balcony">
                                                <option>Balcony</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="form-group">
                                            <select className="selectpicker search-fields" data-live-search="true" name="garage">
                                                <option>Garage</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="range-slider">
                                    <label>Area</label>
                                    <div data-min={0} data-max={10000} data-unit="Sq ft" data-min-name="min_area" data-max-name="max_area" className="range-slider-ui ui-slider" aria-disabled="false" />
                                    <div className="clearfix" />
                                </div>
                                <div className="range-slider">
                                    <label>Price</label>
                                    <div data-min={0} data-max={150000} data-unit="USD" data-min-name="min_price" data-max-name="max_price" className="range-slider-ui ui-slider" aria-disabled="false" />
                                    <div className="clearfix" />
                                </div>
                                <div className="form-group">
                                    <button className="search-button">Search</button>
                                </div>
                            </form>
                        </div>
                        {/* Advanced search end */}

                        {/* Property description start */}
                        <div className="panel-box properties-panel-box Property-description">
                            <ul className="nav nav-tabs">
                                <li className="active"><a href="#tab1default" data-toggle="tab" aria-expanded="true">Description</a></li>
                                <li className><a href="#tab2default" data-toggle="tab" aria-expanded="false">Condition</a></li>
                                <li className><a href="#tab3default" data-toggle="tab" aria-expanded="false">Amenities</a></li>
                                <li className><a href="#tab4default" data-toggle="tab" aria-expanded="false">Floor Plans</a></li>
                                <li className><a href="#tab5default" data-toggle="tab" aria-expanded="false">Video</a></li>
                            </ul>
                            <div className="panel with-nav-tabs panel-default">
                                <div className="panel-body">
                                    <div className="tab-content">
                                        <div className="tab-pane fade active in" id="tab1default">
                                            <div className="main-title-2">
                                                <h1><span>Description</span></h1>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a consequat purus viverra a. Aliquam pellentesque nibh et nibh feugiat gravida. Maecenas ultricies, diam vitae semper placerat, velit risus accumsan nisl, eget tempor lacus est vel nunc. Proin accumsan elit sed neque euismod fringilla. Curabitur lobortis nunc velit, et fermentum urna dapibus non. Vivamus magna lorem, elementum id gravida ac, laoreet tristique augue. Maecenas dictum lacus eu nunc porttitor, ut hendrerit arcu efficitur.</p>
                                            <br />
                                            <p>Nam mattis lobortis felis eu blandit. Morbi tellus ligula, interdum sit amet ipsum et, viverra hendrerit lectus. Nunc efficitur sem vel est laoreet, sed bibendum eros viverra. Vestibulum finibus, ligula sed euismod tincidunt, lacus libero lobortis ligula, sit amet molestie ipsum purus ut tortor. Nunc varius, dui et sollicitudin facilisis, erat felis imperdiet felis, et iaculis dui magna vitae diam. Donec mattis diam nisl, quis ullamcorper enim malesuada non. Curabitur lobortis eu mauris nec vestibulum. Nam efficitur, ex ac semper malesuada nisi odio consequat dui, hendrerit vulputate odio dui vitae massa. Aliquam tortor urna, tincidunt</p>
                                        </div>
                                        <div className="tab-pane fade features" id="tab2default">
                                            {/* Properties condition start */}
                                            <div className="properties-condition">
                                                <div className="main-title-2">
                                                    <h1><span>Condition</span></h1>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-4 col-sm-4 col-xs-12">
                                                        <ul className="condition">
                                                            <li>
                                                                <i className="fa fa-check-square" />3 Beds
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-check-square" />Bathroom
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-4 col-sm-4 col-xs-12">
                                                        <ul className="condition">
                                                            <li>
                                                                <i className="fa fa-check-square" />4800 sq ft
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-check-square" />TV
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-4 col-sm-4 col-xs-12">
                                                        <ul className="condition">
                                                            <li>
                                                                <i className="fa fa-check-square" />1 Garage
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-check-square" />Balcony
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Properties condition end */}
                                        </div>
                                        <div className="tab-pane fade technical" id="tab3default">
                                            {/* Properties amenities start */}
                                            <div className="properties-amenities">
                                                <div className="main-title-2">
                                                    <h1><span>Amenities</span></h1>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                        <ul className="amenities">
                                                            <li>
                                                                <i className="fa fa-check-square" />Air conditioning
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-check-square" />Balcony
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-check-square" />Pool
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-check-square" />TV
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-check-square" />Gym
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                        <ul className="amenities">
                                                            <li>
                                                                <i className="fa fa-check-square" />Wifi
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-check-square" />Parking
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-check-square" />Double Bed
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-check-square" />Iron
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                        <ul className="amenities">
                                                            <li>
                                                                <i className="fa fa-check-square" />Telephone
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-check-square" />Jacuzzi
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-check-square" />Alarm
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-check-square" />Garage
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Properties amenities end */}
                                        </div>
                                        <div className="tab-pane fade" id="tab4default">
                                            {/* Floor Plans start */}
                                            <div className="floor-plans">
                                                <h1><span>Floor </span> Plans</h1>
                                                <table>
                                                    <tbody><tr>
                                                        <td><strong>Size</strong></td>
                                                        <td><strong>Rooms</strong></td>
                                                        <td><strong>2 Bathrooms</strong></td>
                                                    </tr>
                                                        <tr>
                                                            <td>1600</td>
                                                            <td>3</td>
                                                            <td>2</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <img src="img/properties/floor-plans.html" alt="floor-plans" className="img-responsive" />
                                            </div>
                                            {/* Floor Plans end */}
                                        </div>
                                        <div className="tab-pane fade" id="tab5default">
                                            {/* Inside properties start  */}
                                            <div className="inside-properties">
                                                {/* Main Title 2 */}
                                                <div className="main-title-2">
                                                    <h1><span>Video</span></h1>
                                                </div>
                                                <iframe title="." src="https://www.youtube.com/embed/5e0LxrLSzok" allowFullScreen />
                                            </div>
                                            {/* Inside properties end */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Property description end */}
                    </div>
                    {/* Properties details section end */}
                    {/* Location start */}
                    <div className="location sidebar-widget">
                        <div className="map">
                            {/* Main Title 2 */}
                            <div className="main-title-2">
                                <h1><span>Location</span></h1>
                            </div>
                            <div id="map" className="contact-map" />
                        </div>
                    </div>
                    {/* Location end */}
                    {/* Properties details section start */}
                    <div className="Properties-details-section sidebar-widget">
                        {/* Properties comments start */}
                        <div className="properties-comments mb-40">
                            {/* Comments section start */}
                            <div className="comments-section">
                                {/* Main Title 2 */}
                                <div className="main-title-2">
                                    <h1><span>Comments </span> Section</h1>
                                </div>
                                <ul className="comments">
                                    <li>
                                        <div className="comment">
                                            <div className="comment-author">
                                                <a href="true">
                                                    <img src="img/avatar/avatar-5.png" alt="avatar-5" />
                                                </a>
                                            </div>
                                            <div className="comment-content">
                                                <div className="comment-meta">
                                                    <div className="comment-meta-author">
                                                        Jane Doe
                        </div>
                                                    <div className="comment-meta-reply">
                                                        <a href="true">Reply</a>
                                                    </div>
                                                    <div className="comment-meta-date">
                                                        <span className="hidden-xs">8:42 PM 3/3/2017</span>
                                                    </div>
                                                </div>
                                                <div className="clearfix" />
                                                <div className="comment-body">
                                                    <div className="comment-rating">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star-o" />
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt aliquam. Aliquam gravida massa at sem vulputate interdum et vel eros. Maecenas eros enim, tincidunt vel turpis vel, dapibus tempus nulla. Donec vel nulla dui. Pellentesque sed ante sed ligula hendrerit condimentum. Suspendisse rhoncus fringilla ipsum quis porta.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <ul>
                                            <li>
                                                <div className="comment">
                                                    <div className="comment-author">
                                                        <a href="true">
                                                            <img src="img/avatar/avatar-5.png" alt="avatar-5" />
                                                        </a>
                                                    </div>
                                                    <div className="comment-content">
                                                        <div className="comment-meta">
                                                            <div className="comment-meta-author">
                                                                Jane Doe
                            </div>
                                                            <div className="comment-meta-reply">
                                                                <a href="true">Reply</a>
                                                            </div>
                                                            <div className="comment-meta-date">
                                                                <span className="hidden-xs">8:42 PM 3/3/2017</span>
                                                            </div>
                                                        </div>
                                                        <div className="clearfix" />
                                                        <div className="comment-body">
                                                            <div className="comment-rating">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                                <i className="fa fa-star-o" />
                                                            </div>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt aliquam. Aliquam gravida massa at sem vulputate interdum et vel eros. Maecenas eros enim, tincidunt vel turpis vel, dapibus tempus nulla. Donec vel nulla dui.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div className="comment">
                                            <div className="comment-author">
                                                <a href="true">
                                                    <img src="img/avatar/avatar-5.png" alt="avatar-5" />
                                                </a>
                                            </div>
                                            <div className="comment-content">
                                                <div className="comment-meta">
                                                    <div className="comment-meta-author">
                                                        Jane Doe
                        </div>
                                                    <div className="comment-meta-reply">
                                                        <a href="true">Reply</a>
                                                    </div>
                                                    <div className="comment-meta-date">
                                                        <span className="hidden-xs">8:42 PM 3/3/2017</span>
                                                    </div>
                                                </div>
                                                <div className="clearfix" />
                                                <div className="comment-body">
                                                    <div className="comment-rating">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star-o" />
                                                    </div>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                        </p>
                                                </div>
                                            </div>
                                        </div>
                                        <ul>
                                            <li>
                                                <div className="comment comment-mrg-bdr-nane">
                                                    <div className="comment-author">
                                                        <a href="true">
                                                            <img src="img/avatar/avatar-5.png" alt="avatar-5" />
                                                        </a>
                                                    </div>
                                                    <div className="comment-content">
                                                        <div className="comment-meta">
                                                            <div className="comment-meta-author">
                                                                Jane Doe
                            </div>
                                                            <div className="comment-meta-reply">
                                                                <a href="true">Reply</a>
                                                            </div>
                                                            <div className="comment-meta-date">
                                                                <span className="hidden-xs">8:42 PM 3/3/2017</span>
                                                            </div>
                                                        </div>
                                                        <div className="clearfix" />
                                                        <div className="comment-body">
                                                            <div className="comment-rating">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                                <i className="fa fa-star-o" />
                                                            </div>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt aliquam. Aliquam gravida massa at sem vulputate interdum et vel eros. Maecenas eros enim, tincidunt vel turpis vel, dapibus tempus nulla. Donec vel nulla dui.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            {/* Comments section end */}
                        </div>
                        {/* Properties comments end */}
                        {/* Contact 1 start */}
                        <div className="contact-1">
                            <div className="contact-form">
                                {/* Main Title 2 */}
                                <div className="main-title-2">
                                    <h1><span>Contact</span> with us</h1>
                                </div>
                                <form id="contact_form" action="http://themevessel-item.s3-website-us-east-1.amazonaws.com/nest/index.html" method="GET" encType="multipart/form-data">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <div className="form-group fullname">
                                                <input type="text" name="full-name" className="input-text" placeholder="Full Name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <div className="form-group enter-email">
                                                <input type="email" name="email" className="input-text" placeholder="Enter email" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <div className="form-group subject">
                                                <input type="text" name="subject" className="input-text" placeholder="Subject" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <div className="form-group number">
                                                <input type="text" name="phone" className="input-text" placeholder="Phone Number" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="form-group message">
                                                <textarea className="input-text" name="message" placeholder="Write message" defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                            <div className="form-group send-btn mb-0">
                                                <button type="submit" className="button-md button-theme">Send Message</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* Contact 1 end */}
                    </div>
                    {/* Properties details section end */}
                </div>
                <Sidebar />
            </div>
        );
    }
}

// const mapDispathToProp = (dispatch) => {
// 	return {
// 		actGetEstateRequest: (id) => dispatch(actions.actGetEstateRequest(id))
// 	}
// }
const mapStateToProp = (state) => {
	return {
		estate: state.estate
	}
}
export default connect(mapStateToProp, null)(PropertiesDetail);