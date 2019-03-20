import React, { Component } from 'react'
import Info from '../components/Profile/Info'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SingleProperty from '../components/Profile/SingleProperty'
import { MY_PROPERTIES } from '../constants/Profile';
import {Link} from 'react-router-dom'

export default class MyEstateList extends Component {
    render() {
        return (
            <div>
                <Header />
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
                                        <SingleProperty />
                                        <SingleProperty />
                                        <SingleProperty />
                                        <SingleProperty />
                                        <SingleProperty />
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
}
