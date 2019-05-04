import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class InfoEstate extends Component {
    
    render() {
        let { estate } = this.props;
        // console.log(estate)
        let url = `/properties/${estate._id}`

        return (
            <Link to = {url} target="_blank">
                <div className="property map-properties-list clearfix">
                    <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12 col-pad property-img height" href="true"> 
                        {/* <a href="true" className="property-img height"> */}
                            <div className="property-tag button alt featured">Featured</div>
                            <div className="property-tag button sale">Sale</div>
                            <div className="property-price">$2505.11</div> <img src="/img/properties/properties-1.jpg" alt="properties" className="img-responsive img-inside-map" />
                        {/* </a>  */}
                    </div>
                    <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12 property-content ">
                        {/* title */}
                        <h1 className="title" href="true"> {estate.name}</h1> {/* Property address */}
                        <h3 className="property-address" href="true"> <i className="fa fa-map-marker" />{estate.address} </h3>{/* Facilities List */}
                        <ul className="facilities-list clearfix">
                            <li> <i className="flaticon-square-layouting-with-black-square-in-east-area" /> <span>2123 sq ft</span> </li>
                            <li> <i className="flaticon-bed" /> <span>5 Beds</span> </li>
                            <li> <i className="flaticon-monitor" /> <span>TV </span> </li>
                            <li> <i className="flaticon-holidays" /><span> 3 Baths</span> </li>
                            <li> <i className="flaticon-vehicle" /><span>1 Garage</span></li>
                            <li> <i className="flaticon-building" /> <span> 3 Balcony</span> </li>
                        </ul>
                        <div className="property-footer left" href="true"> <i className="fa fa-user" />{estate.ownerid} <span className="right"> <i className="fa fa-calendar" />5 days ago</span> </div>
                    </div>
                </div>
            </Link>
        );
    }
}

export default InfoEstate;