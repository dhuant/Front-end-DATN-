import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class InfoEstateOfAgent extends Component {

    render() {
        let { project } = this.props;
        let url = `/properties/${project._id}`

        return (
            <Link to={url}>
                <div>
                    <div className="property clearfix wow fadeInUp delay-03s" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                        <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12 col-pad">
                            {/* Property img */}
                            <div className="property-img">
                                {/* <div className="property-tag button alt featured">Featured</div>
                                <div className="property-tag button sale">For Sale</div>
                                <div className="property-price">$150,000</div> */}
                                <img src={project.url[0]} alt="fp-list" className="img-responsive hp-1" />
                                {/* <div className="property-overlay">
                                    
                                </div> */}
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12 property-content ">
                            {/* title */}
                            <h1 className="title">
                                <a href="true">{project.name}</a>
                            </h1>
                            <p>{project.info}</p>
                            {/* Property address */}
                            <h6 style={{ fontSize: '13px' }}>
                                <b>Địa chỉ:</b> {project.address}
                        </h6>
                            <h6 style={{ fontSize: '13px' }}>
                                <b>Diện tích:</b> {project.area}
                        </h6>

                            {/* Property footer */}
                            <div className="property-footer">
                                <span className="left">
                                    <a href="true"><i className="fa fa-user" />{project.fullname}</a>
                                </span>
                                <span className="right">
                                    <i className="fa fa-calendar" />5 Days ago
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        );
    }
}

export default InfoEstateOfAgent;