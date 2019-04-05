import React, { Component } from 'react';
import Footer from '../components/Footer';
import { connect } from 'react-redux';
// import * as Types from './../constants/ActionTypes';
import * as actions from '../actions/request';
import MainHeader from '../components/MainHeader';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { authHeader } from '../constants/authHeader';
import MapSearching from '../components/Map/MapSearching'

const Types = [
    { value: 'Căn hộ, Chung cư', label: 'Căn hộ, Chung cư' },
    { value: 'Biệt thự', label: 'Biệt thự' },
    { value: 'Nhà đất', label: 'Nhà đất' },
];

const Area = [
    { value: '30-50', label: '30 - 50 m2' },
    { value: '70-110', label: '70 - 110 m2' },
];
const Price = [
    { value: '1000-10000', label: '1000 - 10000' },
    { value: '10000-20000', label: '10000 - 20000' },
];
const Status = [
    {value: 'sell', label: 'Sell'},
    {value: 'rented', label: 'Rented'},
    {value: 'sold', label: 'Sold'},
    {value: 'rent', label: 'Rent'},
];
class SubmitProperty extends Component {
    constructor() {
        super();
        this.state = {
            selectedOption: null,
            status: Status[0].value,
            type: Types[0].value,
            area: Area[0].value,
            price: Price[0].value,
            name: '',
            description: ''
        };
    }
    // handleChange = (selectedOption) => {
    //     this.setState({ selectedOption });
    //     console.log(`Option selected:`, selectedOption);
    // }
    onHandleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    onSubmit = () => {
        // let ownid = JSON.parse(localStorage.getItem('user'));
        // let info = {
        //     name: "Biệt phủ",
        //     investor: "uscandymc",
        //     price: 600000,
        //     unit: 'triệu',
        //     area: 800,
        //     address: '277 Phan Đình Phùng, Phường 15, Phú Nhuận, Hồ Chí Minh, Việt Nam',
        //     type: 'Biệt phủ',
        //     info: 'Đang cập nhật',
        //     lat: 10.7971632,
        //     long: 106.6804359,
        //     ownerid: ownid.id,
        //     statusProject: 'sell'
        // };
        let info = {
            name: this.state.name,
            investor: "uscandymc",
            price: this.state.price,
            unit: 'triệu',
            area: 800,
            address: this.props.address.addressDetail,
            type: this.state.type,
            info: this.state.description,
            lat: this.props.address.markerPosition.lat,
            long: this.props.address.markerPosition.lng,
            ownerid: "5ca7252d6f6dcf410404d1d1",
            statusProject: this.state.status
        };
        console.log(info);
        axios.post('http://localhost:3001/projects/', info, { headers: authHeader() })
            .then(res => {
                console.log(res);
            });

    }
    render() {
        // const { selectedOption } = this.state;
        let { type} = this.state;
        console.log(this.props.address)

        return (
            <div>

                <MainHeader />
                {
                    /* Sub banner start */
                }
                <div className="sub-banner overview-bgi">
                    <div className="overlay">
                        <div className="container">
                            <div className="breadcrumb-area">
                                <h1>Submit Property</h1>
                                <ul className="breadcrumbs">
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li className="active">Submit Property</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    /* Sub Banner end */
                }

                <div className="content-area-7 submit-property">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="notification-box">
                                    <h3>Don't Have an Account?</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Aenean ac tortor at tellus feugiat congue quis ut nunc.
                                        Semper ac dolor vitae accumsan.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="submit-address">
                                    <form method="GET">
                                        <div className="main-title-2">
                                            <h1>
                                                <span>Basic</span> Information
              </h1>
                                        </div>
                                        <div className="search-contents-sidebar mb-30">
                                            <div className="form-group">
                                                <label>Property Name</label>
                                                <input
                                                    type="text"
                                                    className="input-text"
                                                    name="name"
                                                    placeholder="Property Name"
                                                    onChange={this.onHandleChange}
                                                />
                                            </div>
                                            <div className="row">
                                                <div className="col-md-3 col-sm-6">
                                                    <div className="form-group">
                                                        <label>Status</label>
                                                        <select className="form-control"
                                                            name="status"
                                                            value={type}
                                                            onChange={this.onHandleChange}
                                                            >
                                                            {Status.map((type, index) => <option key={index} value={type.value}>{type.label}</option>)}

                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 col-sm-6">
                                                    <div className="form-group">
                                                        <label>Type</label>
                                                        <select className="form-control"
                                                            name="type"
                                                            value={type}
                                                            onChange={this.onHandleChange}
                                                            >
                                                            {Types.map((type, index) => <option key={index} value={type.value}>{type.label}</option>)}

                                                        </select>
                                                    </div>
                                                </div>


                                                <div className="col-md-3 col-sm-6">
                                                    <div className="form-group">
                                                        <label>Price</label>
                                                        <input
                                                            type="text"
                                                            className="input-text"
                                                            name="price"
                                                            placeholder="USD"
                                                            onChange={this.onHandleChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-3 col-sm-6">
                                                    <div className="form-group">
                                                        <label>Area</label>
                                                        <input
                                                            type="text"
                                                            className="input-text"
                                                            name="area"
                                                            placeholder="SqFt"
                                                            onChange={this.onHandleChange}
                                                        />
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <div style={{paddingBottom: '80px'}}>
                                            <MapSearching
                                                google={this.props.google}
                                                center={{ lat: 10.7625626, lng: 106.6805316 }}
                                                height='300px'
                                                zoom={15}
                                            />
                                        </div>

                                        <div className="main-title-2">
                                            <h1>
                                                <span>Detailed</span> Information
                                            </h1>
                                        </div>
                                        <div className="row mb-30">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label>Detailed Information</label>
                                                    <textarea
                                                        className="input-text"
                                                        name="description"
                                                        placeholder="Detailed Information"
                                                        defaultValue={""}
                                                        onChange={this.onHandleChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="row">
                                            
                                            <div className="col-md-12">
                                                <a href className="btn button-md button-theme" onClick={this.onSubmit}>
                                                    Preview
                                                </a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    /* Submit Property end */
                }
                <Footer />

            </div>
        );
    }
}

const mapDispathToProp = (dispatch) => {
    return {
        actFetchEstatesRequest: (info) => dispatch(actions.actFetchEstatesRequest(info))
    }
}
const mapStateToProp = (state) => {
    return {
        user: state.user,
        address: state.address
    }
}
export default connect(mapStateToProp, mapDispathToProp)(SubmitProperty);