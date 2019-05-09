import React, { Component } from 'react'
import Info from '../components/Profile/Info'
import Footer from '../components/Footer'
import SingleProperty from '../components/Profile/SingleProperty'
import { MY_PROPERTIES } from '../constants/Profile';
import {Link} from 'react-router-dom'
import MainHeader from '../components/MainHeader';
import {connect} from 'react-redux'
import * as actions from '../actions/request';

class MyEstateList extends Component {
    componentDidMount =() => {
        this.props.onGetEstateListOfUser()
    }
    render() {
        let {estatesListOfUser} = this.props
        console.log(estatesListOfUser)
        return (
            <div>
                <MainHeader />
                {/* Sub banner start */}
                <div className="sub-banner overview-bgi">
                    <div className="overlay">
                        <div className="container">
                            <div className="breadcrumb-area">
                                <h1>My Properties</h1>
                                <ul className="breadcrumbs">
                                    <li><Link to="/">Home</Link></li>
                                    <li className="active">My Properties</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Sub Banner end */}

                {/* My Propertiess start */}
                <div className="content-area-7 my-properties">
                    <div className="container">
                        <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                <Info component={MY_PROPERTIES}/>
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-12">
                                <div className="main-title-2">
                                    <h1><span>My</span> Properties</h1>
                                </div>
                                {/* table start */}
                                <table className="manage-table responsive-table">
                                    <tbody>
                                        {this.onShowEstateListOfUser(estatesListOfUser)}
                                    </tbody>
                                </table>
                                {/* table end */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* My Propertiess end */}
                <Footer />
            </div>
        )
    }
    onShowEstateListOfUser = (estates) => {
        var result = null;
        if (estates.length > 0) {
            result = estates.map((estate, index) => {
                return (
                    <SingleProperty key={index} estateListOfUser={estate} />

                );
            });
        }
        return result;
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onGetEstateListOfUser: () => dispatch(actions.actGetEstateListOfUserRequest())
    }
}

const mapStateToProps = (state) => {
    return {
        estatesListOfUser: state.estateListOfUser
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyEstateList)
