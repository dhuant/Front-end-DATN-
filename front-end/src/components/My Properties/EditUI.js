import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../../actions/request';
import axios from 'axios'
import { authHeader } from '../../constants/authHeader';
// import Button from 'react-bootstrap/Button'
import { Image, Button } from 'react-bootstrap'
import { message, Modal } from 'antd'
import moment from 'moment'
import MapSearching from '../Map/MapSearching'
import MainHeader from '../MainHeader'
import Footer from '../Footer'
import { Link } from 'react-router-dom'

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

const Units = [
    { value: '1', label: 'Triệu/tháng' },
    { value: '2', label: 'Triệu/năm' },
    { value: '3', label: 'Triệu/m2/tháng' },
    { value: '4', label: 'Trăm nghìn/m2/tháng' },
];

class EditUI extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
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
            test: null,
            avatar: '',
            _id: '',
            unit: '',
            isShowCodeModal: false,
            isShowUnit: false
        };
    }
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
            return null
        }

        else {
            let info = {
                name: this.state.name,
                investor: this.state.investor,
                price: this.state.price,
                unit: this.state.unit,
                area: this.state.area,
                address: this.props.address.addressDetail ? this.props.address.addressDetail : this.state.address,
                type: this.state.type,
                info: this.state.description,
                lat: this.props.address.markerPosition ? this.props.address.markerPosition.lat : this.state.lat,
                long: this.props.address.markerPosition ? this.props.address.markerPosition.lng : this.state.long,
                ownerid: JSON.parse(localStorage.getItem('res')).user._id,
                statusProject: this.state.status,
                updateTime: moment().unix(),
                url: this.state.url,
                publicId: this.state.publicId,
                fullname: this.state.fullname,
                phone: this.state.phone,
                email: this.state.email,
                avatar: this.state.avatar,
                _id: this.state._id
            };
            console.log(info);
            this.props.onUpdateUserProject(info, info._id)
            this.props.history.goBack()
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
                address: estateUserInfo.address,
                avatar: estateUserInfo.avatar,
                _id: estateUserInfo._id,
                unit: estateUserInfo.unit,
                tags: estateUserInfo.codelist ? estateUserInfo.codelist : []
            })
        }
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
        let { estateUserInfo } = this.props
        localStorage.setItem("projectid", estateUserInfo._id)
        let { visible, estateInfo, previewImage, url, previewUrl, publicId, loading, currentIndexDeleteImage, tags } = this.state
        console.log(this.props.updatedProject)
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
                                                <div className="col-md-2 col-sm-6">
                                                    <div className="form-group">
                                                        <label>Giá</label>
                                                        <input
                                                            type="number"
                                                            className="input-text"
                                                            name="price"
                                                            placeholder="Giá"
                                                            onChange={this.onHandleChange}
                                                            defaultValue={this.state.price}
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
                                                        <label>Diện tích</label>
                                                        <input
                                                            type="number"
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
                                            <img alt="example" src={previewUrl} style={{ width: "750px", height: "500px" }} />
                                        </Modal>
                                        <Modal
                                            title="Delete Confirm"
                                            visible={this.state.visibleDeleteImage}
                                            onOk={() => this.handleOkDeleteImage(currentIndexDeleteImage)}
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
        )
    }
}
const mapDispathToProp = (dispatch) => {
    return {
        actGetEstateRequest: (info) => dispatch(actions.actGetEstateRequest(info)),
        onUpdateUserProject: (data, id) => dispatch(actions.actEditUserProjectRequest(data, id))
    }
}
const mapStateToProp = (state) => {
    return {
        user: state.user,
        address: state.address,
        estateUserInfo: state.estateInfo,
        updatedProject: state.estateUserInfo
    }
}
export default connect(mapStateToProp, mapDispathToProp)(EditUI);
