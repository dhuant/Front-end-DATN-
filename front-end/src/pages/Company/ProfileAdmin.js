import React, { Component } from 'react';
import HeaderCompany from '../../components/Company/HeaderCompany'
import { connect } from 'react-redux';
import * as actions from '../../actions/Company/requestCompany';
import { Link } from 'react-router-dom';
import { PROFILE } from '../../constants/Company/profileCompany';
import Login from '../../pages/Login'
import Footer from '../../components/Footer'
import InfoCompany from '../../components/Company/ProfileCompany/InfoCompany'
import DetailCompany from '../../components/Company/ProfileCompany/DetailCompany'



class ProfileAdmin extends Component {
    render() {
        let { userCompany } = this.props;
        if (JSON.parse(localStorage.getItem('company')))
            return (
                <div>
                    <HeaderCompany />
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
                                    <InfoCompany component={PROFILE} user={userCompany} />
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-12">
                                    <DetailCompany user={userCompany} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            );
        else return (
            <Login />
        )
    }
}

const mapDispathToProp = (dispatch) => {
    return {
        actGetInfoUserCompany: (id) => dispatch(actions.actGetInfoUserCompany(id))
    }
}
const mapStateToProp = (state) => {
    return {
        userCompany: state.userCompany
    }
}

export default connect(mapStateToProp, mapDispathToProp)(ProfileAdmin);
