import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../../actions/request';
import axios from 'axios'
import { authHeader } from '../../constants/authHeader';
import { Button} from 'react-bootstrap'
import { toast } from 'react-toastify'
import { message } from 'antd'
import moment from 'moment'
import MapSearching from '../Map/MapSearching'

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
            contactname: '',
            contactphonenumber: '',
            contactemail: '',
            createTime: 123
        };
    }
    onHandleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    componentDidMount = () => {

        this.setState({
            status: this.props.estateUserInfo.statusProject,
            type: this.props.estateUserInfo.type
        })
    }
    onUpdateProject = (estateInfo) => {
        if (this.state.name === ''
            || this.state.investor === ''
            || this.state.area === ''
            || this.state.price === ''
            || this.state.description === '') {
            return null
        }
        // if (this.state.name.length > 32) {
        //     this.onCheckingError('Name')
        //     return null
        // }
        else {
            let projectId = estateInfo._id
            // let ownerID = this.props.estateUserInfo._id
            let info = {
                name: this.state.name,
                investor: this.state.investor,
                price: this.state.price,
                unit: 'triệu',
                area: this.state.area,
                address: this.props.address.addressDetail,
                type: this.state.type,
                info: this.state.description,
                lat: this.props.address.markerPosition.lat,
                long: this.props.address.markerPosition.lng,
                ownerid: JSON.parse(localStorage.getItem('res')).user._id,
                statusProject: this.state.status,
                createTime: estateInfo.createTime,
                updateTime: moment().unix(),
                url: this.state.url ? this.state.url : estateInfo.url,
                publicId: this.state.publicId ? this.state.publicId : estateInfo.publicId,
                contactname: this.state.contactname,
                contactphonenumber: this.state.contactphonenumber,
                contactemail: this.state.contactemail,
            };
            console.log(info);
            axios.post(`http://localhost:3001/projects/edit/${projectId}`, info, { headers: authHeader() })
                .then(res => {
                    console.log(res);
                    if (res.status === 201){
                        return message.success('Update project successfully!');
                        
                    }
                    else return message.error('Failed to update project!');
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
    render() {
        let { estateUserInfo } = this.props
        console.log(estateUserInfo.statusProject, estateUserInfo.type)
        let { type, status, url, publicId } = this.state
        console.log(type, status)
        console.log(url, publicId)
        return (
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
                                            <div className="col-md-11 col-sm-11">
                                                <div className="form-group">
                                                    <label>Tên bài đăng</label>
                                                    <input
                                                        type="text"
                                                        className="input-text"
                                                        name="name"
                                                        placeholder="Tên bài đăng"
                                                        onChange={this.onHandleChange}
                                                        required
                                                        defaultValue={estateUserInfo.name}
                                                    />
                                                    {/* <Form.Control type="email" placeholder="Enter email" required=""/> */}
                                                    {/* <Form.Text className="text-muted" style={{ color: "#827f7f" }}>Tên bài đăng không bao gồm các kí tự đặc biệt (~!@#,...)</Form.Text> */}
                                                </div>
                                            </div>

                                            {/* <Button variant="outline-light"><i className="lnr lnr-pencil"></i></Button> */}
                                            {/* <a style={{ color: "orange", marginRight: "18px", left: "-75px", position: "relative" }}><i className="glyphicon glyphicon-pencil"></i></a>

                                            <a style={{ color: "#95c41f", left: "-70px", position: "relative" }}><i className="glyphicon glyphicon-ok" ></i></a> */}
                                        </div>
                                        <div className="row">
                                            <div className="col-md-11 col-sm-11">
                                                <div className="form-group">
                                                    <label>Nhà đầu tư</label>
                                                    <input
                                                        type="text"
                                                        className="input-text"
                                                        name="investor"
                                                        placeholder="Nhà đầu tư"
                                                        onChange={this.onHandleChange}
                                                        required
                                                        defaultValue={estateUserInfo.investor}

                                                    />
                                                </div>
                                            </div>
                                            {/* <a style={{ color: "orange", marginRight: "18px", left: "-75px", position: "relative" }}><i className="glyphicon glyphicon-pencil"></i></a>

                                            <a style={{ color: "#95c41f", left: "-70px", position: "relative" }}><i className="glyphicon glyphicon-ok" ></i></a> */}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-5 col-sm-5">
                                            <div className="form-group">
                                                <label>Trạng thái</label>
                                                <select className="form-control"
                                                    name="status"
                                                    value={status}
                                                    onChange={this.onHandleChange}
                                                    defaultValue={estateUserInfo.statusProject}
                                                >
                                                    {Status.map((status, index) => <option key={index} value={status.value}>{status.label}</option>)}

                                                </select>
                                            </div>
                                        </div>
                                        {/* <a style={{ color: "orange", marginRight: "20px", left: "-75px",top: "-15px", position: "relative" }}><i className="glyphicon glyphicon-pencil"></i></a>

                                        <a style={{ color: "#95c41f", left: "-70px", position: "relative", top: "-15px" }}><i className="glyphicon glyphicon-ok" ></i></a> */}
                                        <div className="col-md-5 col-sm-5">
                                            <div className="form-group">
                                                <label>Loại</label>
                                                <select className="form-control"
                                                    name="type"
                                                    defaultValue={estateUserInfo.type}
                                                    onChange={this.onHandleChange}
                                                    value={type}
                                                >
                                                    {Types.map((type, index) => <option key={index} value={type.value}>{type.label}</option>)}

                                                </select>
                                            </div>
                                        </div>
                                        {/* <a style={{ color: "orange", marginRight: "20px", left: "-75px",top: "-15px", position: "relative" }}><i className="glyphicon glyphicon-pencil"></i></a>

                                        <a style={{ color: "#95c41f", left: "-70px", position: "relative", top: "-15px" }}><i className="glyphicon glyphicon-ok" ></i></a> */}
                                    </div>
                                    <div className="row">
                                        <div className="col-md-5 col-sm-5">
                                            <div className="form-group">
                                                <label>Giá</label>
                                                <input
                                                    type="text"
                                                    className="input-text"
                                                    name="price"
                                                    placeholder="USD"
                                                    onChange={this.onHandleChange}
                                                    defaultValue={estateUserInfo.price}
                                                    required

                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-5 col-sm-5">
                                            <div className="form-group">
                                                <label>Diện tích</label>
                                                <input
                                                    type="text"
                                                    className="input-text"
                                                    name="area"
                                                    placeholder="Diện tích"
                                                    onChange={this.onHandleChange}
                                                    defaultValue={estateUserInfo.area}
                                                    required

                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* </div> */}
                                    <div className="row">
                                        <div style={{ paddingBottom: '80px' }} className="col-md-11 col-sm-11">
                                            <MapSearching
                                                google={this.props.google}
                                                center={{ lat: estateUserInfo.lat, lng: estateUserInfo.long }}
                                                height='300px'
                                                zoom={15}
                                            />
                                        </div>
                                    </div>

                                    <div className="main-title-2">
                                        <h1>
                                            <span>Thông tin</span> chi tiết
                                            </h1>
                                    </div>
                                    <div className="row mb-30">
                                        <div className="col-md-11">
                                            <div className="form-group" style={{ marginBottom: '0px' }}>
                                                <label>Nội dung bài đăng</label>
                                                <textarea
                                                    className="input-text"
                                                    name="description"
                                                    placeholder="Nhập nội dung bài đăng ở đây..."
                                                    onChange={this.onHandleChange}
                                                    defaultValue={estateUserInfo.info}
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
                                            <div className="col-md-2 col-sm-2">
                                                <div className="form-group">
                                                    <label>Tên người liên hệ</label>
                                                    <input
                                                        type="text"
                                                        className="input-text"
                                                        name="contactname"
                                                        placeholder="Tên người liên hệ"
                                                        onChange={this.onHandleChange}
                                                        defaultValue={estateUserInfo.fullname}
                                                        required

                                                    />

                                                </div>
                                            </div>
                                            <div className="col-md-2 col-sm-2"></div>
                                            <div className="col-md-2 col-sm-2">
                                                <div className="form-group">
                                                    <label>Số điện thoại</label>
                                                    <input
                                                        type="text"
                                                        className="input-text"
                                                        name="contactphonenumber"
                                                        placeholder="Số điện thoại"
                                                        onChange={this.onHandleChange}
                                                        defaultValue={estateUserInfo.phone}
                                                        required

                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-2 col-sm-2"></div>
                                            <div className="col-md-2 col-sm-2">
                                                <div className="form-group">
                                                    <label>Địa chỉ email</label>
                                                    <input
                                                        type="text"
                                                        className="input-text"
                                                        name="contactemail"
                                                        placeholder="Email"
                                                        defaultValue={estateUserInfo.email}
                                                        onChange={this.onHandleChange}

                                                    />

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-11">
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
                                        <div className="col-md-10">
                                            <input
                                                type="submit"
                                                value="Lưu"
                                                name="submit"
                                                className="btn button-md button-theme"
                                                style={{ fontSize: "16px", padding: "15px 30px 15px 30px" }}
                                                onClick={this.onUpdateProject(estateUserInfo)}
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
        )
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
export default connect(mapStateToProp, mapDispathToProp)(EditUI);
