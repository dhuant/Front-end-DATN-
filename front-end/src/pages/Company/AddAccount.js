import React, { Component } from 'react';
import { ADD_ACCOUNT } from '../../constants/Company/profileCompany'
import InfoCompany from '../../components/Company/ProfileCompany/InfoCompany'
import Footer from '../../components/Footer'
import HeaderCompany from '../../components/Company/HeaderCompany'
import { Link } from 'react-router-dom'
import {message} from 'antd'
import { connect } from 'react-redux';
// import * as actions from '../../actions/Company/requestCompany';
import {withRouter} from 'react-router-dom'
import  {adminService} from '../../actions/Company/admin.service'
import moment from 'moment'
class AddAccount extends Component {
    constructor() {
        super();
        this.state = {
            fullname:'',
            email: '',
            phoneNumber:'',
            description:'',
            address: ''

        };
    }
    handleOnChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value,
        });
    }
    onQuit =(e) =>{
        e.preventDefault();
        this.props.history.push('/company/profile-admin')
    }
    onRegister=(e)=>{
        e.preventDefault();
        let account ={
            fullname: this.state.fullname,
            email: this.state.email,
            phone: this.state.phoneNumber,
            description: this.state.description,
            address: this.state.address,
            avatar: 'https://res.cloudinary.com/dne3aha8f/image/upload/v1559203321/ddtyciszy3oiwdjasrjh.png?fbclid=IwAR3RFWWiOrMw-sMiNigCXJMFEGdpYw_FUBa4PxZYZLTtHvjLaa1JjBpNGy0',
            createTime: moment.unix(),
            updateTime: moment.unix(),
        }
        message.loading('Đang thêm tài khoản', 2)
        .then(()=>{
            adminService.addAccount(account)
            .then(res => {
                if(res.status === 201){
                    message.success('Thêm tài khoản nhân viên thành công');
                }
                this.props.history.push('/company/profile-admin')
            })
            .catch(err => {
                message.error('Lỗi. Phiền bạn vui lòng kiểm tra lại')
            })
        });
        
    }
    render() {
        let {fullname, email,phoneNumber, description} = this.state;
        return (
            <div>
                <HeaderCompany />
                {/* Sub banner start */}
                <div className="sub-banner overview-bgi">
                    <div className="overlay">
                        <div className="container">
                            <div className="breadcrumb-area">
                                <h1>My Properties</h1>
                                <ul className="breadcrumbs">
                                    <li><Link to="/">Home</Link></li>
                                    <li className="active">Thêm tài khoản nhân viên</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Sub Banner end */}

                {/* My Propertiess start */}
                <div className="content-area-7 my-properties">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <InfoCompany component={ADD_ACCOUNT} />
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-12">
                                <div className="main-title-2">
                                    <h1><span>Thêm tài khoản nhân viên</span> </h1>
                                </div>

                                <form className="form-horizontal" onSubmit={this.onRegister}>
                                    <div className="form-group">
                                        <label htmlFor="fullname" className="col-sm-3 control-label">Họ và tên*</label>
                                        <div className="col-sm-9">
                                            <input 
                                            type="text" 
                                            id="fullname" 
                                            name="fullname" 
                                            placeholder="Nhập đầy đủ họ tên" 
                                            className="form-control" 
                                            value={fullname} 
                                            required
                                            onChange={this.handleOnChange}  />
                                        </div>
                                    </div>
                                    {/* <div className="form-group">
                                        <label htmlFor="username" className="col-sm-3 control-label">Tên đăng nhập*</label>
                                        <div className="col-sm-9">
                                            <input type="text" id="username" placeholder="Dùng email của nhân viên để làm tên đăng nhập" className="form-control" required /> 
                                            
                                        </div>
                                    </div> */}
                                    {/* autofocus /> */}
                                    {/* <div className="form-group">
                                        <label htmlFor="password" className="col-sm-3 control-label">Mật khẩu*</label>
                                        <div className="col-sm-9">
                                            <input type="password" id="password" placeholder="Mật khẩu" className="form-control" required/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password" className="col-sm-3 control-label">Confirm Password*</label>
                                        <div className="col-sm-9">
                                            <input type="password" id="password" placeholder="Password" className="form-control" required/>
                                        </div>
                                    </div> */}
                                    <div className="form-group">
                                        <label htmlFor="email" className="col-sm-3 control-label">Email* </label>
                                        <div className="col-sm-9">
                                            <input 
                                            type="email" 
                                            id="email" 
                                            placeholder="Email" 
                                            className="form-control" 
                                            name="email" 
                                            value={email} 
                                            required 
                                            onChange={this.handleOnChange} />
                                        </div>
                                    </div>  
                                    
                                    <div className="form-group">
                                        <label htmlFor="phoneNumber" className="col-sm-3 control-label">Số điện thoại* </label>
                                        <div className="col-sm-9">
                                            <input 
                                            type="phoneNumber" 
                                            id="phoneNumber" 
                                            name="phoneNumber" 
                                            placeholder="Nhập số điện thoại của nhân viên" 
                                            className="form-control" 
                                            value={phoneNumber}
                                            onChange={this.handleOnChange}
                                            required/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="description" className="col-sm-3 control-label">Mô tả </label>
                                        <div className="col-sm-9">
                                        <textarea  onChange={this.handleOnChange} className="form-control" id="description" name="description" placeholder="Nhập mô tả về nhân viên" value={description}/>
                                        </div>
                                    </div>
                                    <div className="form-group" style={{textAlign:'center'}}>
                                    {/* <button type="submit" className="btn btn-primary btn-block">Đăng kí</button> */}
                                    <button style={{marginRight:'5px'}} type="submit" className="btn btn-success">Tạo tài khoản</button>
                                    <button onClick={this.onQuit} type="button" class="btn btn-primary">Hủy</button>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* My Propertiess end */}
                    <Footer />
                </div>
            </div>
        );
    }
}
const mapDispathToProp = (dispatch) => {
    return {
    }
}
const mapStateToProp = (state) => {
    return {
        userCompany: state.userCompany
    }
}

export default connect(mapStateToProp, mapDispathToProp)(withRouter(AddAccount));
