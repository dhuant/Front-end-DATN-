import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dropzone from 'react-dropzone'
import { Image } from 'react-bootstrap'
import request from 'superagent'
import { Button, message, Form, Icon, Input, Checkbox, Progress, InputNumber, Select, DatePicker, Modal } from 'antd';

const CLOUDINARY_UPLOAD_PRESET = 'nn6imhmo';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dne3aha8f/image/upload';
const confirm = Modal.confirm;

class Confirmation extends Component {
    constructor(props) {
        super(props)

        this.state = {
            governmentArray: [],
            previewImage: false,
            previewUrl: '',
        }
    }

    onHandlePreviewImage = (event) => {
        this.setState({ previewImage: true, previewUrl: event.target.src })
    }

    onHandleCancelImage = () => {
        this.setState({ previewImage: false })
    }

    handleGovernmentUpload(files) {
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
    render() {
        var { governmentArray, previewImage, previewUrl } = this.state
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        return (
            <div className="container">
                <div className="col-md-8 col-lg-8 col-xs-12">
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

const WrappedFormConfirmation = Form.create()(Confirmation)

export default connect(mapStateToProps, mapDispatchToProps)(WrappedFormConfirmation)
