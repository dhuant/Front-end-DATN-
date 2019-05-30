import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dropzone from 'react-dropzone'
import { Image } from 'react-bootstrap'
import request from 'superagent'
import { Button, message, Form, Icon, Input, Checkbox, Progress, InputNumber, Select, DatePicker, Modal } from 'antd';

const CLOUDINARY_UPLOAD_PRESET = 'nn6imhmo';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dne3aha8f/image/upload';
const confirm = Modal.confirm;

class Contract extends Component {
    constructor(props) {
        super(props)

        this.state = {
            contractArray: [],
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

    handleContractUpload(files) {
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
                        contractArray: this.state.contractArray.concat({ url: response.body.secure_url, id: response.body.public_id })
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
                        style={{top: "-100px", left: "-5px", position: "relative", color: "#0A10C8" }}
                        onClick={this.showContractDeleteConfirm} name={array[i].id} value={i}>
                        x
                    </button>
                </div>)
            }
        }
        else return null
        return result
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

    hasErrors = (fieldsError) => {
        return Object.keys(fieldsError).some(field => fieldsError[field]);
    }

    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        var { contractArray, previewImage, previewUrl } = this.state
        return (
            <div className="container">
                <Form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-md-4 col-lg-4 col-xs-12">
                            <Form.Item label="Ngày ký hợp đồng: ">
                                {getFieldDecorator('contractSigningDate', {
                                    rules: [{ required: true, message: 'Trường này chưa được nhập!' }],
                                })(
                                    <DatePicker style={{ width: "100%" }} />
                                )}
                            </Form.Item>
                        </div>
                        <div className="col-md-4 col-lg-4 col-xs-12">
                            <Form.Item label="Số hợp đồng: ">
                                {getFieldDecorator('contractNumber', {
                                    rules: [{ required: true, message: 'Trường này chưa được nhập!' }],
                                })(
                                    <Input
                                        placeholder="Nhập số hợp đồng..."
                                        style={{ width: "100%" }}
                                    >
                                    </Input>
                                )}
                            </Form.Item>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 col-lg-8 col-xs-12">
                            <Form.Item label="Hình ảnh xác thực từ hợp đồng mua bán (tùy chọn): ">
                                {getFieldDecorator('depositAmount', {
                                    rules: [{ required: true, message: 'Trường này chưa được nhập!' }],
                                })(
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
                                )}
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
                </Form>
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

const WrappedFormContract = Form.create()(Contract)

export default connect(mapStateToProps, mapDispatchToProps)(WrappedFormContract)
