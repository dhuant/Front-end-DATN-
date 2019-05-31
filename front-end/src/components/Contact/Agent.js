import React, { Component } from 'react';

class Agent extends Component {
    render() {
        return (
            <div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    {/* Agent box 2start */}
                    <div className="agent-2 clearfix">
                        <div className="col-lg-5 col-md-5 col-sm-4 agent-theme-2">
                            <img src="img/team-2/team-2.jpg" alt="team-2" className="img-responsive" />
                            {/* social list */}
                            
                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-8 agent-content">
                            <h5>Web Developer</h5>
                            <h3>
                                <a href="agent-single.html">Karen Paran</a>
                            </h3>
                            <ul>
                                <li>
                                    <strong>Address:</strong><a href="true"> 44 New Design Street,</a>
                                </li>
                                <li>
                                    <strong>Email:</strong><a href="mailto:info@themevessel.com"> info@themevessel.com</a>
                                </li>
                                <li>
                                    <strong>Mobile:</strong><a href="tel:+554XX-634-7071"> +55 4XX-634-7071</a>
                                </li>
                                <li>
                                    <strong>Fax:</strong><a href="true"> +0477 85X6 552</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Agent box 2 end */}
                </div>
            </div>
        );
    }
}

export default Agent;