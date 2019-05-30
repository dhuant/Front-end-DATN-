import React, { Component } from 'react'
import Info from '../components/Profile/Info'
import Footer from '../components/Footer'
import SingleProperty from '../components/Profile/SingleProperty'
import { MY_PROPERTIES } from '../constants/Profile';
import { Link } from 'react-router-dom'
import MainHeader from '../components/MainHeader';
import { connect } from 'react-redux'
import * as actions from '../actions/request';
import Login from '../pages/Login'

class MyEstateList extends Component {
    componentDidMount = () => {
        this.props.onGetEstateListOfUser()
    }
    render() {
        let { estatesListOfUser } = this.props
        if (estatesListOfUser === undefined) {
            localStorage.removeItem("res")
        }
        console.log(estatesListOfUser)
        if(JSON.parse(localStorage.getItem('res')))
        return (
            <div>
                <MainHeader />
                {/* Sub banner start */}
                <div className="sub-banner overview-bgi">
                    <div className="overlay">
                        <div className="container">
                            <div className="breadcrumb-area">
                                <h1>Bài đăng của tôi</h1>
                                <ul className="breadcrumbs">
                                    <li><Link to="/">Trang chủ</Link></li>
                                    <li className="active">Bài đăng của tôi</li>
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
                                <Info component={MY_PROPERTIES} />
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-12">
                                <div className="main-title-2">
                                    <h1><span>Bài đăng</span> của tôi</h1>
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
        else return <Login />
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
        else if(estates.length === 0 || estates === undefined){
            result = (<span>Hiện không có bài đăng nào!</span>)
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
        estatesListOfUser: state.estatesListOfUser
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyEstateList)
