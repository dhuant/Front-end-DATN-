import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, message, Form, Icon, Input, Checkbox, Progress, InputNumber, Select, DatePicker } from 'antd';

const Option = Select.Option;
const { TextArea } = Input

class Deal extends Component {

    hasErrors = (fieldsError) => {
        return Object.keys(fieldsError).some(field => fieldsError[field]);
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

        return (
            <div className="container">
                <Form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-md-4 col-lg-4 col-xs-12" >
                            <Form.Item label="Tổng giá trị: ">
                                {getFieldDecorator('TotalPrice', {
                                    rules: [{ required: true, message: 'Trường này chưa được nhập!' }],
                                })(
                                    <InputNumber
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        style={{ width: "100%" }}
                                    />,
                                )}
                            </Form.Item>
                        </div>
                        <div className="col-md-4 col-lg-4 col-xs-12">
                            <Form.Item label="Tiền đặt cọc: ">
                                {getFieldDecorator('deposit', {
                                    rules: [{ required: true, message: 'Trường này chưa được nhập!' }],
                                })(
                                    <InputNumber
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        style={{ width: "100%" }}
                                    />,
                                )}
                            </Form.Item>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-lg-4 col-xs-12">
                            <Form.Item label="Hình thức thanh toán: ">
                                {getFieldDecorator('paymentMethod', {
                                    rules: [{ required: true, message: 'Trường này chưa được nhập!' }],
                                })(
                                    <Select style={{ width: "100%" }}>
                                        <Option value={1}>Tiền mặt</Option>
                                        <Option value={2}>Chuyển khoản</Option>
                                    </Select>
                                )}
                            </Form.Item>
                        </div>
                        <div className="col-md-4 col-lg-4 col-xs-12">
                            <Form.Item label="Ngày bàn giao (dự kiến): ">
                                {getFieldDecorator('date', {
                                    rules: [{ required: true, message: 'Trường này chưa được nhập!' }],
                                })(
                                    <DatePicker onChange={this.onChange} style={{ width: "100%" }} />
                                )}
                            </Form.Item>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 col-lg-8 col-xs-12">
                            <Form.Item label="Thông tin thêm: ">
                                {getFieldDecorator('moreInformation', {
                                    rules: [{ required: true, message: 'Trường này chưa được nhập!' }],
                                })(
                                    <TextArea
                                        placeholder="Thông tin thêm..."
                                        autosize={{ minRows: 2, maxRows: 6 }}
                                        style={{ width: "100%" }}
                                    />
                                )}
                            </Form.Item>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 col-lg-8 col-xs-12">
                            <Form.Item>
                                <Button type="primary" htmlType="submit" style={{ fontSize: "10px", float: "right" }}>
                                    Xác nhận
                                </Button>
                            </Form.Item>
                        </div>
                    </div>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

const WrappedForm = Form.create()(Deal)

export default connect(mapStateToProps, mapDispatchToProps)(WrappedForm)

