import React, { Component } from 'react';
import Company from '../../components/Contact/Company'
import MainHeader from '../../components/MainHeader'

class ListCompaies extends Component {
    render() {
        return (
            <div>
                <MainHeader />
                {/* Agent section start */}
                <div className="agent-section content-area" style={{ backgroundColor: '#ebebeb' }}>
                    <div className="container">
                        {/* option bar start */}
                        <div className="option-bar">
                            <div className="row">
                                <div className="col-lg-6 col-md-5 col-sm-5 col-xs-2">
                                    <h4>
                                        <span className="heading-icon">
                                            <i className="fa fa-th-list" />
                                        </span>
                                        <span className="hidden-xs">Danh sách công ty</span>
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
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* option bar end */}
                        <div class="clearfix"></div>
                        <div className="row">
                            <Company/>
                            <Company/>
                        </div>
                    </div>
                </div>
                {/* Agent section end */}
            </div>
        );
    }
}


export default ListCompaies;