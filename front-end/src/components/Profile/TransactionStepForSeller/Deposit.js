import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, message, Form, Icon, Input, Checkbox, Progress, InputNumber, Select, DatePicker } from 'antd';
import * as transAction from '../../../actions/transactionRequest'
import moment from 'moment'

const Option = Select.Option;

const DepositUnit = [
    { value: '1', label: 'Triệu' },
    { value: '2', label: 'Tỉ' },
];

class Deposit extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // depositUnit: DepositUnit[0].value
        }
    }

    componentDidMount = () => {
        this.props.onGettingTransactionDetail(this.props.transaction._id, this.props.transaction.typetransaction)
    }

    hasErrors = (fieldsError) => {
        return Object.keys(fieldsError).some(field => fieldsError[field]);
    }

    onCheckingDepositAmount = (rule, value, callback) => {
        if (value !== undefined || value !== null || value !== '')
            if (Number(this.props.transaction.project.price) - Number(value) >= 0)
                callback()
            else callback('Số tiền đặt cọc phải nhỏ hơn giá trị bất động sản!')
    }
    handleSubmit = e => {
        e.preventDefault();
        var depositData = null
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                var detail = [
                    {
                        ratio: Number(values.depositAmount),
                        description: values.moreDepositInformation,
                        createTime: moment().unix()
                    }
                ]
                depositData = {
                    detail: detail,
                    rest: `${Number(this.props.transaction.project.price) - Number(values.depositAmount)} triệu`,
                    complete: true,
                    updateTime: moment().unix(),
                    _id: this.props.transaction._id,
                    id: this.props.transaction.selldetail._id,
                }
                if (this.props.transactions.selldetail.deposit.detail[0].ratio === values.depositAmount
                    && this.props.transactions.selldetail.deposit.detail[0].description === values.moreDepositInformation)
                    return message.warning('Bạn chưa thay đổi gì cả!')
                this.props.onSendingDeposit(depositData)
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        var { transactions, transaction } = this.props
        return (
            <div className="container">
                <Form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-md-8 col-lg-8 col-xs-12">
                            <Form.Item label="Số tiền đặt cọc (đơn vị: triệu): ">
                                {getFieldDecorator('depositAmount', {
                                    initialValue: transactions.selldetail.deposit.detail[0].ratio,
                                    rules: [
                                        { required: true, message: 'Trường này chưa được nhập!' },
                                        { validator: this.onCheckingDepositAmount }
                                    ],
                                })(
                                    <InputNumber
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        style={{ width: "100%" }}
                                        min={0}
                                        step={0.1}
                                    />,
                                )}
                            </Form.Item>
                        </div>

                        {/* <div className="col-md-3 col-lg-3 col-xs-12">
                            <Form.Item label="Đơn vị: ">
                                {getFieldDecorator('depositUnit', {
                                    // initialValue: transactions.selldetail.deal.total,
                                    rules: [
                                        { required: true, message: 'Trường này chưa được nhập!' }
                                    ],
                                })(
                                    <Select style={{ width: "100%" }} id="depositUnit" onChange={this.onChangeSelectValue}>
                                        {DepositUnit.map(type => <Option key={type.value} value={type.value}>{`${type.label}`}</Option>)}
                                    </Select>
                                )}
                            </Form.Item>
                        </div> */}
                    </div>

                    <div className="row">
                        <div className="col-md-8 col-lg-8 col-xs-12">
                            <Form.Item label="Thông tin thêm: ">
                                {getFieldDecorator('moreDepositInformation', {
                                    initialValue: transactions.selldetail.deposit.detail[0].description,
                                    rules: [{ required: true, message: 'Trường này chưa được nhập!' }],
                                })(
                                    <Input.TextArea
                                        style={{ width: "100%" }}
                                        autosize={{ minRows: 2, maxRows: 6 }}
                                        placeholder="Thông tin thêm..."
                                    />,
                                )}
                            </Form.Item>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 col-lg-8 col-xs-12">
                            <Form.Item>
                                <Button type="primary" htmlType="submit" style={{ fontSize: "13px", float: "right" }}>
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
    transactions: state.transaction,
    transactionDetail: state.transactionDetail
})

const mapDispatchToProps = (dispatch) => {
    return {
        onSendingDeposit: (depositData) => dispatch(transAction.actPostingDepositRequest(depositData)),
        onGettingTransactionDetail: (id, type) => dispatch(transAction.actGettingTransactionDetailRequest(id, type))
    }
}

const WrappedFormDeposit = Form.create()(Deposit)

export default connect(mapStateToProps, mapDispatchToProps)(WrappedFormDeposit)
