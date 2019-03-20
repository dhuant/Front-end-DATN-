import React, { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainHeader from '../components/MainHeader';
import {Link} from 'react-router-dom'

class SubmitProperty extends Component {
    render() {
        return (
            <div>
                <Header />
                <MainHeader />
                {
                    /* Sub banner start */
                }
                <div className="sub-banner overview-bgi">
                    <div className="overlay">
                        <div className="container">
                            <div className="breadcrumb-area">
                                <h1>Submit Property</h1>
                                <ul className="breadcrumbs">
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li className="active">Submit Property</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    /* Sub Banner end */
                }

                <div className="content-area-7 submit-property">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="notification-box">
                                    <h3>Don't Have an Account?</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Aenean ac tortor at tellus feugiat congue quis ut nunc.
                                        Semper ac dolor vitae accumsan.
          </p>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="submit-address">
                                    <form method="GET">
                                        <div className="main-title-2">
                                            <h1>
                                                <span>Basic</span> Information
              </h1>
                                        </div>
                                        <div className="search-contents-sidebar mb-30">
                                            <div className="form-group">
                                                <label>Property Title</label>
                                                <input
                                                    type="text"
                                                    className="input-text"
                                                    name="your name"
                                                    placeholder="Property Title"
                                                />
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 col-sm-6">
                                                    <div className="form-group">
                                                        <label>Status</label>
                                                        <select className="selectpicker search-f    ields">
                                                            <option>Mustard</option>
                                                            <option>Ketchup</option>
                                                            <option>Relish</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6">
                                                    <div className="form-group">
                                                        <label>Type</label>
                                                        <select
                                                            className="selectpicker search-fields"
                                                            name="apartment"
                                                        >
                                                            <option>Apartment</option>
                                                            <option>House</option>
                                                            <option>Commercial</option>
                                                            <option>Garage</option>
                                                            <option>Lot</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-3 col-sm-6">
                                                    <div className="form-group">
                                                        <label>Price</label>
                                                        <input
                                                            type="text"
                                                            className="input-text"
                                                            name="your name"
                                                            placeholder="USD"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-3 col-sm-6">
                                                    <div className="form-group">
                                                        <label>Area/Location</label>
                                                        <input
                                                            type="text"
                                                            className="input-text"
                                                            name="your name"
                                                            placeholder="SqFt"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-3 col-sm-6">
                                                    <div className="form-group">
                                                        <label>Rooms</label>
                                                        <select
                                                            className="selectpicker search-fields"
                                                            name={1}
                                                        >
                                                            <option>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                            <option>4</option>
                                                            <option>5</option>
                                                            <option>6</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 col-sm-6">
                                                    <div className="form-group">
                                                        <label>Bathroom</label>
                                                        <select
                                                            className="selectpicker search-fields"
                                                            name={1}
                                                        >
                                                            <option>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                            <option>4</option>
                                                            <option>5</option>
                                                            <option>6</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="main-title-2">
                                            <h1>
                                                <span>Property</span> Gallery
                                            </h1>
                                        </div>
                                        <div
                                            id="myDropZone"
                                            className="dropzone dropzone-design mb-50"
                                        >
                                            <div className="dz-default dz-message">
                                                <span>Drop files here to upload</span>
                                            </div>
                                        </div>
                                        <div className="main-title-2">
                                            <h1>
                                                <span>Location</span>
                                            </h1>
                                        </div>
                                        <div className="row mb-30 ">
                                            <div className="col-md-6 col-sm-6">
                                                <div className="form-group">
                                                    <label>Address</label>
                                                    <input
                                                        type="text"
                                                        className="input-text"
                                                        name="address"
                                                        placeholder="Address"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-6">
                                                <div className="form-group">
                                                    <label>City</label>
                                                    <select
                                                        className="selectpicker search-fields"
                                                        name="choose-city"
                                                        data-live-search="true"
                                                        data-live-search-placeholder="Search value"
                                                    >
                                                        <option>Choose City</option>
                                                        <option>New York</option>
                                                        <option>Los Angeles</option>
                                                        <option>Chicago</option>
                                                        <option>Brooklyn</option>
                                                        <option>Queens</option>
                                                        <option>Houston</option>
                                                        <option>Manhattan</option>
                                                        <option>Philadelphia</option>
                                                        <option>Phoenix</option>
                                                        <option>San Antonio</option>
                                                        <option>Bronx</option>
                                                        <option>San Diego</option>
                                                        <option>Dallas</option>
                                                        <option>San Jose</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-6">
                                                <div className="form-group">
                                                    <label>State</label>
                                                    <select
                                                        className="selectpicker search-fields"
                                                        name="choose-state"
                                                        data-live-search="true"
                                                        data-live-search-placeholder="Search value"
                                                    >
                                                        <option>Choose State</option>
                                                        <option>Alabama</option>
                                                        <option>Alaska</option>
                                                        <option>Arizona</option>
                                                        <option>Arkansas</option>
                                                        <option>California</option>
                                                        <option>Colorado</option>
                                                        <option>Connecticut</option>
                                                        <option>Delaware</option>
                                                        <option>Florida</option>
                                                        <option>Georgia</option>
                                                        <option>Hawaii</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-6">
                                                <div className="form-group">
                                                    <label>Postal Code</label>
                                                    <input
                                                        type="text"
                                                        className="input-text"
                                                        name="zip"
                                                        placeholder="Postal Code"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="main-title-2">
                                            <h1>
                                                <span>Detailed</span> Information
              </h1>
                                        </div>
                                        <div className="row mb-30">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label>Detailed Information</label>
                                                    <textarea
                                                        className="input-text"
                                                        name="message"
                                                        placeholder="Detailed Information"
                                                        defaultValue={""}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mb-30">
                                            <div className="col-md-4 col-sm-4">
                                                <div className="form-group">
                                                    <label>
                                                        Building Age <span>(optional)</span>
                                                    </label>
                                                    <select
                                                        className="selectpicker search-fields"
                                                        name="years"
                                                    >
                                                        <option>0-1 Years</option>
                                                        <option>0-5 Years</option>
                                                        <option>0-10 Years</option>
                                                        <option>0-20 Years</option>
                                                        <option>0-40 Years</option>
                                                        <option>40+Years</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-4">
                                                <div className="form-group">
                                                    <label>Bedrooms (optional)</label>
                                                    <select
                                                        className="selectpicker search-fields"
                                                        name={1}
                                                    >
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                        <option>6</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-4">
                                                <div className="form-group">
                                                    <label>Bathrooms (optional)</label>
                                                    <select
                                                        className="selectpicker search-fields"
                                                        name={1}
                                                    >
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                        <option>6</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <label className="margin-t-10">
                                                    Features (optional)
                </label>
                                                <div className="row">
                                                    <div className="col-lg-4 col-sm-4 col-xs-12">
                                                        <div className="checkbox checkbox-theme checkbox-circle">
                                                            <input id="checkbox1" type="checkbox" />
                                                            <label htmlFor="checkbox1">Free Parking</label>
                                                        </div>
                                                        <div className="checkbox checkbox-theme checkbox-circle">
                                                            <input id="checkbox2" type="checkbox" />
                                                            <label htmlFor="checkbox2">Air Condition</label>
                                                        </div>
                                                        <div className="checkbox checkbox-theme checkbox-circle">
                                                            <input id="checkbox3" type="checkbox" />
                                                            <label htmlFor="checkbox3">
                                                                Places to seat
                      </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-sm-4 col-xs-12">
                                                        <div className="checkbox checkbox-theme checkbox-circle">
                                                            <input id="checkbox4" type="checkbox" />
                                                            <label htmlFor="checkbox4">Swimming Pool</label>
                                                        </div>
                                                        <div className="checkbox checkbox-theme checkbox-circle">
                                                            <input id="checkbox5" type="checkbox" />
                                                            <label htmlFor="checkbox5">Laundry Room</label>
                                                        </div>
                                                        <div className="checkbox checkbox-theme checkbox-circle">
                                                            <input id="checkbox6" type="checkbox" />
                                                            <label htmlFor="checkbox6">
                                                                Window Covering
                      </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-sm-4 col-xs-12">
                                                        <div className="checkbox checkbox-theme checkbox-circle">
                                                            <input id="checkbox7" type="checkbox" />
                                                            <label htmlFor="checkbox7">
                                                                Central Heating
                      </label>
                                                        </div>
                                                        <div className="checkbox checkbox-theme checkbox-circle">
                                                            <input id="checkbox8" type="checkbox" />
                                                            <label htmlFor="checkbox8">Alarm</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="main-title-2">
                                            <h1>
                                                <span>Contact</span> Details
              </h1>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4 col-sm-4">
                                                <div className="form-group">
                                                    <label>Name</label>
                                                    <input
                                                        type="text"
                                                        className="input-text"
                                                        name="name"
                                                        placeholder="Name"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-4">
                                                <div className="form-group">
                                                    <label>Email</label>
                                                    <input
                                                        type="email"
                                                        className="input-text"
                                                        name="email"
                                                        placeholder="Email"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-4">
                                                <div className="form-group">
                                                    <label>Phone (optional)</label>
                                                    <input
                                                        type="text"
                                                        className="input-text"
                                                        name="phone"
                                                        placeholder="Phone"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <a href className="btn button-md button-theme">
                                                    Preview
                                                </a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    /* Submit Property end */
                }
                <Footer />
                
            </div>
        );
    }
}

export default SubmitProperty;