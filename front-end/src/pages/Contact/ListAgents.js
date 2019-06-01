import React, { Component } from 'react';
import MainHeader from '../../components/MainHeader'
import Agent from '../../components/Contact/Agent'
import Footer from '../../components/Footer'
import * as actions from '../../actions/Contact/requestContact';
import { connect } from 'react-redux';

class ListAgents extends Component {
    constructor(props) {
        super(props);
        this.state ={
            page: 1,
        }
        this.props.reqGetListAgents(this.state.page);

    }
    componentDidMount(){
        this.props.reqGetListAgents(this.state.page);
    }
    render() {
        let {agents} = this.props;
        console.log(agents);
        let des =''
        let listAgents = <h5 style={{marginLeft:'15px'}}>Không có nhà môi giới nào</h5>;
		if (agents.length > 0) {
			// if (option === '1') {
			// 	agents = agents.sort((a, b) => (a.price - b.price))
			// }
			// else if(option === '2'){
			// 	agents = agents.sort((a, b) => (b.price - a.price))
			// }
			// else if(option === '3') {
			// 	agents = agents.sort((a, b) => (a.area - b.area))
			// }
			// else if(option === '4') {
			// 	agents = agents.sort((a, b) => (b.area - a.area))
			// }
			des = `Có ${agents.length} nhà môi giới`
			listAgents = agents.map((agent, index) => {
				return (
					<Agent
						key={index}
						agent={agent}
					/>
				)
			}
			)
		}
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
                            {listAgents}
                        </div>
                    </div>
                </div>
                {/* Agent section end */}
                <Footer/>
            </div>
        );
    }
}


const mapDispathToProp = (dispatch) => {
    return {
        reqGetListAgents: (page) => dispatch(actions.reqGetListAgents(page))
    }
}
const mapStateToProp = (state) => {
    return {
        agents: state.agents
    }
}

export default connect(mapStateToProp, mapDispathToProp)(ListAgents);
