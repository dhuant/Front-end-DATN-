/* eslint-disable */
import { Steps, Button, Form, Input, Progress, Select } from 'antd';
import React from 'react'
import Deal from './TransactionStepForBuyer/Deal'
import Legality from './TransactionStepForBuyer/Legality'
import Deposit from './TransactionStepForBuyer/Deposit'
import Contract from './TransactionStepForBuyer/Contract'
import Confirmation from './TransactionStepForBuyer/Confirmation'
import Tax from './TransactionStepForBuyer/Tax'
import Delivery from './TransactionStepForBuyer/Delivery'
import Transfer from './TransactionStepForBuyer/Transfer'
// import * as transAction from '../../actions/transactionRequest'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const Step = Steps.Step;
// const Option = Select.Option;
// const { TextArea } = Input

class StepperForBuyer extends React.Component {
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
            percent: this.props.transaction.typetransaction === 1 ? Number((this.state.percent + 100 / 8).toFixed(2)) : Number(this.state.percent + 20)
        });
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({ current, percent: this.props.transaction.typetransaction === 1 ? Number((this.state.percent - 100 / 8).toFixed(2)) : Number(this.state.percent - 20) });
        
    }
    hasErrors = (fieldsError) => {
        return Object.keys(fieldsError).some(field => fieldsError[field]);
    }

    handleSubmit = () => {
        this.setState({ percent: 100 })
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.history.push('/mytransactions')
            }
        });
    };

    render() {
        // const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        const { current } = this.state;
        var { transaction } = this.props
        const steps = transaction.typetransaction === 1 ? [
            {
                title: 'Thỏa thuận mua ban đầu',
                content: (
                    <Deal transaction={transaction} />
                )
            },
            {
                title: 'Kiểm tra tính pháp lý của bất động sản',
                content: (
                    <Legality transaction={transaction} />
                ),
            },
            {
                title: 'Đặt cọc',
                content: <Deposit transaction={transaction} />,
            },
            {
                title: 'Ký hợp đồng',
                content: <Contract transaction={transaction} />,
            },
            {
                title: 'Chuyển nhượng quyền sử dụng căn hộ',
                content: <Transfer transaction={transaction} />,
            },
            {
                title: 'Công chứng hợp đồng',
                content: <Confirmation transaction={transaction} />,
            },
            {
                title: 'Đóng thuế',
                content: <Tax transaction={transaction} />,
            },
            {
                title: 'Giao bất động sản',
                content: <Delivery transaction={transaction} />,
            },
        ] : [
                {
                    title: 'Thỏa thuận mua ban đầu',
                    content: <Deal transaction={transaction} />
                },
                {
                    title: 'Đặt cọc',
                    content: <Deposit transaction={transaction} />,
                },
                {
                    title: 'Ký hợp đồng',
                    content: <Contract transaction={transaction} />,
                },
                {
                    title: 'Công chứng hợp đồng',
                    content: <Confirmation transaction={transaction} />,
                },
                {
                    title: 'Giao bất động sản',
                    content: <Delivery transaction={transaction} />,
                },
            ];
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        <Progress percent={this.state.percent} status="active" strokeColor={{
                            '0%': '#108ee9',
                            '100%': '#87d068',
                        }} />
                        <hr></hr>
                        <Steps current={current} direction="vertical" size="small">
                            {steps.map(item => (
                                <Step key={item.title} title={item.title} />
                            ))}
                        </Steps>
                        <hr></hr>
                        <div className="steps-content">{steps[current].content}</div>
                        <hr></hr>
                        <div className="steps-action">
                            {current > 0 && (
                                <Button style={{}} onClick={() => this.prev()}>
                                    <i className="fa fa-arrow-left" style={{ marginRight: "3px" }}></i>Bước trước
                                </Button>
                            )}
                            {current < steps.length - 1 && (
                                <Button style={{ marginLeft: "10px" }} type="primary" onClick={() => this.next()}>
                                    <i className="fa fa-arrow-right" style={{ marginRight: "3px" }}></i> Bước tiếp
                                </Button>
                            )}
                            {current === steps.length - 1 && (
                                <Button style={{ marginLeft: "10px" }} type="primary" onClick={() => this.handleSubmit()}>
                                    <i className="fa fa-check" style={{ marginRight: "3px" }}></i> Hoàn tất
                                </Button>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const WrappedForm = Form.create()(StepperForBuyer)

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(WrappedForm))