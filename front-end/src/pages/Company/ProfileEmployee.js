import React, { Component } from 'react';
import HeaderCompany from '../../components/Company/HeaderCompany';
import * as actions from '../../actions/Company/requestCompany';
import { message, Button, Modal, Form, Input, Select,Tag } from 'antd'
import { adminService } from '../../actions/Company/admin.service'
import { connect } from 'react-redux';
import moment from 'moment'
const { Option } = Select;
const confirm = Modal.confirm;

class ProfileEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            visible1: false,
            visible2: false,
            lock: false,
            disable: false
        }
    }
    showModal = () => {
        this.setState({
            visible1: true,
        });
    };
    handleOk = e => {
        console.log(e);
        this.setState({
            visible1: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible1: false,
        });
    };
    handleOk2 = e => {
        e.preventDefault();
        let data = {
            lock: !this.props.info.lock
        }
        console.log(data)
    }
    showConfirm = () => {
        let changeLock = !this.props.info.lock;
    
        // console.log(changeLock)
        if (changeLock === true) {
            confirm({
                title: 'Bạn có chắc chắn muốn khóa nhân viên này?',
                onOk: () => {
                    this.setState({
                        disable: true
                    })
                    let data = {
                        lock: changeLock,
                        id: this.props.match.params.id
                    }
                    console.log(data)
                    message.loading('Đang xử lý yêu cầu, vui lòng chờ trong giây lát', 2.5)
                        .then(() => {
                            adminService.changeLockEmployee(data)
                                .then(res => {
                                    if (res.status === 200) {
                                        message.success('Đã khóa tài khoản nhân viên');
                                    }
                                    this.setState({
                                        disable: false
                                    })
                                    // req.push('/company/profile-admin')
                                    this.props.reqGetInfoEmployee(this.props.match.params.id, this.state.page);
                                })
                                .catch(err => {
                                    message.error('Lỗi. Phiền bạn vui lòng kiểm tra lại')
                                })
                        });
                    console.log('Ok');
                    console.log(this.state.disable)
                },
                onCancel() {
                    console.log('Cancel');
                },
            });
        }
        else {
            confirm({
                title: 'Bạn có chắc chắn muốn mở taì khoản nhân viên này?',
                onOk: () => {
                    this.setState({
                        disable: true
                    })
                    let data = {
                        lock: changeLock,
                        id: this.props.match.params.id
                    }
                    console.log(data)
                    message.loading('Đang xử lý yêu cầu, vui lòng chờ trong giây lát', 2.5)
                        .then(() => {
                            adminService.changeLockEmployee(data)
                                .then(res => {
                                    if (res.status === 200) {
                                        message.success('Đã mở tài khoản nhân viên');
                                    }
                                    this.setState({
                                        disable: false
                                    })
                                    this.props.reqGetInfoEmployee(this.props.match.params.id, this.props.match.params.page);
                                    // req.push('/company/profile-admin')
                                })
                                .catch(err => {
                                    message.error('Lỗi. Phiền bạn vui lòng kiểm tra lại')
                                })
                        });
                    console.log(this.state.disable)

                },
                onCancel() {
                    console.log('Cancel');
                },
            });
        }

    }
    componentDidMount() {
        console.log(this.props.match.params.id)
        this.props.reqGetInfoEmployee(this.props.match.params.id, this.props.match.params.page);
        console.log('did')
    }
    onCheckFullName = (rule, value, callback) => {
        const reg = /\d|^[a-z]|^\s|[A-z]{8}|\S{8}|[`~!@#$%^&*()(\-)_=+[(\]){};:'",<.>/?\\|]/
        //Check kí tự đầu là số, chữ cái viết thường, 
        //bắt đầu bằng khoảng trắng, 8 kí tự liền nhau (tên: Nghiêng), kí tự đặc biệt
        if ((!Number.isNaN(value) && reg.test(value)) || value === '' || value.length < 4) {
            callback('Vui lòng nhập đúng tên!');
        }
        else {
            callback()
        }
    }
    onCheckPhoneNumber = (rule, value, callback) => {
        const reg = /^[1-9]?([1-9][0-9]*)?$/;
        if ((!Number.isNaN(value) && reg.test(value) && value.length === 9)) {
            callback();
        }
        else {
            callback('Vui lòng nhập đúng số điện thoại!')
        }
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.setState({
                    disable: true,
                    visible1: false,
                })
                let account = {
                    id: this.props.match.params.id,
                    email: values.email,
                    fullname: values.fullname,
                    identify: this.props.info.identify,
                    address: this.props.info.address,
                    phone: `${values.prefix} ${values.phone}`,
                    totalProject: this.props.info.totalProject,
                    statusAccount: this.props.info.statusAccount,
                    avatar: this.props.info.avatar,
                    description: this.props.info.description,

                }
                console.log(account);
                message.loading('Đang thêm tài khoản, vui lòng chờ trong giây lát', 2.5)
                    .then(() => {
                        adminService.editEmployee(account)
                            .then(res => {
                                if (res.status === 200) {
                                    message.success('Sửa tài khoản thành công');
                                }
                            })
                            .catch(err => {
                                message.error('Lỗi. Phiền bạn vui lòng kiểm tra lại')
                                this.setState({
                                    disable: false,
                                })
                            })
                    });

            }
            else {
                this.setState({
                    disable: false,
                })
            }
        });
    };
    render() {
        let { info, projects } = this.props;
        const { getFieldDecorator } = this.props.form;
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '84',
        })(
            <Select style={{ width: 70 }}>
                <Option value="84">+84</Option>
                <Option value="86">+86</Option>
            </Select>,
        );
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 18 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 24,
                    offset: 0,
                },
            },
        };
        let des = 'Hiện chưa có bài đăng';
        if (projects.length > 0) {
            des = `Có ${projects.length} bài đăng`
        }
        let listProjects = '';
        console.log(info);
        console.log(projects);
        // if (projects.length > 0) {
        // 	// if (option === '1') {
        // 	// 	agents = agents.sort((a, b) => (a.price - b.price))
        // 	// }
        // 	// else if(option === '2'){
        // 	// 	agents = agents.sort((a, b) => (b.price - a.price))
        // 	// }
        // 	// else if(option === '3') {
        // 	// 	agents = agents.sort((a, b) => (a.area - b.area))
        // 	// }
        // 	// else if(option === '4') {
        // 	// 	agents = agents.sort((a, b) => (b.area - a.area))
        // 	// }
        // 	des = `Hiện đang có ${projects.length} bài đăng`
        // 	listProjects = projects.map((project, index) => {
        // 		return (
        // 			<InfoEstateOfAgent
        // 				key={index}
        // 				project={project}
        // 			/>
        // 		)
        // 	}
        // 	)
        // }

        let mobile = 'Đang cập nhật'
        if (info.phone !== '') {
            mobile = info.phone
        }
        let address = 'Đang cập nhật'

        if (info.address !== '') {
            address = info.address
        }
        let statusButton = 'Mở tài khoản'
        let btn =
            <Button
                type="primary"
                style={{ margin: '5px 0 5px 0' }}
                // htmlType="submit"
                disabled={this.state.disable}
                onClick={this.showModal}
            >
                Chỉnh sửa tài khoản
            </Button>
            
        let verify = <Tag style={{fontSize:'13px'}} color='red'>Chưa kích hoạt</Tag>
        if (info.verify === true) {
            verify = <Tag style={{fontSize:'13px'}} color='green'>Chưa kích hoạt</Tag>
            btn =
                <Button
                    type="primary"
                    style={{ margin: '5px 0 5px 0' }}
                    // htmlType="submit"
                    disabled
                    onClick={this.showModal}
                >
                    Chỉnh sửa tài khoản
                </Button>
        }
        let lock = <Tag style={{fontSize:'13px'}} color='red'>Tài khoản bị khóa</Tag>
        if (info.lock === false) {
            lock = <Tag style={{fontSize:'13px'}} color='green'>Tài khoản được phép sử dụng</Tag>
            statusButton = 'Khóa tài khoản'
        }
        return (
            <div>
                <HeaderCompany />
                {/* Sub banner start */}
                <div className="sub-banner overview-bgi" >
                    <div className="overlay">
                        <div className="container">
                            <div className="breadcrumb-area">
                                <h1>Thông tin nhân viên</h1>
                                <ul className="breadcrumbs">
                                    <li><a href="index.html">Trang chủ</a></li>
                                    <li className="active">Thông tin nhân viên</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Sub Banner end */}
                <div className="agent-section content-area" style={{ backgroundColor: '#ebebeb' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="row">
                                    {/* Agent detail start */}
                                    <div className="agent-detail clearfix">
                                        {/* <div className="row"> */}
                                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 agent-theme">
                                            <img src={info.avatar} style={{ height: '280px', width: '290px' }} alt="agent-1" className="img-responsive" />
                                        </div>
                                        <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 agent-content">
                                            <h3>
                                                {info.fullname}
                                            </h3>

                                            <ul className="address-list">

                                                <li>
                                                    <span>
                                                        <i className="fa fa-envelope" />Email:
                                                </span>
                                                    {info.email}
                                                </li>

                                                <li>
                                                    <span>
                                                        <i className="fa fa-mobile" />Điện thoại:
                                                </span>
                                                    {mobile}
                                                </li>
                                                <li>
                                                    <span>
                                                        <i class="fa fa-map-marker" />Địa chỉ:
                                                </span>
                                                    {address}
                                                </li>
                                                <li>
                                                    <span>
                                                        <i className="fa fa-tag"></i>Trạng thái:
                                                </span>
                                                    {verify}
                                                </li>
                                                <li>
                                                    <span>
                                                        <i className="fa fa-tag"></i>Tình trạng:
                                                </span>
                                                    {lock}
                                                </li>
                                            </ul>


                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 "
                                            style={{
                                                height: '280px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                            <div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                                                >
                                                    <div>
                                                        {btn}
                                                    </div>
                                                    <Modal
                                                        title="Basic Modal"
                                                        visible={this.state.visible1}
                                                        onCancel={this.handleCancel}
                                                        onOk={this.handleOk}
                                                        okButtonProps={{ disabled: false }}
                                                        cancelButtonProps={{ disabled: false }}
                                                        footer={[
                                                            <Button key="back" onClick={this.handleCancel}>
                                                                Hủy
                                                </Button>,
                                                            <Button key="submit" type="primary" onClick={this.handleSubmit}>
                                                                Chỉnh sửa
                                                </Button>,
                                                        ]}
                                                    >
                                                        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                                                            <Form.Item label="Họ và tên" style={{ paddingRight: '20px' }} hasFeedback>
                                                                {getFieldDecorator('fullname', {
                                                                    rules: [
                                                                        {
                                                                            min: 5,
                                                                            required: true,
                                                                            message: 'Vui lòng nhập tên của nhân viên!',
                                                                        },
                                                                        {
                                                                            validator: this.onCheckFullName,
                                                                        },
                                                                    ],
                                                                })(<Input
                                                                    //onChange={this.onChange} 
                                                                    style={{ marginRight: '30px' }}
                                                                    placeholder="Nhập tên nhân viên (Bắt đầu bằng chữ in hoa)"
                                                                    maxLength={50} />)}
                                                            </Form.Item>
                                                            <Form.Item label="E-mail" style={{ paddingRight: '20px' }} hasFeedback>
                                                                {getFieldDecorator('email', {
                                                                    rules: [
                                                                        {
                                                                            type: 'email',
                                                                            message: 'Văn bản không đúng định dạng email',
                                                                        },
                                                                        {
                                                                            required: true,
                                                                            message: 'Vui lòng nhập email của nhân viên vào ô văn bản',
                                                                        },
                                                                    ],
                                                                })(<Input style={{ marginRight: '30px' }} />)}
                                                            </Form.Item>
                                                            <Form.Item label="Số điện thoại" style={{ paddingRight: '20px' }} hasFeedback>
                                                                {getFieldDecorator('phone', {
                                                                    rules: [
                                                                        {
                                                                            required: true,
                                                                            message: 'Vui lòng nhập số điện thoại của nhân viên!',
                                                                        },
                                                                        {
                                                                            validator: this.onCheckPhoneNumber,
                                                                        },
                                                                    ],
                                                                })(<Input
                                                                    addonBefore={prefixSelector}
                                                                    //onChange={this.onChange} 
                                                                    style={{ marginRight: '30px' }}
                                                                    placeholder="Nhập 9 chữ số sau số 0"
                                                                    maxLength={9} />)}
                                                            </Form.Item>
                                                        </Form>
                                                    </Modal>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                                                >
                                                    <div >
                                                        <Button style={{ width: '157px', margin: '5px 0 5px 0' }} type="danger" onClick={this.showConfirm} disabled={this.state.disable}>
                                                            {statusButton}
                                                        </Button>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        {/* </div> */}
                                    </div>
                                    <div className="recently-properties">
                                        {/* Main title */}

                                        {/* Option bar start */}
                                        <div className="option-bar">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-5 col-sm-5 col-xs-2">
                                                    <h4>
                                                        <span className="heading-icon">
                                                            <i className="fa fa-th-list" />
                                                        </span>
                                                        <span className="hidden-xs">Danh sách bài đăng</span>
                                                    </h4>
                                                </div>
                                                <div className="col-lg-6 col-md-7 col-sm-7 col-xs-10 cod-pad">
                                                    <div className="sorting-options">
                                                        <select className="sorting">
                                                            <option>Bài đăng bán bất động sản</option>
                                                            <option>Bài đăng cho thuê bất động sản</option>

                                                        </select>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Option bar end */}
                                        <div className="clearfix" />
                                        <div className="main-title-2">
                                            <h4><span>{des}</span> </h4>
                                        </div>
                                        <div className="row">

                                        </div>
                                    </div>
                                </div>
                                {/* Agent detail end */}

                                {/* Recently properties start */}

                                {/* Partners block end */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Agent section end */}
            </div >
        );
    }
}

const mapDispathToProp = (dispatch) => {
    return {
        reqGetInfoEmployee: (id, page) => dispatch(actions.reqGetInfoEmployee(id, page))
    }
}
const mapStateToProp = (state) => {
    return {
        info: state.infoEmployee,
        projects: state.projectsOfEmployee
    }
}
export default connect(mapStateToProp, mapDispathToProp)(Form.create()(ProfileEmployee));