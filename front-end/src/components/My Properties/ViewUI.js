import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions/request'
import MapOfDetailEstate from "../Properties/MapOfDetailEstate";

class ViewUI extends Component {
    OnSplitString = (string) => {
        if (string === undefined)
            return null
        else {
            var i = 0, j = 0
            var length = string.length
            var trim = string.trim()
            let array = []
            while (j < length) {
                if (trim[j] === ',') {
                    array.push(trim.substring(i, j))
                    i = j + 1
                }
                j++
            }
            // array.push(trim.substr(i, length - 1))
            return array
        }
    }
    onShowImagesSmall = (images) => {
        if (images === null) {
            return null
        }
        var result = null;
        if (images.length > 0) {
            result = images.map((image, index) => {
                // console.log(index)
                return (
                    <div className="item">
                        <img
                            src={image}
                            className="thumb-preview"
                            alt={index}
                            style={{ width: "150px", height: "100px" }}
                        />
                    </div>
                );
            });
        }
        return result;
    }
    onShowImagesThumbnail = (images) => {
        if (images === null) {
            var string = "Bài đăng này hiện không có hình nào!"
            return <span>{string}</span>
        }
        var result = null;
        if (images.length > 0) {
            result = images.map((image, index) => {
                // console.log(index)
                return (
                    <li
                        data-target="#carousel-custom"
                        data-slide-to={index}

                    >
                        <img
                            src={image}
                            alt={index}
                            style={{ width: "750px", height: "500px" }}
                        />
                    </li>
                );
            });
        }
        return result;
    }
    onShowImageSlide = (images) => {
        if (images === null)
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
        let { estateUserInfo } = this.props
        let urlArray = []
        let publicIdArray = []
        console.log(JSON.stringify(estateUserInfo.url))
        urlArray = this.OnSplitString(estateUserInfo.url)
        // let urlArray = this.OnSplitString(estateUserInfo.url)
        publicIdArray = this.OnSplitString(estateUserInfo.publicId)
        console.log(urlArray)
        console.log(publicIdArray)
        return (
            <div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    {/* Header */}
                    <div className="heading-properties clearfix sidebar-widget">
                        <div className="pull-left">
                            <h3>{estateUserInfo.name}</h3>
                            <p>
                                <i className="fa fa-map-marker" />
                                {estateUserInfo.address}
                            </p>
                        </div>
                        <div className="pull-right">
                            <h3>
                                <span>{estateUserInfo.price}</span>
                            </h3>
                            <h5>Per Manth</h5>
                        </div>
                    </div>
                    {/* Properties details section start */}
                    <div className="Properties-details-section sidebar-widget">
                        {/* Properties detail slider start */}
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
                                        {/* <span>Không có hình nào!</span> */}
                                    </div>
                                    {/* Controls */}
                                    {this.onShowImageSlide(urlArray)}
                                </div>
                                {/* Indicators */}
                                <ol className="carousel-indicators thumbs visible-lg visible-md">
                                    {this.onShowImagesSmall(urlArray)}
                                    {/* <li
                                        data-target="#carousel-custom"
                                        data-slide-to={0}

                                    >
                                        <img
                                            src="/img/properties/properties-small-3.jpg"
                                            alt="Chevrolet Impala"
                                        />
                                    </li>
                                    <li
                                        data-target="#carousel-custom"
                                        data-slide-to={1}

                                    >
                                        <img
                                            src="/img/properties/properties-small-3.jpg"
                                            alt="Chevrolet Impala"
                                        />
                                    </li>
                                    <li
                                        data-target="#carousel-custom"
                                        data-slide-to={2}

                                    >
                                        <img
                                            src="/img/properties/properties-small-4.jpg"
                                            alt="Chevrolet Impala"
                                        />
                                    </li>
                                    <li
                                        data-target="#carousel-custom"
                                        data-slide-to={3}

                                    >
                                        <img
                                            src="/img/properties/properties-small-5.jpg"
                                            alt="Chevrolet Impala"
                                        />
                                    </li>
                                    <li
                                        data-target="#carousel-custom"
                                        data-slide-to={4}

                                    >
                                        <img
                                            src="/img/properties/properties-small-6.jpg"
                                            alt="Chevrolet Impala"
                                        />
                                    </li>
                                    <li
                                        data-target="#carousel-custom"
                                        data-slide-to={5}

                                    >
                                        <img
                                            src="/img/properties/properties-small-7.jpg"
                                            alt="Chevrolet Impala"
                                        />
                                    </li>
                                    <li
                                        data-target="#carousel-custom"
                                        data-slide-to={6}

                                    >
                                        <img
                                            src="/img/properties/properties-small-8.jpg"
                                            alt="Chevrolet Impala"
                                        />
                                    </li>
                                    <li
                                        data-target="#carousel-custom"
                                        data-slide-to={7}

                                    >
                                        <img
                                            src="/img/properties/properties-small-2.jpg"
                                            alt="Chevrolet Impala"
                                        />
                                    </li> */}
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
                                <li>
                                    <a
                                        href="#tab2default"
                                        data-toggle="tab"
                                        aria-expanded="false"
                                    >
                                        Condition
                  </a>
                                </li>
                                <li>
                                    <a
                                        href="#tab3default"
                                        data-toggle="tab"
                                        aria-expanded="false"
                                    >
                                        Amenities
                  </a>
                                </li>
                                <li>
                                    <a
                                        href="#tab4default"
                                        data-toggle="tab"
                                        aria-expanded="false"
                                    >
                                        Floor Plans
                  </a>
                                </li>
                                <li>
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
                                            <p>{estateUserInfo.info}</p>
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
                            <MapOfDetailEstate info={estateUserInfo} />
                        </div>
                    </div>
                    {/* Location end */}
                    {/* Properties details section start */}
                    {/* <div className="Properties-details-section sidebar-widget"> */}
                    {/* Properties comments start */}
                    {/* <div className="properties-comments mb-40"> */}
                    {/* Comments section start */}
                    {/* <div className="comments-section"> */}
                    {/* Main Title 2 */}
                    {/* <div className="main-title-2">
                                    <h1>
                                        <span>Comments </span> Section
                  </h1>
                                </div>
                                <ul className="comments">
                                    {this.ShowComments(comments)}
                                </ul>
                            </div> */}
                    {/* Comments section end */}
                    {/* </div> */}
                    {/* Properties comments end */}

                    {/* </div> */}
                    {/* Properties details section end */}
                </div>

            </div>

        )
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
export default connect(mapStateToProp, mapDispathToProp)(ViewUI)