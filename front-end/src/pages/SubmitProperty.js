import React, { Component } from 'react';
import Footer from '../components/Footer';
import { connect } from 'react-redux';
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
import LoginModal from '../components/LoginModal'
import AddressData from '../countries-flat.json'

const Types = [
    { value: '1', label: 'Chung cư. căn hộ' },
    { value: '2', label: 'Nhà ở' },
    { value: '3', label: 'Đất' },
    { value: '4', label: 'Văn phòng, mặt bằng kinh doanh' },

];

const Status = [
    { value: '1', label: 'Bất động sản bán' },
    { value: '3', label: 'Bất động sản thuê' },

];

const Unit = [
    { value: '1', label: 'Triệu' },
    { value: '2', label: 'Tỉ' },
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
            url: [],
            publicId: [],
            previewVisible: false,
            previewImage: '',
            contactname: '',
            contactphonenumber: '',
            contactemail: '',
            visible: false,
            addressList: [],
            city: '',
            ward: '',
            state: '',
            mapPosition: {
				lat: 10.7625626,
				lng: 106.6805316
			},
			markerPosition: {
				lat: 10.7625626,
				lng: 106.6805316
			}
        };

        // this.onHandleChange = this.onHandleChange.bind(this)
    }

    // componentDidMount =() => {
    //     var address = this.onGettingAddress
    //     Geocode.fromAddress(address).then(
	// 		response => {
	// 			const { lat, lng } = response.results[0].geometry.location;
	// 			console.log(lat, lng);
	// 			this.setState({
	// 				markerPosition: {
	// 					lat: lat ? lat : this.state.markerPosition.lat,
	// 					lng: lng ? lng : this.state.markerPosition.lng,
	// 				},
	// 				mapPosition: {
	// 					lat: lat ? lat : this.state.mapPosition.lat,
	// 					lng: lng ? lng : this.state.mapPosition.lng,
	// 				},
	// 			})
	// 		},
	// 		error => {
	// 			console.error(error);
	// 		}
	// 	);
    // }

    handleCancel = () => this.setState({ previewVisible: false })

    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }

    handleChangeImageList = ({ fileList }) => this.setState({ fileList })

    onHandleChangeAddress = (event) => {
        let target = event.target
        let name = target.name
        let value = target.value
        this.setState({ [name]: value });
    }

    onGettingAddress = () => {
        var address = ''
        if (document.getElementById('street') !== undefined)
            address = document.getElementById('street').value + ', ' + this.state.ward + ', ' + this.state.city + ', ' + this.state.state
        else address = this.state.ward + ', ' + this.state.city + ', ' + this.state.state
        console.log(address)
    }
    onSubmit = (e) => {
        if (localStorage.getItem('res') === undefined || localStorage.getItem('res') === null) {
            message.warning("Bạn cần phải đăng nhập trước khi đăng bài!")
            return <LoginModal visible={true} />
        }

        e.preventDefault()
        console.log(document.getElementById('name').value)
        if (document.getElementById('name').value === undefined
            || document.getElementById('investor').value === undefined
            || document.getElementById('price').value === undefined
            || document.getElementById('area').value === undefined
            || document.getElementById('description').value === undefined) {
            return message.error("Có trường thông tin nào đó bạn chưa nhập! Vui lòng kiểm tra lại!")
        }
        else {
            let ownerID = JSON.parse(localStorage.getItem('res')).user._id
            // let info = {
            //     name: this.state.name,
            //     investor: this.state.investor,
            //     price: this.state.price,
            //     unit: 'triệu',
            //     area: 800,
            //     address: this.props.address.addressDetail,
            //     type: this.state.type,
            //     info: this.state.description,
            //     lat: this.props.address.markerPosition.lat,
            //     long: this.props.address.markerPosition.lng,
            //     ownerid: ownerID,
            //     statusProject: this.state.status,
            //     createTime: moment().unix(),
            //     updateTime: moment().unix(),
            //     url: this.state.url,
            //     publicId: this.state.publicId,
            //     fullname: this.state.contactname,
            //     phone: this.state.contactphonenumber,
            //     email: this.state.contactemail,
            //     avatar: JSON.parse(localStorage.getItem('res')).user.avatar
            // };
            let info = {
                name: document.getElementById("name").value,
                investor: document.getElementById('investor').value,
                price: document.getElementById('price').value,
                unit: document.getElementById('unit').value,
                area: document.getElementById('area').value,
                address: this.props.address.addressDetail === '' ? localStorage.getItem('defaultAddress') : this.props.address.addressDetail,
                type: document.getElementById('type').value,
                info: document.getElementById('description').value,
                lat: this.props.address.markerPosition === undefined ? 10.7625626 : this.props.address.markerPosition.lat,
                long: this.props.address.markerPosition === undefined ? 106.6805316 : this.props.address.markerPosition.lng,
                ownerid: ownerID,
                statusProject: document.getElementById('status').value,
                createTime: moment().unix(),
                updateTime: moment().unix(),
                url: this.state.url,
                publicId: this.state.publicId,
                fullname: document.getElementById('contactname').value,
                phone: document.getElementById('contactphonenumber').value,
                email: document.getElementById('contactemail').value,
                avatar: JSON.parse(localStorage.getItem('res')).user.avatar === undefined ? localStorage.getItem('avatar') : JSON.parse(localStorage.getItem('res')).user.avatar
            }
            console.log(info);
            axios.post('http://localhost:3001/projects/', info, { headers: authHeader() })
                .then(res => {
                    console.log(res);
                    if (res.status === 201) {
                        message.success('Add project successfully!');
                        this.props.history.goBack()
                    }
                    else message.error('Failed to add project!');
                });
        }

    }
    
    getUrlList = (urlArray, publicIdArray) => {
        this.setState({
            url: urlArray,
            publicId: publicIdArray
        })
    }
    showWidget = () => {
        let urlArray = []
        let publicIdArray = []
        window.cloudinary.openUploadWidget({
            cloudName: "dne3aha8f",
            uploadPreset: "dels6a22",
            googleApiKey: "AIzaSyC1xuTe6sMtQCoQZI0X3lkeRZHyyI7CReQ",
            searchBySites: ["all"],
            searchByRights: true,
            maxFiles: 5,
            cropping: false,
            maxFileSize: 500000,
            theme: "white",
            showPoweredBy: false,
        },
            (error, result) => { this.checkUploadResult(result, urlArray, publicIdArray) })
    }
    checkUploadResult = (resultEvent, urlArray, publicIdArray) => {
        if (resultEvent.event === 'success') {
            urlArray.push(resultEvent.info.secure_url)
            publicIdArray.push(resultEvent.info.public_id)
        }
        this.getUrlList(urlArray, publicIdArray)
    }

    parseStateData = (AddressData) => {
        var result = []
        AddressData.map((data => {
            if (data.country === 'Vietnam' && result.indexOf(data.state) === -1) {
                result.push(data.state)
            }
        }))
        return result.sort()
    }

    parseCityData = (AddressData, stateValue) => {
        var result = []
        AddressData.map(data => {
            if (data.country === 'Vietnam' && data.state === stateValue && result.indexOf(data.city) === -1) {
                result.push(data.city)
            }
        })
        return result.sort()
    }

    parseWardData = (AddressData, stateValue, cityValue) => {
        var result = []
        AddressData.map(data => {
            if (data.country === 'Vietnam' && data.state === stateValue && data.city === cityValue && result.indexOf(data.ward) === -1) {
                result.push(data.ward)
            }
        })
        return result.sort()
    }
    render() {
        var { visible, addressList, city, ward, state } = this.state;
        var stateList = this.parseStateData(AddressData)
        var cityList = this.parseCityData(AddressData, state)
        var wardList = this.parseWardData(AddressData, state, city)
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
                                    <form method="GET" action="submit">
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
                                                            id="name"
                                                            placeholder="Tên bài đăng"
                                                            // onChange={this.onHandleChange}
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
                                                            id="investor"
                                                            placeholder="Nhà đầu tư"
                                                            // onChange={this.onHandleChange}
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
                                                            id="status"
                                                        // value={type}
                                                        // onChange={this.onHandleChange}
                                                        >
                                                            {Status.map((status, index) => <option key={index} value={status.value}>{status.label}</option>)}

                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 col-sm-6">
                                                    <div className="form-group">
                                                        <label>Loại</label>
                                                        <select className="form-control"
                                                            name="type"
                                                            id="type"
                                                        // value={type}
                                                        // onChange={this.onHandleChange}
                                                        >
                                                            {Types.map((type, indexx) => <option key={indexx} value={type.value}>{type.label}</option>)}

                                                        </select>
                                                    </div>
                                                </div>


                                                <div className="col-md-2 col-sm-6">
                                                    <div className="form-group">
                                                        <label>Giá</label>
                                                        <input
                                                            type="text"
                                                            className="input-text"
                                                            name="price"
                                                            id="price"
                                                            placeholder="Nhập giá bán"
                                                            // onChange={this.onHandleChange}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-2 col-sm-6">
                                                    <div className="form-group">
                                                        <label>Đơn vị</label>
                                                        <select className="form-control"
                                                            name="unit"
                                                            id="unit"
                                                        >
                                                            {Unit.map((single, indexx) => <option key={indexx} value={single.label}>{single.label}</option>)}

                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-2 col-sm-6">
                                                    <div className="form-group">
                                                        <label>Diện tích (m2)</label>
                                                        <input
                                                            type="text"
                                                            className="input-text"
                                                            name="area"
                                                            id="area"
                                                            placeholder="Diện tích"
                                                            // onChange={this.onHandleChange}
                                                            required
                                                        />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        {/* <div className="row" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                            <Button variant="info" onClick={this.onHandleShowMap} style={{ padding: "5px 100px 5px 100px" }}>{visible ? "Hide Map" : "Show Map"}</Button>
                                        </div> */}
                                        <div className="main-title-2">
                                            <h1>
                                                <span>Địa</span> chỉ
                                            </h1>
                                        </div>
                                        <div className="row mb-30">
                                            <div className="col-md-6">
                                                <div className="form-group" style={{ marginBottom: '0px' }}>
                                                    <label>Nhập số nhà/đường</label>
                                                    <input
                                                        type="text"
                                                        className="input-text"
                                                        name="street"
                                                        id="street"
                                                        placeholder="Nhập số nhà/đường"
                                                        // onChange={this.onHandleChange}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group" style={{ marginBottom: '0px' }}>
                                                    <label>Chọn tỉnh</label>
                                                    <select className="form-control"
                                                        name="state"
                                                        id="state"
                                                        required
                                                        onChange={this.onHandleChangeAddress}
                                                        style={{ overflowY: "scroll" }}
                                                    >
                                                        {stateList.map((single, index) => <option key={index} value={single}>{single}</option>)}

                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mb-30">
                                            <div className="col-md-6">
                                                <div className="form-group" style={{ marginBottom: '0px' }}>
                                                    <label>Chọn thành phố</label>
                                                    <select className="form-control"
                                                        name="city"
                                                        id="city"
                                                        required
                                                        onChange={this.onHandleChangeAddress}
                                                        style={{ overflowY: "scroll" }}
                                                    >
                                                        {cityList.map((single, indexx) => <option key={indexx} value={single}>{single}</option>)}
                                                        {/* {this.parseCityData(AddressData, document.getElementById('city').value)} */}

                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group" style={{ marginBottom: '0px' }}>
                                                    <label>Chọn xã/huyện</label>
                                                    <select className="form-control"
                                                        name="ward"
                                                        id="ward"
                                                        required
                                                        onChange={this.onHandleChangeAddress}
                                                    >
                                                        {wardList.map((single, indexx) => <option key={indexx} value={single}>{single}</option>)}

                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{ paddingBottom: '80px' }}>
                                            <MapSearching
                                                google={this.props.google}
                                                center={{ lat: 10.7625626, lng: 106.6805316 }}
                                                height='300px'
                                                zoom={15}
                                                address={this.onGettingAddress}
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
                                                        id="description"
                                                        placeholder="Nhập nội dung bài đăng ở đây..."
                                                        defaultValue={""}
                                                        // onChange={this.onHandleChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="main-title-2">
                                            <h1>
                                                <span>Thông tin</span> liên hệ
                                            </h1>
                                        </div>
                                        <div className="search-contents-sidebar mb-30">
                                            <div className="row">
                                                <div className="col-md-6 col-sm-6">
                                                    <div className="form-group">
                                                        <label>Tên người liên hệ</label>
                                                        <input
                                                            type="text"
                                                            className="input-text"
                                                            name="contactname"
                                                            id="contactname"
                                                            placeholder="Tên người liên hệ"
                                                            // onChange={this.onHandleChange}
                                                            required
                                                        />

                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6">
                                                    <div className="form-group">
                                                        <label>Số điện thoại</label>
                                                        <input
                                                            type="text"
                                                            className="input-text"
                                                            name="contactphonenumber"
                                                            id="contactphonenumber"
                                                            placeholder="Số điện thoại"
                                                            // onChange={this.onHandleChange}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6 col-sm-6">
                                                    <div className="form-group">
                                                        <label>Địa chỉ email</label>
                                                        <input
                                                            type="text"
                                                            className="input-text"
                                                            name="contactemail"
                                                            id="contactemail"
                                                            placeholder="Email"
                                                        // onChange={this.onHandleChange}

                                                        />

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <Button variant="info" style={{ float: "right", fontSize: '12px', marginTop: "0px" }} onClick={this.showWidget}>Đăng hình kèm theo</Button>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="clearfix">
                                                {/* <Upload
                                                    // action={this.showWidget}
                                                    listType="picture-card"
                                                    fileList={fileList}
                                                    onPreview={this.handlePreview}
                                                    onChange={this.handleChangeImageList}
                                                    
                                                >
                                                    {fileList.length >= 5 ? null : uploadButton}
                                                </Upload>
                                                
                                                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                                                    <img alt="example" style={{ width: '100%', height: '100%' }} src={previewImage} />
                                                </Modal> */}
                                            </div>
                                        </div>

                                        <div className="row">
                                            {/* <div className="col-md-12">
                                                <input
                                                    type="submit"
                                                    value="Đăng bài"
                                                    name="submit"
                                                    className="btn button-md button-theme"
                                                    style={{ fontSize: "16px", padding: "15px 30px 15px 30px" }}
                                                    onClick={this.onSubmit}
                                                >
                                                </input>
                                            </div> */}
                                            <Button type="submit" variant="success" style={{ fontSize: "16px", padding: "15px 30px 15px 30px" }} onClick={this.onSubmit} className="btn button-md button-theme">
                                                Đăng bài
                                            </Button>
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