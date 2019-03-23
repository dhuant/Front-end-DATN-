/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/role-has-required-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { Component } from 'react';
import Select from 'react-select'
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
      selectedOption: null,
    };
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }
  render() {
    return (
      <div>
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          {/* Sidebar start */}
          <div className="sidebar right">
            {/* Search contents sidebar start */}
            <div className="sidebar-widget hidden-xs hidden-sm">
              <div className="main-title-2">
                <h1><span>Advanced</span> Search</h1>
              </div>
              <form method="GET">
                <div className="form-group">
                  <Select
                    defaultValue={options[0].label}
                    // value={selectedOption}
                    onChange={this.handleChange}
                    options={options}
                    isClearable
                    placeholder="Properties Status"
                    className="Properties Status"
                  />
                </div>
                <div className="form-group">
                  <Select
                    defaultValue={options[0].label}
                    // value={selectedOption}
                    onChange={this.handleChange}
                    options={options}
                    isClearable
                    placeholder="Location"
                    className="Location"
                  />
                </div>
                <div className="form-group">
                  <Select
                    defaultValue={options[0].label}
                    // value={selectedOption}
                    onChange={this.handleChange}
                    options={options}
                    isClearable
                    placeholder="Properties Types"
                    className="Properties Types"
                  />
                </div>
                <div className="form-group">
                  <Select
                    defaultValue={options[0].label}
                    // value={selectedOption}
                    onChange={this.handleChange}
                    options={options}
                    isClearable
                    placeholder="Area Form"
                    className="Area Form"
                  />
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group">
                      <Select
                        defaultValue={options[0].label}
                        // value={selectedOption}
                        onChange={this.handleChange}
                        options={options}
                        isClearable
                        placeholder="Bedrooms"
                        className="Bedrooms"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group">
                      <Select
                        defaultValue={options[0].label}
                        // value={selectedOption}
                        onChange={this.handleChange}
                        options={options}
                        isClearable
                        placeholder="Bathrooms"
                        className="Bathrooms"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group">
                      <Select
                        defaultValue={options[0].label}
                        // value={selectedOption}
                        onChange={this.handleChange}
                        options={options}
                        isClearable
                        placeholder="Balcony"
                        className="Balcony"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group">
                      <Select
                        defaultValue={options[0].label}
                        // value={selectedOption}
                        onChange={this.handleChange}
                        options={options}
                        isClearable
                        placeholder="Garage"
                        className="Garage"
                      />
                    </div>
                  </div>
                </div>
                <div className="range-slider">
                  <label>Area</label>
                  <div data-min={0} data-max={10000} data-unit="Sq ft" data-min-name="min_area" data-max-name="max_area" className="range-slider-ui ui-slider" aria-disabled="false" ></div>
                  <div className="clearfix" />
                </div>
                <div className="range-slider">
                  <label>Price</label>
                  <div data-min={0} data-max={150000} data-unit="USD" data-min-name="min_price" data-max-name="max_price" className="range-slider-ui ui-slider" aria-disabled="false" />
                  <div className="clearfix" />
                </div>
                <div className="form-group mb-0">
                  <button className="search-button">Search</button>
                </div>
              </form>
            </div>
            {/* Search contents sidebar end */}
            {/* Popular posts start */}
            <div className="sidebar-widget popular-posts">
              <div className="main-title-2">
                <h1><span>Recently</span> Properties</h1>
              </div>
              <div className="media">
                <div className="media-left">
                  <img className="media-object" src="/img/properties/small-properties-1.jpg" alt="small-properties-1" />
                </div>
                <div className="media-body">
                  <h3 className="media-heading">
                    <a href="properties-details.html">Sweet Family Home</a>
                  </h3>
                  <p>February 27, 2018</p>
                  <div className="price">
                    $734,000
        </div>
                </div>
              </div>
              <div className="media">
                <div className="media-left">
                  <img className="media-object" src="/img/properties/small-properties-2.jpg" alt="small-properties-2" />
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
                  <img className="media-object" src="/img/properties/small-properties-3.jpg" alt="small-properties-3" />
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
                <h1><span>Popular</span> Category</h1>
              </div>
              <ul className="list-unstyled list-cat">
                <li><a href="#">Single Family </a> <span>(45)</span></li>
                <li><a href="#">Apartment</a> <span>(21)</span></li>
                <li><a href="#">Condo </a> <span>(23)</span></li>
                <li><a href="#">Multi Family </a> <span>(19)</span></li>
                <li><a href="#">Villa </a> <span>(19)</span></li>
                <li><a href="#">Other</a> <span>(22)</span></li>
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
                <li><a href="#" className="facebook-bg"><i className="fa fa-facebook" /></a></li>
                <li><a href="#" className="twitter-bg"><i className="fa fa-twitter" /></a></li>
                <li><a href="#" className="linkedin-bg"><i className="fa fa-linkedin" /></a></li>
                <li><a href="#" className="google-bg"><i className="fa fa-google-plus" /></a></li>
                <li><a href="#" className="rss-bg"><i className="fa fa-rss" /></a></li>
              </ul>
            </div>
            {/* Mortgage calculator start */}
            <div className="sidebar-widget contact-1 mortgage-calculator">
              <div className="main-title-2">
                <h1><span>Mortgage</span> Calculator</h1>
              </div>
              <div className="contact-form">
                <form id="agent_form" action="http://themevessel-item.s3-website-us-east-1.amazonaws.com/nest/index.html" method="GET" encType="multipart/form-data">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label className="form-label">Property Price</label>
                        <input type="text" className="input-text" placeholder="$87.000" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label className="form-label">Interest Rate (%)</label>
                        <input type="text" className="input-text" placeholder="10%" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label className="form-label">Period In Months</label>
                        <input type="text" className="input-text" placeholder="10 Months" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label className="form-label">Down Payment</label>
                        <input type="text" className="input-text" placeholder="$36,300" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mb-0">
                        <button className="search-button">Search</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* Sidebar end */}

        </div>
      </div>
    );
  }
}

export default Sidebar;