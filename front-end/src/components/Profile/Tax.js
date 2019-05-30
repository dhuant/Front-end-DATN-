import React, { Component } from 'react'
import { Button, message, Form, Icon, Input, Checkbox, Progress, InputNumber, Select, DatePicker, Modal } from 'antd';
import { connect } from 'react-redux'

class Tax extends Component {

    render() {
        const {getFieldDecorator} = this.props.form
        return (
            <div className="container">
                <div className="row">
                    <div className="main-title-2">
                        <h1><span>Bên</span> bán</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-lg-4 col-xs-12">
                            <Form.Item label="Ngày đóng thuế: ">
                                {getFieldDecorator('sellerTaxDate', {
                                    rules: [{ required: true, message: 'Trường này chưa được nhập!' }],
                                })(
                                    <DatePicker onChange={this.onChange} style={{ width: "100%" }} />
                                )}
                            </Form.Item>
                        </div>
                        <div className="col-md-4 col-lg-4 col-xs-12">
                            <Form.Item label="Số tiền: ">
                                {getFieldDecorator('sellerTaxAmount', {
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
                </div>
                <div className="row">
                    <div className="main-title-2">
                        <h1><span>Bên</span> mua</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-lg-4 col-xs-12">
                            <Form.Item label="Ngày đóng thuế: ">
                                {getFieldDecorator('buyerTaxDate', {
                                    rules: [{ required: true, message: 'Trường này chưa được nhập!' }],
                                })(
                                    <DatePicker onChange={this.onChange} style={{ width: "100%" }} />
                                )}
                            </Form.Item>
                        </div>
                        <div className="col-md-4 col-lg-4 col-xs-12">
                            <Form.Item label="Số tiền: ">
                                {getFieldDecorator('buyerTaxAmount', {
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
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

const WrappedFormTax = Form.create()(Tax)

export default connect(mapStateToProps, mapDispatchToProps)(WrappedFormTax)
