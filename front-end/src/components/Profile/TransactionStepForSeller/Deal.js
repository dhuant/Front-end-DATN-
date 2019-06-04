import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, message, Form, Icon, Input, Checkbox, Progress, InputNumber, Select, DatePicker } from 'antd';
import moment from 'moment'
import * as transAction from '../../../actions/transactionRequest'

const Option = Select.Option;
const { TextArea } = Input
const TypeOfPay = [
    { value: '1', label: 'Tiền mặt' },
    { value: '2', label: 'Chuyển khoản' },
];

class Deal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dealdate: 0,
            typeofpay: 1,
        }
    }

    componentDidMount() {
        console.log(this.props.transaction)
        this.props.onGettingTransactionDetail(this.props.transaction._id, this.props.transaction.typetransaction)
    }
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

    onSubmitDeal = () => {
        var dealInfo = {
            total: Number(document.getElementById('TotalPrice').value),
            deposit: Number(document.getElementById('deposit').value),
            typeofpay: this.state.typeofpay === this.props.transactions.selldetail.deal.typeofpay ? Number(this.props.transactions.selldetail.deal.typeofpay) : Number(this.state.typeofpay),
            datedeal: (Number(this.state.dealdate) === Number(this.props.transactions.selldetail.deal.datedeal) || Number(this.state.dealdate) === 0)? Number(this.props.transactions.selldetail.deal.datedeal) : Number(this.state.dealdate),
            description: document.getElementById('moreInformation').value,
            complete: true,
            updateTime: moment().unix(),
            _id: this.props.transactions._id,
            id: this.props.transactions.selldetail._id,
        }

        var existedDealInfo = {
            total: Number(this.props.transactions.selldetail.deal.total),
            deposit: Number(this.props.transactions.selldetail.deal.deposit),
            typeofpay: Number(this.props.transactions.selldetail.deal.typeofpay),
            description: this.props.transactions.selldetail.deal.description,
            datedeal: Number(this.props.transactions.selldetail.deal.datedeal)
        }

        if (dealInfo.total === existedDealInfo.total
            && dealInfo.deposit === existedDealInfo.deposit
            && dealInfo.typeofpay === existedDealInfo.typeofpay
            && dealInfo.datedeal === existedDealInfo.datedeal
            && dealInfo.description === existedDealInfo.description) {
            return message.warning("Bạn chưa thay đổi gì cả!")
        }
        console.log(dealInfo)
        console.log(existedDealInfo)
        this.props.onSendingDeal(dealInfo)
    }

    onChangeSelectValue = (value) => {
        this.setState({ typeofpay: value })
    }
    onChange = (date, dateString) => {
        var formatDate = moment(dateString, 'YYYY/MM/DD, h:mm a').unix()
        this.setState({ dealdate: formatDate })
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        var { transactions } = this.props
        return (
            <div className="container">
                <Form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-md-4 col-lg-4 col-xs-12" >
                            <Form.Item label="Tổng giá trị: ">
                                {getFieldDecorator('TotalPrice', {
                                    initialValue: transactions.selldetail.deal.total,
                                    rules: [{ required: true, message: 'Trường này chưa được nhập!' }],
                                })(
                                    <InputNumber
                                        style={{ width: "100%" }}
                                        // defaultValue={transactions.selldetail.deal.total}
                                        id="TotalPrice"
                                    />,
                                )}
                            </Form.Item>
                        </div>
                        <div className="col-md-4 col-lg-4 col-xs-12">
                            <Form.Item label="Tiền đặt cọc: ">
                                {getFieldDecorator('deposit', {
                                    initialValue: transactions.selldetail.deal.deposit,
                                    rules: [{ required: true, message: 'Trường này chưa được nhập!' }],
                                })(
                                    <InputNumber
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        style={{ width: "100%" }}
                                        // defaultValue={transactions.selldetail.deal.deposit}
                                        id="deposit"
                                    />,
                                )}
                            </Form.Item>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-lg-4 col-xs-12">
                            <Form.Item label="Hình thức thanh toán: ">
                                {getFieldDecorator('paymentMethod', {
                                    // valuePropName: transactions.selldetail.deal.typeofpay,
                                    initialValue: TypeOfPay[transactions.selldetail.deal.typeofpay - 1].label,
                                    rules: [{ required: true, message: 'Trường này chưa được nhập!' }],
                                })(
                                    <Select style={{ width: "100%" }} id="paymentMethod" onChange={this.onChangeSelectValue}>
                                        {TypeOfPay.map(type => <Option key={type.value} value={type.value}>{`${type.label}`}</Option>)}
                                    </Select>
                                )}
                            </Form.Item>
                        </div>
                        <div className="col-md-4 col-lg-4 col-xs-12">
                            <Form.Item label="Ngày bàn giao (dự kiến): ">
                                {getFieldDecorator('date', {
                                    initialValue: moment(moment.unix(transactions.selldetail.deal.datedeal).format('DD/MM/YYYY, h:mm a'), 'DD/MM/YYYY, h:mm a'),
                                    rules: [{ required: true, message: 'Trường này chưa được nhập!' }],
                                })(
                                    <DatePicker onChange={this.onChange} style={{ width: "100%" }} id="dealdate" />
                                )}
                            </Form.Item>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 col-lg-8 col-xs-12">
                            <Form.Item label="Thông tin thêm: ">
                                {getFieldDecorator('moreInformation', {
                                    initialValue: transactions.selldetail.deal.description,
                                    rules: [{ required: true, message: 'Trường này chưa được nhập!' }],
                                })(
                                    <TextArea
                                        placeholder="Thông tin thêm..."
                                        autosize={{ minRows: 2, maxRows: 6 }}
                                        style={{ width: "100%" }}
                                        id="moreInformation"
                                    />
                                )}
                            </Form.Item>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 col-lg-8 col-xs-12">
                            <Form.Item>
                                <Button type="primary" htmlType="submit" style={{ fontSize: "10px", float: "right" }} onClick={this.onSubmitDeal}>
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

const mapStateToProps = (state) => {
    return {
        transactionDetail: state.transactionDetail,
        transactions: state.transaction
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSendingDeal: (dealInfo) => dispatch(transAction.actPostingDealRequest(dealInfo)),
        onGettingTransactionDetail: (id, type) => dispatch(transAction.actGettingTransactionDetailRequest(id, type))
    }

}

const WrappedFormDeal = Form.create()(Deal)

export default connect(mapStateToProps, mapDispatchToProps)(WrappedFormDeal)

