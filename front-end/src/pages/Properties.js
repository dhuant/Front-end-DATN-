import React, { Component } from 'react';
import PropertiesDetail from '../components/Properties/PropertiesDetail'
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainHeader from '../components/MainHeader';
import axios from 'axios'
import Sidebar from '../components/Properties/Sidebar'
import { connect } from 'react-redux';
import * as Types from './../constants/ActionTypes';
import * as actions from '../actions/request';
import {Link} from 'react-router-dom'
class Properties extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ''
        }
    }
    componentDidMount(){
        this.props.actGetEstateRequest(this.props.match.params.id);
        this.setState({
            error:'success'
        })
    }
    render() {

        let info = this.props.info;
        console.log(info);
        
        return (
            <div>
                <MainHeader />
                {/* Sub banner start */}
                <div className="sub-banner overview-bgi">
                    <div className="overlay">
                        <div className="container">
                            <div className="breadcrumb-area">
                                <h1>Properties Detail</h1>
                                <ul className="breadcrumbs">
                                    <li><Link to="/">Home</Link></li>
                                    <li className="active">Properties Detail</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Sub Banner end */}
                <div className="content-area  properties-details-page">
                    <div className="container">
                        <div className="row">
                            <PropertiesDetail info={info}/>
                        </div>
                    </div>
                </div>
                <Footer />
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
        info: state.estateInfo
    }
}
export default connect(mapStateToProp, mapDispathToProp)(Properties);
