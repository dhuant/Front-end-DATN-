import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../../actions/request';
import axios from 'axios'
import { authHeader } from '../../constants/authHeader';
// import Button from 'react-bootstrap/Button'
import { Image, Button } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { message, Modal } from 'antd'
import moment from 'moment'
import MapSearching from '../Map/MapSearching'
import MainHeader from '../MainHeader'
import Footer from '../Footer'
import { Link } from 'react-router-dom'
import address from '../../reducers/address';

const confirm = Modal.confirm

const Types = [
    { value: '1', label: 'Chung cư. căn hộ' },
    { value: '2', label: 'Nhà phố' },
    { value: '3', label: 'Biệt thự' },
    { value: '4', label: 'Đất nền dự án' },
    { value: '5', label: 'Văn phòng' },
    { value: '6', label: 'Nhà kho' }
];

const Status = [
    { value: '1', label: 'Sell' },
    { value: '2', label: 'Rented' },
    { value: '3', label: 'Sold' },
    { value: '4', label: 'Rent' },
];

class EditUI extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
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
            fullname: '',
            phone: '',
            email: '',
            createTime: 123,
            visible: false,
            visibleDeleteImage: false,
            estateInfo: {},
            lat: null,
            long: null,
            address: '',
            previewImage: false,
            previewUrl: '',
            currentIndexDeleteImage: null,
            test: null
        };
    }
    onHandleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    onHandlePreviewImage = (event) => {
        this.setState({ previewImage: true, previewUrl: event.target.src })
    }
    onHandleCancelImage = () => {
        this.setState({ previewImage: false })
    }
    onShowPreviewImage = (urls, publicIds) => {
        let result = []
        if (urls && urls.length > 0) {
            for (var i = 0; i < urls.length; i++) {
                result.push(<div className="col-md-2" key={i}>
                    <Image
                        className="imagepreview"
                        src={urls[i]}
                        thumbnail
                        style={{ width: "150px", height: "100px", cursor: "pointer" }}
                        onClick={this.onHandlePreviewImage}
                    >
                    </Image>
                    <button type="button" className="close" aria-label="Close" style={{ left: "-20px", position: "relative", color: "#0A10C8" }} onClick={this.showModalDeleteImage} name={publicIds[i]} value={i}>
                        {/* <span aria-hidden="true" style={{fontWeight: "bold", fontSize: "21px"}} key={i}>×</span> */}x
                </button>
                </div>)
            }
        }
        else result.push(<span>Bài đăng này hiện chưa có hình nào!</span>)
        return result
    }
    
    showModalDeleteImage = (e) => {
        console.log(e.target)
        this.setState({
            visibleDeleteImage: true,
            currentIndexDeleteImage: e.target.value
        });
    };

    handleOkDeleteImage = (index) => {
        this.state.url.splice(index, 1)
        this.state.publicId.splice(index, 1)
        this.setState({
            loading: true,
            url: this.state.url,
            publicId: this.state.publicId,
        })
        setTimeout(() => {
            this.setState({ loading: false, visibleDeleteImage: false });
        }, 500);

    };

    handleCancelDeleteImage = () => {
        this.setState({ visibleDeleteImage: false });
    };
    
    updateMyProperties = (e) => {
        e.preventDefault()
        if (this.state.name === ''
            || this.state.investor === ''
            || this.state.area === ''
            || this.state.price === ''
            || this.state.description === '') {
            console.log("inside")
            return null
        }

        else {
            console.log("inside2")
            let projectId = localStorage.getItem("projectid")
            // let ownerID = this.props.estateUserInfo._id
            let info = {
                name: this.state.name,
                investor: this.state.investor,
                price: this.state.price,
                unit: 'triệu',
                area: this.state.area,
                address: this.state.visible ? this.props.address.addressDetail : this.state.address,
                type: this.state.type,
                info: this.state.description,
                lat: this.state.visible ? this.props.address.markerPosition.lat : this.state.lat,
                long: this.state.visible ? this.props.address.markerPosition.lng : this.state.long,
                ownerid: JSON.parse(localStorage.getItem('res')).user._id,
                statusProject: this.state.status,
                updateTime: moment().unix(),
                url: this.state.url,
                publicId: this.state.publicId,
                fullname: this.state.contactname,
                phone: this.state.contactphonenumber,
                email: this.state.contactemail,
            };
            console.log(info);
            axios.post(`http://localhost:3001/projects/edit/${projectId}`, info, { headers: authHeader() })
                .then(res => {
                    console.log(res);
                    if (res.status === 200) {
                        return message.success('Update project successfully!');

                    }
                    else return message.error('Failed to update project!');
                });
        }
        this.props.history.goBack()

    }
    getUrlList = (urlArray, publicIdArray) => {
        // let temp1 = this.state.url
        // let temp2 = this.state.publicId
        // temp1.push(urlArray)
        // temp2.push(publicIdArray)
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
            showPoweredBy: false
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
    }
    onShowMap = (visible, estateUserInfo) => {
        if (visible) {
            return (
                <div className="row">
                    <div style={{ paddingBottom: '80px' }} className="col-md-12 col-sm-12">
                        <MapSearching
                            google={this.props.google}
                            center={{ lat: estateUserInfo.lat, lng: estateUserInfo.long }}
                            height='300px'
                            zoom={15}
                        />
                    </div>
                </div>
            )
        }
    }
    onHandleShowMap = () => {
        this.setState({
            visible: !this.state.visible
        })
    }
    componentDidMount = () => {
        this.props.actGetEstateRequest(this.props.match.params.id)
    }
    UNSAFE_componentWillReceiveProps = (nextProps) => {
        if (nextProps && nextProps.estateUserInfo) {
            var { estateUserInfo } = nextProps
            this.setState({
                price: estateUserInfo.price,
                area: estateUserInfo.area,
                fullname: estateUserInfo.fullname,
                email: estateUserInfo.email,
                phone: estateUserInfo.phone,
                name: estateUserInfo.name,
                status: estateUserInfo.statusProject,
                type: estateUserInfo.type,
                url: estateUserInfo.url,
                publicId: estateUserInfo.publicId,
                investor: estateUserInfo.investor,
                description: estateUserInfo.info,
                estateInfo: estateUserInfo,
                lat: estateUserInfo.lat,
                long: estateUserInfo.long,
                address: estateUserInfo.address
            })
        }
    }

    render() {
        let { estateUserInfo } = this.props
        localStorage.setItem("projectid", estateUserInfo._id)
        let { visible, estateInfo, previewImage, url, previewUrl, publicId, loading, currentIndexDeleteImage, test } = this.state
        console.log(url)
        console.log(currentIndexDeleteImage, test)
        console.log(estateUserInfo.url)
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
                                <h1>Edit Property</h1>
                                <ul className="breadcrumbs">
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li className="active">Edit Property</li>
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
                                    <form>
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
                                                            defaultValue={this.state.name}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="col-md-3 col-sm-3">
                                                    <div className="form-group">
                                                        <label>Trạng thái</label>
                                                        <select className="form-control"
                                                            name="status"
                                                            // value={status}
                                                            onChange={this.onHandleChange}
                                                            defaultValue={this.state.statusProject}
                                                        >
                                                            {Status.map((status, index) => <option key={index} value={status.value}>{status.label}</option>)}

                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="col-md-3 col-sm-3">
                                                    <div className="form-group">
                                                        <label>Loại</label>
                                                        <select className="form-control"
                                                            name="type"
                                                            defaultValue={this.state.type}
                                                            onChange={this.onHandleChange}
                                                        // value={type}
                                                        >
                                                            {Types.map((type, index) => <option key={index} value={type.value}>{type.label}</option>)}

                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
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
                                                            defaultValue={this.state.investor}

                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-3 col-sm-3">
                                                    <div className="form-group">
                                                        <label>Giá</label>
                                                        <input
                                                            type="text"
                                                            className="input-text"
                                                            name="price"
                                                            placeholder="USD"
                                                            onChange={this.onHandleChange}
                                                            defaultValue={this.state.price}
                                                            required

                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-3 col-sm-3">
                                                    <div className="form-group">
                                                        <label>Diện tích</label>
                                                        <input
                                                            type="text"
                                                            className="input-text"
                                                            name="area"
                                                            placeholder="Diện tích"
                                                            onChange={this.onHandleChange}
                                                            defaultValue={this.state.area}
                                                            required

                                                        />
                                                    </div>
                                                </div>

                                            </div>
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
                                                        onChange={this.onHandleChange}
                                                        // defaultValue={this.state.description}
                                                        value={this.state.description}
                                                        required>

                                                    </textarea>
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
                                                <div className="col-md-4 col-sm-4">
                                                    <div className="form-group">
                                                        <label>Tên người liên hệ</label>
                                                        <input
                                                            type="text"
                                                            className="input-text"
                                                            name="contactname"
                                                            placeholder="Tên người liên hệ"
                                                            onChange={this.onHandleChange}
                                                            defaultValue={this.state.fullname}
                                                            required

                                                        />

                                                    </div>
                                                </div>
                                                {/* <div className="col-md-2 col-sm-2"></div> */}
                                                <div className="col-md-4 col-sm-4">
                                                    <div className="form-group">
                                                        <label>Số điện thoại</label>
                                                        <input
                                                            type="text"
                                                            className="input-text"
                                                            name="contactphonenumber"
                                                            placeholder="Số điện thoại"
                                                            onChange={this.onHandleChange}
                                                            defaultValue={this.state.phone}
                                                            required

                                                        />
                                                    </div>
                                                </div>
                                                {/* <div className="col-md-2 col-sm-2"></div> */}
                                                <div className="col-md-4 col-sm-4">
                                                    <div className="form-group">
                                                        <label>Địa chỉ email</label>
                                                        <input
                                                            type="text"
                                                            className="input-text"
                                                            name="contactemail"
                                                            placeholder="Email"
                                                            defaultValue={this.state.email}
                                                            onChange={this.onHandleChange}

                                                        />

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                            <Button variant="info" onClick={this.onHandleShowMap} style={{ padding: "5px 100px 5px 100px" }}>{visible ? "Hide Map" : "Show Map"}</Button>
                                        </div>
                                        {this.onShowMap(visible, estateInfo)}

                                        <div className="main-title-2">
                                            <h1>
                                                <span>Hình ảnh</span> bài đăng
                                            </h1>
                                        </div>
                                        <div className="row">
                                            <div className="clearfix">
                                                {(url && url.length > 0) ? this.onShowPreviewImage(url, publicId) : null}
                                                <Button variant="light" onClick={() => this.onShowPreviewImage(estateUserInfo.url, estateUserInfo.publicId)}>Khôi phục</Button>
                                            </div>
                                            <div className="col-md-11">
                                                
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <Button variant="warning" style={{ float: "right", fontSize: '12px', marginTop: "0px" }} onClick={this.showWidget}>Đăng hình kèm theo</Button>
                                            </div>
                                        </div>
                                        <Modal visible={previewImage} footer={null} onCancel={this.onHandleCancelImage} width="800px" style={{ height: "500px" }}>
                                            <img alt="example" style={{ width: '100%' }} src={previewUrl} style={{ width: "750px", height: "500px" }} />
                                        </Modal>
                                        <Modal
                                            title="Delete Confirm"
                                            visible={this.state.visibleDeleteImage}
                                            onOk={ () => this.handleOkDeleteImage(currentIndexDeleteImage)}
                                            onCancel={this.handleCancelDeleteImage}
                                            footer={[
                                                <Button key="back" onClick={this.handleCancelDeleteImage}>
                                                    Return
                                                </Button>,
                                                <Button key="danger" type="danger" loading={loading} onClick={() => this.handleOkDeleteImage(currentIndexDeleteImage)}>
                                                    Yes, Delete it!
                                                </Button>
                                            ]}
                                        >
                                            Image deleted can not be restored!
                                        </Modal>
                                        <br></br>
                                        <div className="row">
                                            <div className="col-md-10">
                                                <input
                                                    type="submit"
                                                    value="Cập nhật"
                                                    name="submit"
                                                    className="btn button-md button-theme"
                                                    style={{ fontSize: "16px", padding: "15px 50px 15px 50px" }}
                                                    onClick={this.updateMyProperties}
                                                >
                                                </input>

                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                <Footer />
            </div>
        )
    }
}
const mapDispathToProp = (dispatch) => {
    return {
        actGetEstateRequest: (info) => dispatch(actions.actGetEstateRequest(info))
    }
}
const mapStateToProp = (state) => {
    return {
        user: state.user,
        address: state.address,
        estateUserInfo: state.estateInfo
    }
}
export default connect(mapStateToProp, mapDispathToProp)(EditUI);
