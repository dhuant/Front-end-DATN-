import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, message, Form, Icon, Input, Checkbox, Progress, InputNumber, Select, DatePicker } from 'antd';

class Deposit extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    hasErrors = (fieldsError) => {
        return Object.keys(fieldsError).some(field => fieldsError[field]);
    }

    handleSubmit = () => {
        
    }
    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        return (
            <div className="container">
                <Form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-md-8 col-lg-8 col-xs-12">
                            <Form.Item label="Số tiền đặt cọc: ">
                                {getFieldDecorator('depositAmount', {
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
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

const WrappedFormDeposit = Form.create()(Deposit)

export default connect(mapStateToProps, mapDispatchToProps)(WrappedFormDeposit)
