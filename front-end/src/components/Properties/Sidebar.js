/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/role-has-required-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { Component } from 'react';
import moment from 'moment'
import { connect } from 'react-redux'
import * as actions from '../../actions/request'

class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
      selectedOption: null,
    };
  }
  // componentDidMount = () => {
  //   this.props.actFetchEstatesRequest
  // }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }
  ShowRelatedEstate = (estates, selectedEstate) => {
    var result = null;
    if (estates.length > 0) {
      result = estates.map((estate) => {
        if (estate._id !== selectedEstate._id)
          return (
            <div className="media">
              <div className="media-left">
                <img className="media-object" src={estate.url[0] ? estate.url[0] : "/img/properties/small-properties-1.jpg"} alt="small-properties-1" />
              </div>
              <div className="media-body">
                <h3 className="media-heading">
                  <a href="properties-details.html">{estate.name}</a>
                </h3>
                <p>{moment.unix(estate.updateTime).format('DD/MM/YYYY, h:mm a')}</p>
                <div className="price">
                  {estate.price} tỉ
                </div>
              </div>
            </div>
          );
      });
    }
    return result;
  }
  render() {
    let { estates, info } = this.props
    console.log(info)
    console.log(estates)
    return (
      <div>
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          {/* Sidebar start */}
          <div className="sidebar right">
            {/* Search contents sidebar start */}
            <div className="sidebar-widget hidden-xs hidden-sm">
              <div className="main-title-2">
                <h1><span>Tình hình</span> giao dịch</h1>
              </div>
              
            </div>
            {/* Search contents sidebar end */}
            {/* Popular posts start */}
            <div className="sidebar-widget popular-posts">
              <div className="main-title-2">
                <h1><span>Bất động sản </span> liên quan</h1>
              </div>
              {this.ShowRelatedEstate(estates, info)}
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

const mapStateToProps = (state) => {
  return {
    estates: state.estates
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actFetchEstatesRequest: (info) => dispatch(actions.actFetchEstatesRequest(info))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);