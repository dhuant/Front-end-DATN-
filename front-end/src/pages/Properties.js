import React, { Component } from 'react';
import PropertiesDetail from '../components/Properties/PropertiesDetail'
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainHeader from '../components/MainHeader';
import Sidebar from '../components/Properties/Sidebar'
import { connect } from 'react-redux';
import * as Types from './../constants/ActionTypes';
import * as actions from '../actions/request';
class Properties extends Component {
    componentDidMount(){
        if (this.props.match){
            this.props.actGetEstateRequest(this.props.match.params.id)
        }
    }
    render() {
        return (
            <div>
                <Header />
                <MainHeader />
                <div className="content-area  properties-details-page">
                    <div className="container">
                        <div className="row">
                            <PropertiesDetail />
                            {/* <Sidebar/> */}
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}
const mapDispathToProp = (dispatch) => {
	return {
		actGetEstateRequest: (id) => dispatch(actions.actGetEstateRequest(id))
	}
}
const mapStateToProp = (state) => {
	return {
		estate: state.estate
	}
}
export default connect(mapStateToProp, mapDispathToProp) (Properties);
