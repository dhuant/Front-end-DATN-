import React, { Component } from 'react';
import Info from '../components/Profile/Info'
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainHeader from '../components/MainHeader';
import Detail from '../components/Profile/Detail'
class Profile extends Component {
    render() {
        return (
            <div>
                <Header />
                <MainHeader />
                <div className="content-area my-profile">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <Info />
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-12">
                                <Detail />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Profile;