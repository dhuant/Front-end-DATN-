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
import { message, Modal } from 'antd'
import moment from 'moment'
import LoginModal from '../components/LoginModal'
import AddressData from '../countries-flat.json'
import TagsInput from '../components/TagsInput'

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

const Units = [
    { value: '1', label: 'Triệu/tháng' },
    { value: '2', label: 'Triệu/năm' },
    { value: '3', label: 'Triệu/m2/tháng' },
    { value: '4', label: 'Trăm nghìn/m2/tháng' },
];

class SubmitProperty extends Component {
    constructor() {
        super();
        this.state = {
            tags: [],
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
            },
            isShowUnit: false,
            isShowCodeModal: false,
        }
    }

    handleCancel = () => this.setState({ previewVisible: false })

    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }

    onShowUnitSelect = () => {
        if (this.state.status === '3' || this.state.status === 3)
            return true
        else if (this.state.status === 1)
            return false
    }

    handleChangeImageList = ({ fileList }) => this.setState({ fileList })

    onHandleChange = (event) => {
        let target = event.target
        let name = target.name
        let value = target.value
        if (value === 3 || value === '3')
            this.setState({
                [name]: value,
                isShowUnit: true
            });
        if (value === 1 || value === '1')
            this.setState({
                [name]: value,
                isShowUnit: false
            });
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
                unit: "Triệu",
                area: document.getElementById('area').value,
                address: this.props.address.unknownAddress === '' ? localStorage.getItem('defaultAddress') : this.props.address.unknownAddress,
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
                avatar: JSON.parse(localStorage.getItem('res')).user.avatar === undefined ? localStorage.getItem('avatar') : JSON.parse(localStorage.getItem('res')).user.avatar,
                codeList: this.state.tags
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

    onOpenCodeModal = () => {
        this.setState({ isShowCodeModal: true })
    }

    onHandleCancelCodeModal = () => {
        this.setState({ isShowCodeModal: false })
    }

    onHandleOk = () => {
        console.log(this.state.tags)
        this.setState({ isShowCodeModal: false })
    }
    removeTag = (i) => {
        const newTags = [...this.state.tags];
        newTags.splice(i, 1);
        this.setState({ tags: newTags });
    }

    inputKeyDown = (e) => {
        const val = e.target.value;
        if (e.key === 'Enter' && val) {
            if (this.state.tags.find(tag => tag.toLowerCase() === val.toLowerCase())) {
                return;
            }
            this.setState({ tags: [...this.state.tags, val] });
            this.tagInput.value = null;
        } else if (e.key === 'Ba ckspace' && !val) {
            this.removeTag(this.state.tags.length - 1);
        }
    }

    render() {
        var { status, city, ward, state, isShowUnit, tags } = this.state;
        console.log(status, isShowUnit)
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
                                                            defaultValue={Status[0].value}
                                                            onChange={this.onHandleChange}
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
                                                            defaultValue={Types[0].value}
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
                                                            disabled={!this.state.isShowUnit}
                                                            placeholder="Chọn đơn vị"
                                                        >
                                                            {Units.map((single, indexx) => <option key={indexx} value={single.label}>{single.label}</option>)}

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
                                        <div className="row">
                                            <div className="col-md-12 col-sm-12">
                                                <div className="form-group">
                                                    <Button variant="primary" style={{ display: "flex", alignContent: "center", justifyContent: "center", fontSize: "12px" }} onClick={this.onOpenCodeModal}>
                                                        Nhấn vào đây để nhập mã số căn hộ/phòng
                                                   </Button>
                                                </div>
                                            </div>
                                        </div>
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
                <Modal
                    title="Nhập mã số"
                    style={{ top: 20 }}
                    visible={this.state.isShowCodeModal}
                    onOk={this.onHandleOk}
                    onCancel={this.onHandleCancelCodeModal}
                    footer={[
                        <Button key="back" onClick={this.onHandleCancelCodeModal}>
                            Trở về
                        </Button>,
                        <Button key="submit" type="primary" onClick={this.onHandleOk}>
                            Chấp nhận
                        </Button>,
                    ]}
                >
                    <div className="input-tag"
                        style={{
                            background: "white",
                            border: "1px solid #d6d6d6",
                            borderRadius: "2px",
                            display: "flex",
                            flexWrap: "wrap",
                            padding: "5px 5px 0"
                        }}
                    >
                        <ul
                            className="input-tag__tags"
                            style={{
                                display: "inline-flex",
                                flexWrap: "wrap",
                                margin: "0",
                                padding: "0",
                                width: "100%"
                            }}
                        >
                            {tags.map((tag, i) => (
                                <li
                                    key={tag}
                                    style={{
                                        alignItems: "center",
                                        background: "#85A3BF",
                                        borderRadius: "2px",
                                        color: "white",
                                        display: "flex",
                                        fontWeight: "300",
                                        listStyle: "none",
                                        marginBottom: "5px",
                                        marginRight: "5px",
                                        padding: "5px 10px"
                                    }}
                                >
                                    {tag}
                                    <button
                                        type="button"
                                        onClick={() => { this.removeTag(i); }}
                                        style={{
                                            alignItems: "center",
                                            appearance: "none",
                                            background: "#333333",
                                            border: "none",
                                            borderRadius: "50%",
                                            color: "white",
                                            cursor: "pointer",
                                            display: "inline-flex",
                                            fontSize: "12px",
                                            height: "15px",
                                            justifyContent: "center",
                                            lineHeight: "0",
                                            marginLeft: "8px",
                                            transform: "rotate(45deg)",
                                            width: "15px"
                                        }}
                                    >
                                        +
                            </button>
                                </li>
                            ))}
                            <li
                                className="input-tag__tags__input"
                                style={{
                                    background: "none",
                                    flexGrow: "1",
                                    padding: "0"
                                }}
                            >
                                <input
                                    type="text"
                                    onKeyDown={this.inputKeyDown}
                                    ref={c => { this.tagInput = c; }}
                                    style={{ border: "none", width: "100%" }}
                                />

                            </li>
                        </ul>
                    </div>
                </Modal>
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