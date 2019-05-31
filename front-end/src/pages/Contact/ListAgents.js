import React, { Component } from 'react';
import MainHeader from '../../components/MainHeader'
import Agent from '../../components/Contact/Agent'

class ListAgents extends Component {
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
                                        <span className="hidden-xs">Danh sách nhà môi giới</span>
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
                            <Agent/>
                            <Agent/>
                        </div>
                    </div>
                </div>
                {/* Agent section end */}
            </div>
        );
    }
}

export default ListAgents;