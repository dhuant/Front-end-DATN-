import React, { Component } from 'react';
import PropertiesDetail from '../components/Properties/PropertiesDetail'
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainHeader from '../components/MainHeader';
import Sidebar from '../components/Properties/Sidebar'
class Properties extends Component {
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

export default Properties;
