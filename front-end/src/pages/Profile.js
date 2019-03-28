import React, { Component } from 'react';
import Info from '../components/Profile/Info'
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainHeader from '../components/MainHeader';
import Detail from '../components/Profile/Detail'
import { PROFILE } from '../constants/Profile';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from '../actions/request';
class Profile extends Component {
    componentDidMount(){
        this.props.actGetInfoUser(this.props.match.params.id);
    }
    render() {
        let {user} = this.props;
        console.log(user);
        return (
            <div>
                
                <MainHeader />
                {/* Sub banner start */}
                <div className="sub-banner overview-bgi">
                    <div className="overlay">
                        <div className="container">
                            <div className="breadcrumb-area">
                                <h1>My Profile</h1>
                                <ul className="breadcrumbs">
                                    <li><Link to="/">Home</Link></li>
                                    <li className="active">My Profile</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Sub Banner end */}
                <div className="content-area my-profile">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <Info component={PROFILE} user={user}/>
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-12">
                                <Detail user={user}/>
                            </div>
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
        actGetInfoUser: (id) => dispatch(actions.actGetInfoUser(id))
    }
}
const mapStateToProp = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProp,mapDispathToProp)(Profile);
