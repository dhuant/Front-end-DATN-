import React, { Component } from 'react';
import Company from '../../components/Contact/Company'
import MainHeader from '../../components/MainHeader'
import * as actions from '../../actions/Contact/requestContact';
import { connect } from 'react-redux';
import {Pagination} from 'antd'

class ListCompaies extends Component {
    constructor(props) {
        super(props);
        this.state ={
            page: 1,
        }
        this.props.reqGetListCompanies(this.props.match.params.page);

    }
    componentDidMount(){
        this.props.reqGetListCompanies(this.props.match.params.page);
    }
    render() {
        let {companies} = this.props;
        console.log(companies);
        let des =''
        let listCompanies = <h5 style={{marginLeft:'15px'}}>Hiện không có công ty nào</h5>;
		if (companies.length > 0) {
			
			des = `Hiện đang có ${companies.length} công ty đối tác trên hệ thống`
			listCompanies = companies.map((company, index) => {
				return (
					<Company
						key={index}
						company={company}
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
                            {listCompanies}
                        </div>
                        <div>
                        {/* <Pagination current={this.state.current} pageSize={pageSize}onChange={this.onChange} total={total} /> */}

                        </div>
                    </div>
                </div>
                {/* Agent section end */}
            </div>
        );
    }
}

const mapDispathToProp = (dispatch) => {
    return {
        reqGetListCompanies: (page) => dispatch(actions.reqGetListCompanies(page))
    }
}
const mapStateToProp = (state) => {
    return {
        companies: state.companies
    }
}

export default connect(mapStateToProp, mapDispathToProp)(ListCompaies);