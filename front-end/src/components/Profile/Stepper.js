import { Steps, Button, message, Form, Icon, Input, Checkbox, Progress, InputNumber, Select, DatePicker } from 'antd';
import Dropzone from 'react-dropzone'
import React from 'react'
import request from 'superagent'
import Deal from './Deal'
import Legality from './Legality'

const Step = Steps.Step;
const Option = Select.Option;
const { TextArea } = Input

const CLOUDINARY_UPLOAD_PRESET = 'nn6imhmo';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dne3aha8f/image/upload';

class Stepper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            percent: 0,
        };
    }

    next() {
        const current = this.state.current + 1;
        this.setState({
            current,
            percent: Number((this.state.percent + 100 / 7).toFixed(2))
        });
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({ current, percent: Number((this.state.percent - 100 / 7).toFixed(2)) });
    }
    hasErrors = (fieldsError) => {
        return Object.keys(fieldsError).some(field => fieldsError[field]);
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({ percent: 100 })
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    onChange = (date, dateString) => {
        console.log(date, dateString);
    }

    onHandleChange = () => {

    }

    onImageSelect(files) {
        this.setState({
            uploadedFile: files[0]
        });

        this.handleImageUpload(files[0]);
    }

    handleImageUpload(file) {
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
            .field('file', file);

        upload.end((err, response) => {
            if (err) {
                console.error(err);
            }

            if (response.body.secure_url !== '') {
                this.setState({
                    uploadedFileCloudinaryUrl: response.body.secure_url
                });
            }
        });
    }

    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        const { current } = this.state;
        // const totalPriceError = isFieldTouched('TotalPrice') && getFieldError('TotalPrice');
        // const depositError = isFieldTouched('deposit') && getFieldError('deposit');
        // const paymentMethodError = isFieldTouched('paymentMethod') && getFieldError('paymentMethod');
        // const payNumberError = isFieldTouched('payNumber') && getFieldError('payNumber');
        // console.log(document.getElementById("MoreInformation").value)
        const steps = [
            {
                title: 'Thỏa thuận mua ban đầu',
                content: (
                    <Deal />
                )
            },
            {
                title: 'Kiểm tra tính pháp lý của bất động sản',
                content: (
                    <Legality />
                ),
            },
            {
                title: 'Đặt cọc',
                content: 'Last-content',
            },
            {
                title: 'Ký hợp đồng',
                content: 'Last-content',
            },
            {
                title: 'Công chứng hợp đồng',
                content: 'Last-content',
            },
            {
                title: 'Đóng thuế',
                content: 'Last-content',
            },
            {
                title: 'Giao bất động sản',
                content: 'Last-content',
            },
        ];
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        <Progress percent={this.state.percent} />
                        <br></br>
                        <Steps current={current} direction="vertical">
                            {steps.map(item => (
                                <Step key={item.title} title={item.title} />
                            ))}
                        </Steps>
                        <div className="steps-content">{steps[current].content}</div>
                        <div className="steps-action">
                            {current > 0 && (
                                <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                                    Previous
                                </Button>
                            )}
                            {current < steps.length - 1 && (
                                <Button type="primary" onClick={() => this.next()}>
                                    Next
                                </Button>
                            )}
                            {current === steps.length - 1 && (
                                <Button type="primary" onClick={this.handleSubmit}>
                                    Done
                                </Button>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const WrappedForm = Form.create()(Stepper)

export default WrappedForm