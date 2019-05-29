import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import { connect } from 'react-redux'
import { Image } from 'react-bootstrap'
import request from 'superagent'
import { Steps, Button, message, Form, Modal } from 'antd';

const CLOUDINARY_UPLOAD_PRESET = 'nn6imhmo';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dne3aha8f/image/upload';
const confirm = Modal.confirm;

class Legality extends Component {
    constructor(props) {
        super(props)

        this.state = {
            uploadedFile: null,
            governmentObj: {},
            certificateUrl: '',
            contractUrl: '',
            governmentArray: [
                {
                    id: "ebf71hksx9vgjad10d8b", 
                    url: "https://res.cloudinary.com/dne3aha8f/image/upload/v1559047249/ebf71hksx9vgjad10d8b.png"
                }
            ],
            certificateArray: [],
            contractArray: [],
            currentDeleteImgIndex: null,
            previewImage: false,
            previewUrl: ''
        }
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
        console.log(files)
        // this.setState({
        //     uploadedFile: files[0]
        // });
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
                        governmentObj: {url: response.body.secure_url, id: response.body.public_id},
                        governmentArray: this.state.governmentArray.concat(this.state.governmentObj)
                    });
                }
            });
        })
    }
    handleContractUpload(files) {
        this.setState({
            uploadedFile: files[0]
        });
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
            .field('file', files[0]);

        upload.end((err, response) => {
            if (err) {
                console.error(err);
            }

            if (response.body.secure_url !== '') {
                this.setState({
                    contractUrl: response.body.secure_url,
                    contractArray: this.state.contractArray.push({ url: response.body.secure_url, id: response.body.public_id })
                });
            }
        });
    }
    handleCertificateUpload(files) {
        this.setState({
            uploadedFile: files[0]
        });
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
            .field('file', files[0]);

        upload.end((err, response) => {
            if (err) {
                console.error(err);
            }

            if (response.body.secure_url !== '') {
                this.setState({
                    certificateUrl: response.body.secure_url,
                    certificateArray: this.state.certificateArray.push({ url: response.body.secure_url, id: response.body.public_id })
                });
            }
        });
    }
    onShowContractPreviewImage = (array) => {
        let result = []
        if (array && array.length > 0) {
            for (var i = 0; i < array.length; i++) {
                result.push(<div className="col-md-2" key={i}>
                    <Image
                        className="imagepreview"
                        src={array[i].url}
                        thumbnail
                        style={{ width: "150px", height: "100px", cursor: "pointer" }}
                        onClick={this.onHandlePreviewImage}
                    >
                    </Image>
                    <button type="button" className="close" aria-label="Close" style={{ left: "-20px", position: "relative", color: "#0A10C8" }} onClick={() => this.showContractDeleteConfirm(i)} name={array[i].id}>
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
                    <button type="button" className="close" aria-label="Close" style={{top: "-100px", left: "-5px", position: "relative", color: "#0A10C8" }} onClick={() => this.showCertificateDeleteConfirm(i)} name={array[i].id}>
                        x
                    </button>
                </div>)
            }
        }
        else return null
        return result
    }

    onShowGovernmentPreviewImage = (array) => {
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
                    <button type="button" className="close" aria-label="Close" style={{top: "-100px", left: "-5px", position: "relative", color: "#0A10C8" }} onClick={this.showGovernmentDeleteConfirm} name={array[i].id} value={i}>
                        x
                    </button>
                </div>)
            }
        }
        else return null
        return result
    }

    showCertificateDeleteConfirm = (e) => {
        confirm({
            title: 'Bạn muốn xóa hình này không?',
            okText: 'Có',
            okType: 'danger',
            cancelText: 'Trở lại',
            onOk: () => {
                console.log('OK');
                this.state.certificateArray.splice(e.target.value, 1)
                this.setState({
                    certificateArray: this.state.certificateArray
                })
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    showGovernmentDeleteConfirm = (e) => {
        console.log(e)
        confirm({
            title: 'Bạn muốn xóa hình này không?',
            okText: 'Có',
            okType: 'danger',
            cancelText: 'Trở lại',
            onOk: () => {
                console.log('OK');
                this.state.governmentArray.splice(e.target.value, 1)
                this.setState({
                    governmentArray: this.state.governmentArray
                })
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    showContractDeleteConfirm = (currentDeleteImgIndex) => {
        confirm({
            title: 'Bạn muốn xóa hình này không?',
            okText: 'Có',
            okType: 'danger',
            cancelText: 'Trở lại',
            onOk: () => {
                console.log('OK');
                this.state.contractArray.splice(currentDeleteImgIndex, 1)
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

})

const mapDispatchToProps = {

}

const WrappedFormLegality = Form.create()(Legality)

export default connect(mapStateToProps, mapDispatchToProps)(WrappedFormLegality)
