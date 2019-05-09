import React, { Component } from "react";
import Sidebar from "./Sidebar";
import { connect } from "react-redux";
import Comments from './Comments'
import * as actions from '../../actions/request'
import MapOfDetailEstate from "./MapOfDetailEstate";
import InfoBox from "react-google-maps/lib/components/addons/InfoBox";
// const options = [
//     { value: 'chocolate', label: 'Chocolate' },
//     { value: 'strawberry', label: 'Strawberry' },
//     { value: 'vanilla', label: 'Vanilla' },
// ];

class PropertiesDetail extends Component {
    constructor() {
        super();
        this.state = {
            selectedOption: null
        };
    }
    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    };

    componentDidMount = () => {
        console.log(this.props.id)
        this.props.onGetCommentsById(this.props.id)
    }
    onShowImagesThumbnail = (images) => {
        if (images === undefined) {
            return null
        }
        var result = null;
        if (images.length > 0) {
            result = images.map((image, index) => {
                // console.log(index)
                return (
                    <div className={index === 0 ? "item active" : "item"} key={index}>
                        <img
                            src={image}
                            className="thumb-preview"
                            style={{ width: "780%", height: "500px" }}
                            alt="Chevrolet Impala"
                        />
                        {/* <Image publicId={image}>
                            <Transformation width="150px" height="100px"/>
                        </Image> */}
                    </div>
                );
            });
        }
        return result;
    }
    onShowImagesSmall = (images) => {
        if (images === undefined) {
            var string = "Bài đăng này hiện không có hình nào!"
            return <span>{string}</span>
        }
        var result = null;
        if (images.length > 0) {
            result = images.map((image, index) => {
                var percent = 100 / (index + 1)
                console.log(percent)
                return (
                    <li
                        data-target="#carousel-custom"
                        data-slide-to={index}
                        key={index}
                    >
                        <img
                            src={image}
                            alt={index}
                            style={{ height: "100px", width: `100%` }}
                            key={index}
                        />
                        {/* <Image publicId={image}>
                            <Transformation width="750px" height="500px"/>
                        </Image> */}
                    </li>
                );
            });
        }
        return result;
    }
    onShowImageSlide = (images) => {
        if (images === undefined)
            return null
        else return (
            <div>
                <a
                    className="left carousel-control"
                    href="#carousel-custom"
                    role="button"
                    data-slide="prev"
                >
                    <span
                        className="slider-mover-left no-bg t-slider-r pojison"
                        aria-hidden="true"
                    >
                        <i className="fa fa-angle-left" />
                    </span>
                    <span className="sr-only">Previous</span>
                </a>
                <a
                    className="right carousel-control"
                    href="#carousel-custom"
                    role="button"
                    data-slide="next"
                >
                    <span
                        className="slider-mover-right no-bg t-slider-l pojison"
                        aria-hidden="true"
                    >
                        <i className="fa fa-angle-right" />
                    </span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }
    render() {
        let { info, comments } = this.props;
        console.log(info);
        let urlArray = info.url
        let publicIdArray = info.publicId
        // console.log(info.url)
        // let map = '';
        // if(info){
        //   console.log(info);
        //   map = <MapOfDetailEstate info={info}/>
        // }
        console.log(info.url, info.publicId)
        return (
            <div>
                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                    {/* Header */}
                    <div className="heading-properties clearfix sidebar-widget">
                        <div className="pull-left">
                            <h3>{info.name}</h3>
                            <p>
                                <i className="fa fa-map-marker" />
                                {info.address}
                            </p>
                        </div>
                        <div className="pull-right">
                            <h3>
                                <span>{info.price}</span>
                            </h3>
                            <h5>Per Manth</h5>
                        </div>
                    </div>
                    {/* Properties detail slider start */}
                    <div className="Properties-details-section sidebar-widget">
                        <div className="properties-detail-slider simple-slider mb-40">
                            <div
                                id="carousel-custom"
                                className="carousel slide"
                                data-ride="carousel"
                            >
                                <div className="carousel-outer">
                                    {/* Wrapper for slides */}
                                    <div className="carousel-inner">
                                        {this.onShowImagesThumbnail(urlArray)}
                                    </div>
                                    {/* Controls */}
                                    {this.onShowImageSlide(urlArray)}
                                </div>
                                {/* Indicators */}
                                <ol className="carousel-indicators thumbs visible-lg visible-md">
                                    {this.onShowImagesSmall(urlArray)}
                                </ol>
                            </div>
                        </div>
                        {/* Properties detail slider end */}

                        {/* Property description start */}
                        <div className="panel-box properties-panel-box Property-description">
                            <ul className="nav nav-tabs">
                                <li className="active">
                                    <a href="#tab1default" data-toggle="tab" aria-expanded="true">
                                        Description
                  </a>
                                </li>
                                <li className>
                                    <a
                                        href="#tab2default"
                                        data-toggle="tab"
                                        aria-expanded="false"
                                    >
                                        Condition
                  </a>
                                </li>
                                <li className>
                                    <a
                                        href="#tab3default"
                                        data-toggle="tab"
                                        aria-expanded="false"
                                    >
                                        Amenities
                  </a>
                                </li>
                                <li className>
                                    <a
                                        href="#tab4default"
                                        data-toggle="tab"
                                        aria-expanded="false"
                                    >
                                        Floor Plans
                  </a>
                                </li>
                                <li className>
                                    <a
                                        href="#tab5default"
                                        data-toggle="tab"
                                        aria-expanded="false"
                                    >
                                        Video
                  </a>
                                </li>
                            </ul>
                            <div className="panel with-nav-tabs panel-default">
                                <div className="panel-body">
                                    <div className="tab-content">
                                        <div className="tab-pane fade active in" id="tab1default">
                                            <div className="main-title-2">
                                                <h1>
                                                    <span>Description</span>
                                                </h1>
                                            </div>
                                            <p>{info.info}</p>
                                            <br />
                                        </div>
                                        <div className="tab-pane fade features" id="tab2default">
                                            {/* Properties condition start */}
                                            <div className="properties-condition">
                                                <div className="main-title-2">
                                                    <h1>
                                                        <span>Condition</span>
                                                    </h1>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-4 col-sm-4 col-xs-12">
                                                        <ul className="condition">
                                                            <li>
                                                                <i className="fa fa-check-square" />3 Beds
                              </li>
                                                            <li>
                                                                <i className="fa fa-check-square" />
                                                                Bathroom
                              </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-4 col-sm-4 col-xs-12">
                                                        <ul className="condition">
                                                            <li>
                                                                <i className="fa fa-check-square" />
                                                                4800 sq ft
                              </li>
                                                            <li>
                                                                <i className="fa fa-check-square" />
                                                                TV
                              </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-4 col-sm-4 col-xs-12">
                                                        <ul className="condition">
                                                            <li>
                                                                <i className="fa fa-check-square" />1 Garage
                              </li>
                                                            <li>
                                                                <i className="fa fa-check-square" />
                                                                Balcony
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
                                                    <h1>
                                                        <span>Amenities</span>
                                                    </h1>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                        <ul className="amenities">
                                                            <li>
                                                                <i className="fa fa-check-square" />
                                                                Air conditioning
                              </li>
                                                            <li>
                                                                <i className="fa fa-check-square" />
                                                                Balcony
                              </li>
                                                            <li>
                                                                <i className="fa fa-check-square" />
                                                                Pool
                              </li>
                                                            <li>
                                                                <i className="fa fa-check-square" />
                                                                TV
                              </li>
                                                            <li>
                                                                <i className="fa fa-check-square" />
                                                                Gym
                              </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                        <ul className="amenities">
                                                            <li>
                                                                <i className="fa fa-check-square" />
                                                                Wifi
                              </li>
                                                            <li>
                                                                <i className="fa fa-check-square" />
                                                                Parking
                              </li>
                                                            <li>
                                                                <i className="fa fa-check-square" />
                                                                Double Bed
                              </li>
                                                            <li>
                                                                <i className="fa fa-check-square" />
                                                                Iron
                              </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                        <ul className="amenities">
                                                            <li>
                                                                <i className="fa fa-check-square" />
                                                                Telephone
                              </li>
                                                            <li>
                                                                <i className="fa fa-check-square" />
                                                                Jacuzzi
                              </li>
                                                            <li>
                                                                <i className="fa fa-check-square" />
                                                                Alarm
                              </li>
                                                            <li>
                                                                <i className="fa fa-check-square" />
                                                                Garage
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
                                                <h1>
                                                    <span>Floor </span> Plans
                        </h1>
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <strong>Size</strong>
                                                            </td>
                                                            <td>
                                                                <strong>Rooms</strong>
                                                            </td>
                                                            <td>
                                                                <strong>2 Bathrooms</strong>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>1600</td>
                                                            <td>3</td>
                                                            <td>2</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <img
                                                    src="img/properties/floor-plans.html"
                                                    alt="floor-plans"
                                                    className="img-responsive"
                                                />
                                            </div>
                                            {/* Floor Plans end */}
                                        </div>
                                        <div className="tab-pane fade" id="tab5default">
                                            {/* Inside properties start  */}
                                            <div className="inside-properties">
                                                {/* Main Title 2 */}
                                                <div className="main-title-2">
                                                    <h1>
                                                        <span>Video</span>
                                                    </h1>
                                                </div>
                                                <iframe
                                                    title="."
                                                    src="https://www.youtube.com/embed/5e0LxrLSzok"
                                                    allowFullScreen
                                                />
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
                                <h1>
                                    <span>Location</span>
                                </h1>
                            </div>
                            <MapOfDetailEstate info={info} />
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
                                    <h1>
                                        <span>Comments </span> Section
                  </h1>
                                </div>
                                <ul className="comments">
                                    {this.ShowComments(comments)}
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
                                    <h1>
                                        <span>Contact</span> with us
                  </h1>
                                </div>
                                <form
                                    id="contact_form"
                                    action="http://themevessel-item.s3-website-us-east-1.amazonaws.com/nest/index.html"
                                    method="GET"
                                    encType="multipart/form-data"
                                >
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <div className="form-group fullname">
                                                <input
                                                    type="text"
                                                    name="full-name"
                                                    className="input-text"
                                                    placeholder="Full Name"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <div className="form-group enter-email">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    className="input-text"
                                                    placeholder="Enter email"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <div className="form-group subject">
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    className="input-text"
                                                    placeholder="Subject"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <div className="form-group number">
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    className="input-text"
                                                    placeholder="Phone Number"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="form-group message">
                                                <textarea
                                                    className="input-text"
                                                    name="message"
                                                    placeholder="Write message"
                                                    defaultValue={""}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                            <div className="form-group send-btn mb-0">
                                                <button
                                                    type="submit"
                                                    className="button-md button-theme"
                                                >
                                                    Send Message
                                        </button>
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
            </div >
        );
    }
    ShowComments = (comments) => {
        var result = null;
        if (comments.length > 0) {
            result = comments.map((comment, index) => {
                // console.log(index)
                return (
                    <Comments key={index} comment={comment} />
                );
            });
        }
        return result;
    }
}
const mapDispathToProp = (dispatch) => {
    return {
        onGetCommentsById: (id) => dispatch(actions.actGetCommentsByIdRequest(id))
    }
}
const mapStateToProp = (state) => {
    return {
        comments: state.comments
    }
}
export default connect(mapStateToProp, mapDispathToProp)(PropertiesDetail);
