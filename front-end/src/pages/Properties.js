import React, { Component } from 'react';
import PropertiesDetail from '../components/Properties/PropertiesDetail'
import Footer from '../components/Footer';
import MainHeader from '../components/MainHeader';
import { connect } from 'react-redux';
import * as actions from '../actions/request';
import {Link} from 'react-router-dom'

class Properties extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            
        }
    }
    componentDidMount(){
        this.props.actGetEstateRequest(this.props.match.params.id);
        console.log(this.props.match.params.id);
    }
    render() {

        let {info} = this.props;
        let detail = '';
        if(info){
            console.log(info);
            detail = <PropertiesDetail info={info}/>
        }
        
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
                            {/* <PropertiesDetail info={info} id={this.props.match.params.id}/> */}
                            {detail}
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
