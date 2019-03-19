import React, { Component } from 'react';
import Sidebar from './Sidebar';
import SingleEstate from './SingleEstate'

export default class EstateListComp extends Component {
    render() {
        return (
            <div>
                {/* Sub banner start */}
                <div className="sub-banner overview-bgi">
                    <div className="overlay">
                        <div className="container">
                            <div className="breadcrumb-area">
                                <h1>Properties Grid</h1>
                                <ul className="breadcrumbs">
                                    <li><a href="index.html">Home</a></li>
                                    <li className="active">Properties Grid</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Sub Banner end */}

                <div className="properties-section content-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-xs-12">
                                {/* Option bar start */}
                                <div className="option-bar">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-5 col-sm-5 col-xs-2">
                                            <h4>
                                                <span className="heading-icon">
                                                    <i className="fa fa-th-large" />
                                                </span>
                                                <span className="hidden-xs">Properties Grid</span>
                                            </h4>
                                        </div>
                                        <div className="col-lg-6 col-md-7 col-sm-7 col-xs-10 cod-pad">
                                            <div className="sorting-options">
                                                <select className="sorting">
                                                    <option>New To Old</option>
                                                    <option>Old To New</option>
                                                    <option>Properties (High To Low)</option>
                                                    <option>Properties (Low To High)</option>
                                                </select>
                                                <a href="properties-list-rightside.html" className="change-view-btn"><i className="fa fa-th-list" /></a>
                                                <a href="properties-grid-rightside.html" className="change-view-btn active-view-btn"><i className="fa fa-th-large" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Option bar end */}
                                <div className="clearfix" />

                                <div className="row">
                                    <SingleEstate />
                                    <SingleEstate />
                                    <SingleEstate />
                                    <SingleEstate />
                                    <SingleEstate />
                                    <SingleEstate />
                                    <SingleEstate />
                                    <SingleEstate />
                                    <SingleEstate />
                                </div>

                                {/* Page navigation start */}
                                <nav aria-label="Page navigation">
                                    <ul className="pagination">
                                        <li>
                                            <a href="#" aria-label="Previous">
                                                <span aria-hidden="true">«</span>
                                            </a>
                                        </li>
                                        <li className="active"><a href="properties-grid-rightside.html">1 <span className="sr-only">(current)</span></a></li>
                                        <li><a href="properties-grid-leftside.html">2</a></li>
                                        <li><a href="properties-grid-fullwidth.html">3</a></li>
                                        <li>
                                            <a href="properties-grid-fullwidth.html" aria-label="Next">
                                                <span aria-hidden="true">»</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                                {/* Page navigation end*/}
                            </div>

                            <Sidebar />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}