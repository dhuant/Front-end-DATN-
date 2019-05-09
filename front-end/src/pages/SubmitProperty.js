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
import { Button, Form } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { message } from 'antd'
import moment from 'moment'

const Types = [
    { value: '1', label: 'Phong thủy' },
    { value: '2', label: 'Nội thất' },
    { value: '3', label: 'Ngoại thất' },
    { value: '4', label: 'Xây dựng' },
    { value: '5', label: 'Kiến trúc' },
    { value: '6', label: 'Tài chính' },
    { value: '7', label: 'Luật bất động sản' },
];

const Status = [
    { value: '1', label: 'Sell' },
    { value: '2', label: 'Rented' },
    { value: '3', label: 'Sold' },
    { value: '4', label: 'Rent' },
];
class SubmitProperty extends Component {
    constructor() {
        super();
        this.state = {
            selectedOption: null,
            status: Status[0].value,
            type: Types[0].value,
            area: '',
            price: '',
            name: '',
            description: '',
            imageURLs: [],
            investor: '',
            loading: false,
            toastError: '',
            url: '',
            publicId: ''
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
        if (this.state.name === ''
            || this.state.investor === ''
            || this.state.area === ''
            || this.state.price === ''
            || this.state.description === '') {
            return null
        }
        if (this.state.name.length > 32) {
            this.onCheckingError('Name')
            return null
        }
        else {
            let ownerID = JSON.parse(localStorage.getItem('res')).user._id
            let info = {
                name: this.state.name,
                investor: this.state.investor,
                price: this.state.price,
                unit: 'triệu',
                area: 800,
                address: this.props.address.addressDetail,
                type: this.state.type,
                info: this.state.description,
                lat: this.props.address.markerPosition.lat,
                long: this.props.address.markerPosition.lng,
                ownerid: ownerID,
                statusProject: this.state.status,
                createTime: moment().unix(),
                updateTime: moment().unix(),
                // urlImageList: { ...this.state.imageURLs },
                url: this.state.url,
                publicId: this.state.publicId
            };
            console.log(info);
            axios.post('http://localhost:3001/projects/', info, { headers: authHeader() })
                .then(res => {
                    console.log(res);
                    if (res.status === 201)
                        return message.success('Add project successfully!');
                    else return message.error('Failed to add project!');
                });
        }

    }
    onCheckingError = (errorContent) => {
        switch (errorContent) {
            case "Name":
                return toast.error("Có vấn đề với tên bài đăng! Vui lòng kiểm tra lại!", { position: toast.POSITION.TOP_RIGHT })
            case "Investor":
                return toast.error("Có vấn đề với tên nhà đầu tư! Vui lòng kiểm tra lại!", { position: toast.POSITION.TOP_RIGHT })
            case "Price":
                return toast.error("Có vấn đề với giá! Vui lòng kiểm tra lại! Hãy chắc chắn bạn nhập vào những con số", { position: toast.POSITION.TOP_RIGHT })
            case "Area":
                return toast.error("Có vấn đề với diện tích! Vui lòng kiểm tra lại! Hãy chắc chắn bạn nhập vào những con số", { position: toast.POSITION.TOP_RIGHT })
            case "DetailInformation":
                return toast.error("Có vấn đề với thông tin chi tiết! Vui lòng kiểm tra lại!", { position: toast.POSITION.TOP_RIGHT })
            default:
                break;
        }
    }
    getUrlList = (urlArray, publicIdArray) => {
        console.log(urlArray)
        console.log(publicIdArray)
        console.log(urlArray.length)
        let urlString = ' ' 
        urlArray.forEach(url => {
            urlString = urlString + url + ','
        })
        console.log(urlString)
        let publicIdString = ' '
        publicIdArray.forEach(publicId => {
            console.log('b') 
            publicIdString += (publicId + ',')
        })
        console.log(publicIdString)
        this.setState({
            url: urlString,
            publicId: publicIdString
        })
    }
    showWidget = () => {
        let urlList = []
        let urlArray = []
        let publicIdArray = []
        window.cloudinary.openUploadWidget({
            cloudName: "dne3aha8f",
            uploadPreset: "dels6a22",
            // sources: ['local', 'camera', 'url', ],
            googleApiKey: "AIzaSyC1xuTe6sMtQCoQZI0X3lkeRZHyyI7CReQ",
            searchBySites: ["all"],
            searchByRights: true,
            maxFiles: 5,
            cropping: false,
            maxFileSize: 500000,
            theme: "white",
            showPoweredBy: false,
            showCompletedButton: true
        },
            (error, result) => { this.checkUploadResult(result, urlArray, publicIdArray) })
    }
    checkUploadResult = (resultEvent, urlArray, publicIdArray) => {
        if (resultEvent.event === 'success') {
            console.log(resultEvent)
            urlArray.push(resultEvent.info.secure_url)
            publicIdArray.push(resultEvent.info.public_id)
        }
        this.getUrlList(urlArray, publicIdArray)
        // else if (resultEvent.event === 'show-completed'){
            // urlArray.push(resultEvent.info.secure_url)
            // publicIdArray.push(resultEvent.info.public_id)
            // this.getUrlList(urlArray, publicIdArray)
        // }
        // console.log(url)
    }
    render() {
        // const { selectedOption } = this.state;
        let { type } = this.state;
        console.log(this.props.address)
        console.log(this.state.url)
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
                                <div className="submit-address">
                                    <form method="GET">
                                        <div className="main-title-2">
                                            <h1>
                                                <span>Thông tin</span> cơ bản
              </h1>
                                        </div>
                                        <div className="search-contents-sidebar mb-30">
                                            <div className="row">
                                                <div className="col-md-6 col-sm-6">
                                                    <div className="form-group">
                                                        <label>Tên bài đăng</label>
                                                        <input
                                                            type="text"
                                                            className="input-text"
                                                            name="name"
                                                            placeholder="Tên bài đăng"
                                                            onChange={this.onHandleChange}
                                                            required
                                                        />
                                                        {/* <Form.Control type="email" placeholder="Enter email" required=""/> */}
                                                        <Form.Text className="text-muted" style={{ color: "#827f7f" }}>Tên bài đăng không bao gồm các kí tự đặc biệt (~!@#,...)</Form.Text>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6">
                                                    <div className="form-group">
                                                        <label>Nhà đầu tư</label>
                                                        <input
                                                            type="text"
                                                            className="input-text"
                                                            name="investor"
                                                            placeholder="Nhà đầu tư"
                                                            onChange={this.onHandleChange}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-3 col-sm-6">
                                                    <div className="form-group">
                                                        <label>Trạng thái</label>
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
                                                        <label>Loại</label>
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
                                                        <label>Giá</label>
                                                        <input
                                                            type="text"
                                                            className="input-text"
                                                            name="price"
                                                            placeholder="USD"
                                                            onChange={this.onHandleChange}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-3 col-sm-6">
                                                    <div className="form-group">
                                                        <label>Diện tích</label>
                                                        <input
                                                            type="text"
                                                            className="input-text"
                                                            name="area"
                                                            placeholder="Diện tích"
                                                            onChange={this.onHandleChange}
                                                            required
                                                        />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div style={{ paddingBottom: '80px' }}>
                                            <MapSearching
                                                google={this.props.google}
                                                center={{ lat: 10.7625626, lng: 106.6805316 }}
                                                height='300px'
                                                zoom={15}
                                            />
                                        </div>

                                        <div className="main-title-2">
                                            <h1>
                                                <span>Thông tin</span> chi tiết
                                            </h1>
                                        </div>
                                        <div className="row mb-30">
                                            <div className="col-md-12">
                                                <div className="form-group" style={{ marginBottom: '0px' }}>
                                                    <label>Nội dung bài đăng</label>
                                                    <textarea
                                                        className="input-text"
                                                        name="description"
                                                        placeholder="Nhập nội dung bài đăng ở đây..."
                                                        defaultValue={""}
                                                        onChange={this.onHandleChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-12">
                                                <Button variant="info" style={{ float: "right", fontSize: '12px', marginTop: "0px" }} onClick={this.showWidget}>Đăng hình kèm theo</Button>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-12">
                                                <input
                                                    type="submit"
                                                    value="Đăng bài"
                                                    name="submit"
                                                    className="btn button-md button-theme"
                                                    style={{ fontSize: "16px", padding: "15px 30px 15px 30px" }}
                                                    onClick={this.onSubmit}
                                                >
                                                </input>
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