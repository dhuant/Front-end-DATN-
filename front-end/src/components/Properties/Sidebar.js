/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/role-has-required-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { Component } from 'react';

class Sidebar extends Component {
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
                <div className="btn-group bootstrap-select search-fields"><button type="button" className="btn dropdown-toggle btn-default" data-toggle="dropdown" role="button" title="Property Status"><span className="filter-option pull-left">Property Status</span>&nbsp;<span className="bs-caret"><span className="caret" /></span></button><div className="dropdown-menu open" role="combobox"><div className="bs-searchbox"><input type="text" className="form-control" autoComplete="off" placeholder="Search value" role="textbox" aria-label="Search" /></div><ul className="dropdown-menu inner" role="listbox" aria-expanded="false"><li data-original-index={0} className="selected"><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="true"><span className="text">Property Status</span><span className="glyphicon glyphicon-ok check-mark" /></a></li><li data-original-index={1}><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">For Sale</span><span className="glyphicon glyphicon-ok check-mark" /></a></li><li data-original-index={2}><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">For Rent</span><span className="glyphicon glyphicon-ok check-mark" /></a></li></ul></div><select className="selectpicker search-fields" name="property-status" data-live-search="true" data-live-search-placeholder="Search value" tabIndex={-98}>
                    <option>Property Status</option>
                    <option>For Sale</option>
                    <option>For Rent</option>
                  </select></div>
              </div>
              <div className="form-group">
                <div className="btn-group bootstrap-select search-fields"><button type="button" className="btn dropdown-toggle btn-default" data-toggle="dropdown" role="button" title="Location"><span className="filter-option pull-left">Location</span>&nbsp;<span className="bs-caret"><span className="caret" /></span></button><div className="dropdown-menu open" role="combobox"><div className="bs-searchbox"><input type="text" className="form-control" autoComplete="off" placeholder="Search value" role="textbox" aria-label="Search" /></div><ul className="dropdown-menu inner" role="listbox" aria-expanded="false"><li data-original-index={0} className="selected"><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="true"><span className="text">Location</span><span className="glyphicon glyphicon-ok check-mark" /></a></li><li data-original-index={1}><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">United States</span><span className="glyphicon glyphicon-ok check-mark" /></a></li><li data-original-index={2}><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">United Kingdom</span><span className="glyphicon glyphicon-ok check-mark" /></a></li><li data-original-index={3}><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">American Samoa</span><span className="glyphicon glyphicon-ok check-mark" /></a></li><li data-original-index={4}><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">Belgium</span><span className="glyphicon glyphicon-ok check-mark" /></a></li><li data-original-index={5}><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">Cameroon</span><span className="glyphicon glyphicon-ok check-mark" /></a></li><li data-original-index={6}><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">Canada</span><span className="glyphicon glyphicon-ok check-mark" /></a></li></ul></div><select className="selectpicker search-fields" name="location" data-live-search="true" data-live-search-placeholder="Search value" tabIndex={-98}>
                    <option>Location</option>
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>American Samoa</option>
                    <option>Belgium</option>
                    <option>Cameroon</option>
                    <option>Canada</option>
                  </select></div>
              </div>
              <div className="form-group">
                <div className="btn-group bootstrap-select search-fields"><button type="button" className="btn dropdown-toggle btn-default" data-toggle="dropdown" role="button" title="Property Types"><span className="filter-option pull-left">Property Types</span>&nbsp;<span className="bs-caret"><span className="caret" /></span></button><div className="dropdown-menu open" role="combobox"><div className="bs-searchbox"><input type="text" className="form-control" autoComplete="off" placeholder="Search value" role="textbox" aria-label="Search" /></div><ul className="dropdown-menu inner" role="listbox" aria-expanded="false"><li data-original-index={0} className="selected"><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="true"><span className="text">Property Types</span><span className="glyphicon glyphicon-ok check-mark" /></a></li><li data-original-index={1}><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">Residential</span><span className="glyphicon glyphicon-ok check-mark" /></a></li><li data-original-index={2}><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">Commercial</span><span className="glyphicon glyphicon-ok check-mark" /></a></li><li data-original-index={3}><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">Land</span><span className="glyphicon glyphicon-ok check-mark" /></a></li></ul></div><select className="selectpicker search-fields" name="property-types" data-live-search="true" data-live-search-placeholder="Search value" tabIndex={-98}>
                    <option>Property Types</option>
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Land</option>
                  </select></div>
              </div>
              <div className="form-group">
                <div className="btn-group bootstrap-select search-fields"><button type="button" className="btn dropdown-toggle btn-default" data-toggle="dropdown" role="button" title="Area From"><span className="filter-option pull-left">Area From</span>&nbsp;<span className="bs-caret"><span className="caret" /></span></button><div className="dropdown-menu open" role="combobox"><div className="bs-searchbox"><input type="text" className="form-control" autoComplete="off" placeholder="Search value" role="textbox" aria-label="Search" /></div><ul className="dropdown-menu inner" role="listbox" aria-expanded="false"><li data-original-index={0} className="selected"><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="true"><span className="text">Area From</span><span className="glyphicon glyphicon-ok check-mark" /></a></li><li data-original-index={1}><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">1000</span><span className="glyphicon glyphicon-ok check-mark" /></a></li><li data-original-index={2}><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">800</span><span className="glyphicon glyphicon-ok check-mark" /></a></li><li data-original-index={3}><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">600</span><span className="glyphicon glyphicon-ok check-mark" /></a></li><li data-original-index={4}><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">400</span><span className="glyphicon glyphicon-ok check-mark" /></a></li><li data-original-index={5}><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">200</span><span className="glyphicon glyphicon-ok check-mark" /></a></li><li data-original-index={6}><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">100</span><span className="glyphicon glyphicon-ok check-mark" /></a></li></ul></div><select className="selectpicker search-fields" name="area-from" data-live-search="true" data-live-search-placeholder="Search value" tabIndex={-98}>
                    <option>Area From</option>
                    <option>1000</option>
                    <option>800</option>
                    <option>600</option>
                    <option>400</option>
                    <option>200</option>
                    <option>100</option>
                  </select></div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <div className="btn-group bootstrap-select search-fields"><button type="button" className="btn dropdown-toggle btn-default" data-toggle="dropdown" role="button" title="Bedrooms"><span className="filter-option pull-left">Bedrooms</span>&nbsp;<span className="bs-caret"><span className="caret" /></span></button><div className="dropdown-menu open" role="combobox"><ul className="dropdown-menu inner" role="listbox" aria-expanded="false"><li data-original-index={0} className="selected"><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="true"><span className="text">Bedrooms</span><span className="glyphicon glyphicon-ok check-mark" /></a></li><li data-original-index={1}><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">1</span><span className="glyphicon glyphicon-ok check-mark" /></a></li><li data-original-index={2}><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">2</span><span className="glyphicon glyphicon-ok check-mark" /></a></li><li data-original-index={3}><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">3</span><span className="glyphicon glyphicon-ok check-mark" /></a></li><li data-original-index={4}><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">4</span><span className="glyphicon glyphicon-ok check-mark" /></a></li><li data-original-index={5}><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">5</span><span className="glyphicon glyphicon-ok check-mark" /></a></li></ul></div><select className="selectpicker search-fields" name="bedrooms" tabIndex={-98}>
                        <option>Bedrooms</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select></div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <div className="btn-group bootstrap-select search-fields"><button type="button" className="btn dropdown-toggle btn-default" data-toggle="dropdown" role="button" title="Bathroom"><span className="filter-option pull-left">Bathroom</span>&nbsp;<span className="bs-caret"><span className="caret" /></span></button><div className="dropdown-menu open" role="combobox"><ul className="dropdown-menu inner" role="listbox" aria-expanded="false"><li data-original-index={0} className="selected"><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="true"><span className="text">Bathroom</span><span className="glyphicon glyphicon-ok check-mark" /></a></li><li data-original-index={1}><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">1</span><span className="glyphicon glyphicon-ok check-mark" /></a></li><li data-original-index={2}><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">2</span><span className="glyphicon glyphicon-ok check-mark" /></a></li><li data-original-index={3}><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">3</span><span className="glyphicon glyphicon-ok check-mark" /></a></li><li data-original-index={4}><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">4</span><span className="glyphicon glyphicon-ok check-mark" /></a></li><li data-original-index={5}><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">5</span><span className="glyphicon glyphicon-ok check-mark" /></a></li></ul></div><select className="selectpicker search-fields" name="bathroom" tabIndex={-98}>
                        <option>Bathroom</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select></div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <div className="btn-group bootstrap-select search-fields"><button type="button" className="btn dropdown-toggle btn-default" data-toggle="dropdown" role="button" title="Balcony"><span className="filter-option pull-left">Balcony</span>&nbsp;<span className="bs-caret"><span className="caret" /></span></button><div className="dropdown-menu open" role="combobox"><ul className="dropdown-menu inner" role="listbox" aria-expanded="false"><li data-original-index={0} className="selected"><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="true"><span className="text">Balcony</span><span className="glyphicon glyphicon-ok check-mark" /></a></li><li data-original-index={1}><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">1</span><span className="glyphicon glyphicon-ok check-mark" /></a></li><li data-original-index={2}><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">2</span><span className="glyphicon glyphicon-ok check-mark" /></a></li><li data-original-index={3}><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">3</span><span className="glyphicon glyphicon-ok check-mark" /></a></li><li data-original-index={4}><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">4</span><span className="glyphicon glyphicon-ok check-mark" /></a></li><li data-original-index={5}><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">5</span><span className="glyphicon glyphicon-ok check-mark" /></a></li></ul></div><select className="selectpicker search-fields" name="balcony" tabIndex={-98}>
                        <option>Balcony</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select></div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <div className="btn-group bootstrap-select search-fields"><button type="button" className="btn dropdown-toggle btn-default" data-toggle="dropdown" role="button" title="Garage"><span className="filter-option pull-left">Garage</span>&nbsp;<span className="bs-caret"><span className="caret" /></span></button><div className="dropdown-menu open" role="combobox"><div className="bs-searchbox"><input type="text" className="form-control" autoComplete="off" role="textbox" aria-label="Search" /></div><ul className="dropdown-menu inner" role="listbox" aria-expanded="false"><li data-original-index={0} className="selected"><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="true"><span className="text">Garage</span><span className="glyphicon glyphicon-ok check-mark" /></a></li><li data-original-index={1}><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">1</span><span className="glyphicon glyphicon-ok check-mark" /></a></li><li data-original-index={2}><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">2</span><span className="glyphicon glyphicon-ok check-mark" /></a></li><li data-original-index={3}><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">3</span><span className="glyphicon glyphicon-ok check-mark" /></a></li><li data-original-index={4}><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">4</span><span className="glyphicon glyphicon-ok check-mark" /></a></li><li data-original-index={5}><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">5</span><span className="glyphicon glyphicon-ok check-mark" /></a></li></ul></div><select className="selectpicker search-fields" data-live-search="true" name="garage" tabIndex={-98}>
                        <option>Garage</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select></div>
                  </div>
                </div>
              </div>
              <div className="range-slider">
                <label>Area</label>
                <div data-min={0} data-max={10000} data-unit="Sq ft" data-min-name="min_area" data-max-name="max_area" className="range-slider-ui ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" aria-disabled="false"><span className="min-value">0 Sq ft</span> <span className="max-value">10000 Sq ft</span><input className="current-min" type="hidden" name="min_area" defaultValue={0} /><input className="current-max" type="hidden" name="max_area" defaultValue={10000} /><div className="ui-slider-range ui-widget-header ui-corner-all" style={{left: '0%', width: '100%'}} /><a className="ui-slider-handle ui-state-default ui-corner-all" href="true" style={{left: '0%'}} /><a className="ui-slider-handle ui-state-default ui-corner-all" href="true" style={{left: '100%'}} /></div>
                <div className="clearfix" />
              </div>
              <div className="range-slider">
                <label>Price</label>
                <div data-min={0} data-max={150000} data-unit="USD" data-min-name="min_price" data-max-name="max_price" className="range-slider-ui ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" aria-disabled="false"><span className="min-value">0 USD</span> <span className="max-value">150000 USD</span><input className="current-min" type="hidden" name="min_price" defaultValue={0} /><input className="current-max" type="hidden" name="max_price" defaultValue={150000} /><div className="ui-slider-range ui-widget-header ui-corner-all" style={{left: '0%', width: '100%'}} /><a className="ui-slider-handle ui-state-default ui-corner-all" href="true" style={{left: '0%'}} /><a className="ui-slider-handle ui-state-default ui-corner-all" href="true" style={{left: '100%'}} /></div>
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
                <img className="media-object" src="img/properties/small-properties-1.jpg" alt="small-properties-1" />
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
                <img className="media-object" src="img/properties/small-properties-2.jpg" alt="small-properties-2" />
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
                <img className="media-object" src="img/properties/small-properties-3.jpg" alt="small-properties-3" />
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
              <li><a href="true">Single Family </a> <span>(45)</span></li>
              <li><a href="true">Apartment</a> <span>(21)</span></li>
              <li><a href="true">Condo </a> <span>(23)</span></li>
              <li><a href="true">Multi Family </a> <span>(19)</span></li>
              <li><a href="true">Villa </a> <span>(19)</span></li>
              <li><a href="true">Other</a> <span>(22)</span></li>
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
              <li><a href="true" className="facebook-bg"><i className="fa fa-facebook" /></a></li>
              <li><a href="true" className="twitter-bg"><i className="fa fa-twitter" /></a></li>
              <li><a href="true" className="linkedin-bg"><i className="fa fa-linkedin" /></a></li>
              <li><a href="true" className="google-bg"><i className="fa fa-google-plus" /></a></li>
              <li><a href="true" className="rss-bg"><i className="fa fa-rss" /></a></li>
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