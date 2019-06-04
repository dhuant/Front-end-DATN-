import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import { connect } from 'react-redux'
import { Image } from 'react-bootstrap'
import request from 'superagent'
import { Steps, Button, message, Form, Modal } from 'antd';
import * as transAction from '../../../actions/transactionRequest'
import moment from 'moment'

const CLOUDINARY_UPLOAD_PRESET = 'nn6imhmo';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dne3aha8f/image/upload';
const confirm = Modal.confirm;

class Legality extends Component {
    constructor(props) {
        super(props)

        this.state = {
            uploadedFile: null,
            governmentArray: [],
            certificateArray: [],
            contractArray: [],
            currentDeleteImgIndex: null,
            previewImage: false,
            previewUrl: ''
        }
    }

    componentDidMount = () => {
        this.props.onGettingTransactionDetail(this.props.transaction._id, this.props.transaction.typetransaction)
    }

    onSendingLegalityInfo = () => {
        var legalityInfo = {
            complete: true,
            updateTime: moment().unix(),
            _id: this.props.transactions._id,
            id: this.props.transactions.selldetail._id,
            government: this.state.governmentArray.length === 0 ? this.props.transactions.selldetail.legality.government : this.state.governmentArray,
            certificate: this.state.certificateArray.length === 0 ? this.props.transactions.selldetail.legality.certificate : this.state.certificateArray,
            contract: this.state.contractArray.length === 0 ? this.props.transactions.selldetail.legality.contract : this.state.contractArray,
        }

        if (legalityInfo.government === this.props.transactions.selldetail.legality.government
            && legalityInfo.contract === this.props.transactions.selldetail.legality.contract
            && legalityInfo.certificate === this.props.transactions.selldetail.legality.certificate)
            return message.warning("Bạn chưa thay đổi gì cả!")

        if (legalityInfo.government.length === 0)
            return message.error("Bạn phải tải lên hình ảnh xác thực từ chính quyền địa phương!")

        this.props.onSendingLegality(legalityInfo)
    }
    onHandlePreviewImage = (event) => {
        this.setState({ previewImage: true, previewUrl: event.target.src })
    }

    onHandleCancelImage = () => {
        this.setState({ previewImage: false })
    }

    onImageSelect(files) {
        this.setState({
            uploadedFile: files[0]
        });

        this.handleImageUpload(files[0]);
    }

    handleGovernmentUpload(files) {
        if(this.props.transactions.selldetail.legality.government.length > 0){
            this.setState({governmentArray: this.state.governmentArray.concat(this.props.transactions.selldetail.legality.government)})
        }
        console.log(files)
        files.map(file => {
            let upload = request.post(CLOUDINARY_UPLOAD_URL)
                .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                .field('file', file);

            upload.end((err, response) => {
                console.log(response)
                if (err) {
                    console.error(err);
                }

                if (response.body.secure_url !== '') {
                    this.setState({
                        governmentArray: this.state.governmentArray.concat({ url: response.body.secure_url, id: response.body.public_id })
                    });
                }
            });
        })
    }
    handleContractUpload(files) {
        files.map(file => {
            let upload = request.post(CLOUDINARY_UPLOAD_URL)
                .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                .field('file', file);

            upload.end((err, response) => {
                console.log(response)
                if (err) {
                    console.error(err);
                }

                if (response.body.secure_url !== '') {
                    this.setState({
                        contractArray: this.state.contractArray.concat({ url: response.body.secure_url, id: response.body.public_id })
                    });
                }
            });
        })
    }
    handleCertificateUpload(files) {
        files.map(file => {
            let upload = request.post(CLOUDINARY_UPLOAD_URL)
                .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                .field('file', file);

            upload.end((err, response) => {
                console.log(response)
                if (err) {
                    console.error(err);
                }

                if (response.body.secure_url !== '') {
                    this.setState({
                        certificateArray: this.state.certificateArray.concat({ url: response.body.secure_url, id: response.body.public_id })
                    });
                }
            });
        })
    }
    onShowContractPreviewImage = (array) => {
        let result = []
        if (array && array.length > 0) {
            for (var i = 0; i < array.length; i++) {
                result.push(<div className="col-md-3" key={i}>
                    <Image
                        className="imagepreview"
                        src={array[i].url}
                        thumbnail
                        style={{ width: "150px", height: "100px", cursor: "pointer" }}
                        onClick={this.onHandlePreviewImage}
                    >
                    </Image>
                    <button
                        type="button"
                        className="close"
                        aria-label="Close"
                        style={{ top: "-100px", left: "-5px", position: "relative", color: "#0A10C8" }}
                        onClick={this.showContractDeleteConfirm} name={array[i].id} value={i}>
                        x
                    </button>
                </div>)
            }
        }
        else return null
        return result
    }

    onShowCertificatePreviewImage = (array) => {
        let result = []
        if (array && array.length > 0) {
            for (var i = 0; i < array.length; i++) {
                result.push(<div className="col-md-3" key={i}>
                    <Image
                        className="imagepreview"
                        src={array[i].url}
                        thumbnail
                        style={{ width: "150px", height: "100px", cursor: "pointer" }}
                        onClick={this.onHandlePreviewImage}
                    >
                    </Image>
                    <button
                        type="button"
                        className="close"
                        aria-label="Close"
                        style={{ top: "-100px", left: "-5px", position: "relative", color: "#0A10C8" }}
                        onClick={this.showCertificateDeleteConfirm} name={array[i].id} value={i}>
                        x
                    </button>
                </div>)
            }
        }
        else return null
        return result
    }

    onShowGovernmentPreviewImage = (array) => {
        console.log(array.length)
        let result = []
        if (array && array.length > 0) {
            for (var i = 0; i < array.length; i++) {
                result.push(<div className="col-md-3" key={i}>
                    <Image
                        className="imagepreview"
                        src={array[i].url}
                        thumbnail
                        style={{ width: "150px", height: "100px", cursor: "pointer" }}
                        onClick={this.onHandlePreviewImage}
                    >
                    </Image>
                    <button
                        type="button"
                        className="close"
                        aria-label="Close"
                        style={{ top: "-100px", left: "-5px", position: "relative", color: "#0A10C8" }}
                        onClick={this.showGovernmentDeleteConfirm} name={array[i].id} value={i}>
                        x
                    </button>
                </div>)
            }
        }
        else return null
        return result
    }

    showCertificateDeleteConfirm = (event) => {
        var index = event.target.value
        confirm({
            title: 'Bạn muốn xóa hình này không?',
            okText: 'Có',
            okType: 'danger',
            cancelText: 'Trở lại',
            onOk: () => {
                console.log('OK');
                this.state.certificateArray.splice(index, 1)
                this.setState({
                    certificateArray: this.state.certificateArray
                })
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    showGovernmentDeleteConfirm = (event) => {
        var index = event.target.value
        confirm({
            title: 'Bạn muốn xóa hình này không?',
            okText: 'Có',
            okType: 'danger',
            cancelText: 'Trở lại',
            onOk: () => {
                console.log('OK');
                this.state.governmentArray.splice(index, 1)
                this.setState({
                    governmentArray: this.state.governmentArray
                })
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    showContractDeleteConfirm = (event) => {
        var index = event.target.value
        confirm({
            title: 'Bạn muốn xóa hình này không?',
            okText: 'Có',
            okType: 'danger',
            cancelText: 'Trở lại',
            onOk: () => {
                console.log('OK');
                this.state.contractArray.splice(index, 1)
                this.setState({
                    contractArray: this.state.contractArray
                })
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form
        var { transactions } = this.props
        var legality = transactions.selldetail.legality
        console.log(legality)
        var { certificateArray, contractArray, governmentArray, previewImage, previewUrl } = this.state
        console.log(governmentArray)
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-lag-8 col-xs-12">
                        <Form.Item label="Hình ảnh xác thực từ chính quyền địa phương: ">
                            {getFieldDecorator('government', {
                                rules: [{ required: true, message: 'Bạn phải có hình xác thực!' }],
                            })(
                                <div className="col-md-3 col-lag-3 col-xs-12">
                                    <div className="photoUpload">
                                        <Dropzone
                                            onDrop={this.handleGovernmentUpload.bind(this)}
                                            multiple={true}
                                            accept="image/*">
                                            {({ getRootProps, getInputProps }) => {
                                                return (
                                                    <div
                                                        {...getRootProps()}
                                                        style={{ border: "1px solid #95c41f", borderRadius: "2px" }}
                                                    >
                                                        <input {...getInputProps()} />
                                                        {
                                                            <span style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><i className="fa fa-upload" /> Tải ảnh lên</span>
                                                        }
                                                    </div>
                                                )
                                            }}
                                        </Dropzone>
                                    </div>
                                </div>
                            )}
                        </Form.Item>
                        <div className="col-md-8 col-lag-8 col-xs-12">
                            <div className="row">
                                <div className="clearfix">
                                    {(governmentArray && governmentArray.length > 0) ? this.onShowGovernmentPreviewImage(governmentArray) : null}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-8 col-lag-8 col-xs-12">
                        <Form.Item label="Hình ảnh xác thực từ hợp đồng mua bán (tùy chọn): ">
                            <div className="col-md-3 col-lag-3 col-xs-12">
                                <div className="photoUpload">
                                    <Dropzone
                                        onDrop={this.handleContractUpload.bind(this)}
                                        multiple={true}
                                        accept="image/*">
                                        {({ getRootProps, getInputProps }) => {
                                            return (
                                                <div
                                                    {...getRootProps()}
                                                    style={{ border: "1px solid #95c41f", borderRadius: "2px" }}
                                                >
                                                    <input {...getInputProps()} />
                                                    {
                                                        <span style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><i className="fa fa-upload" /> Tải ảnh lên</span>
                                                    }
                                                </div>
                                            )
                                        }}
                                    </Dropzone>
                                </div>
                            </div>
                        </Form.Item>
                        <div className="col-md-8 col-lag-8 col-xs-12">
                            <div className="row">
                                <div className="clearfix">
                                    {(contractArray && contractArray.length > 0) ? this.onShowContractPreviewImage(contractArray) : null}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-8 col-lag-8 col-xs-12">
                        <Form.Item label="Hình ảnh xác thực từ giấy chứng nhận quyền sử dụng đất (tùy chọn): ">
                            <div className="col-md-3 col-lag-3 col-xs-12">
                                <div className="photoUpload">
                                    <Dropzone
                                        onDrop={this.handleCertificateUpload.bind(this)}
                                        multiple={true}
                                        accept="image/*">
                                        {({ getRootProps, getInputProps }) => {
                                            return (
                                                <div
                                                    {...getRootProps()}
                                                    style={{ border: "1px solid #95c41f", borderRadius: "2px" }}
                                                >
                                                    <input {...getInputProps()} />
                                                    {
                                                        <span style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><i className="fa fa-upload" /> Tải ảnh lên</span>
                                                    }
                                                </div>
                                            )
                                        }}
                                    </Dropzone>
                                </div>
                            </div>
                        </Form.Item>
                        <div className="col-md-8 col-lag-8 col-xs-12">
                            <div className="row">
                                <div className="clearfix">
                                    {(certificateArray && certificateArray.length > 0) ? this.onShowCertificatePreviewImage(certificateArray) : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-8 col-lg-8 col-xs-12">
                        <Form.Item>
                            <Button type="primary" htmlType="submit" style={{ fontSize: "10px", float: "right" }} onClick={this.onSendingLegalityInfo}>
                                Gửi
                            </Button>
                        </Form.Item>
                    </div>
                </div>
                <Modal visible={previewImage} footer={null} onCancel={this.onHandleCancelImage} width="800px" style={{ height: "500px" }}>
                    <img alt="example" src={previewUrl} style={{ width: "750px", height: "500px" }} />
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    transactionDetail: state.transactionDetail,
    transactions: state.transaction
})

const mapDispatchToProps = (dispatch) => {
    return {
        onSendingLegality: (legalityData) => dispatch(transAction.actPostingLegalityRequest(legalityData)),
        onGettingTransactionDetail: (id, type) => dispatch(transAction.actGettingTransactionDetailRequest(id, type))
    }
}

const WrappedFormLegality = Form.create()(Legality)

export default connect(mapStateToProps, mapDispatchToProps)(WrappedFormLegality)
