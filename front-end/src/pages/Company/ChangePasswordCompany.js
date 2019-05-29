import React, { Component } from 'react';
import HeaderCompany from '../../components/Company/HeaderCompany'
import Footer from '../../components/Footer'
import InfoCompany from '../../components/Company/ProfileCompany/InfoCompany'
import { CHANGE_PASSWORD } from '../../constants/Company/profileCompany'
// import FollowingProject from '../components/My Properties/FollowingProject'
import { Link } from 'react-router-dom'
import  {adminService} from '../../actions/Company/admin.service'
import { message } from 'antd';
class ChangePasswordCompany extends Component {
    constructor() {
        super();
        this.state = {
            password: '',
            newpassword: '',
            confirmpassword: '',
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
    onQuit = (e) => {
        e.preventDefault();
        this.props.history.push('/company/profile-admin')
    }
    onChangePassword = (e) => {
        e.preventDefault();
        let data = {
            currentPassword: this.state.password,
            newPassword: this.state.newpassword,

        }
        message.loading('Đang cập nhật lại mật khẩu', 2)
        .then(()=>{
            adminService.changePasswordCompany(data)
            .then(res => {
                if(res.status === 200){
                    message.success('Đổi mật khẩu thành công');
                }
                this.props.history.push('/company/profile-admin')
            })
            .catch(err => {
                message.error('Đổi mật khẩu thất bại. Mời bạn vui lòng thử lại')
            })
        });
    }
    render() {
        let { password, newpassword, confirmpassword } = this.state;
        let message = '';
        let button = <button style={{ marginRight: '5px' }} type="submit" className="btn btn-success" disabled >Lưu thay đổi</button>
        
        if(confirmpassword !=='' & newpassword !=='' & confirmpassword === newpassword){
            message = <h5 style={{color:'green', marginTop:'4px', marginLeft:'2px'}}><b>Mật khẩu khớp</b></h5>
            button = <button style={{ marginRight: '5px' }} type="submit" className="btn btn-success" >Lưu thay đổi</button>
        }
        return (
            <div>
                <HeaderCompany />
                {/* Sub banner start */}
                <div className="sub-banner overview-bgi">
                    <div className="overlay">
                        <div className="container">
                            <div className="breadcrumb-area">
                                <h1>Đổi mật khẩu</h1>
                                <ul className="breadcrumbs">
                                    <li><Link to="/">Trang chủ</Link></li>
                                    <li className="active">Đổi mật khẩu</li>
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
                                <InfoCompany component={CHANGE_PASSWORD} />
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-12">
                                <div className="main-title-2">
                                    <h1><span>Đổi mật khẩu</span></h1>
                                </div>
                                {/* table start */}

                                <form className="form-horizontal" onSubmit={this.onChangePassword}>
                                    <div className="form-group">
                                        <label htmlFor="password" className="col-sm-3 control-label">Mật khẩu hiện tại</label>
                                        <div className="col-sm-9">
                                            <input
                                                type="password"
                                                id="password"
                                                name="password"
                                                placeholder="Nhập mật khẩu hiện tại"
                                                className="form-control"
                                                value={password}
                                                required
                                                onChange={this.handleOnChange} />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="newpassword" className="col-sm-3 control-label">Mật khẩu mới</label>
                                        <div className="col-sm-9">
                                            <input
                                                type="password"
                                                id="newpassword"
                                                name="newpassword"
                                                placeholder=""
                                                className="form-control"
                                                onChange={this.handleOnChange}
                                                value={newpassword}
                                                required />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="confirmpassword" className="col-sm-3 control-label">Nhập lại mật khẩu mới</label>
                                        <div className="col-sm-9">
                                            <input
                                                type="password"
                                                id="confirmpassword"
                                                name="confirmpassword"
                                                placeholder=""
                                                className="form-control"
                                                onChange={this.handleOnChange}
                                                value={confirmpassword}
                                                required />
                                            
                                            {message}
                                        </div>
                                    </div>
                                    <div className="form-group" style={{ textAlign: 'center' }}>
                                        {/* <button type="submit" className="btn btn-primary btn-block">Đăng kí</button> */}
                                        {button}
                                        <button onClick={this.onQuit} type="button" class="btn btn-primary">Hủy</button>
                                    </div>
                                </form>

                                {/* table end */}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default ChangePasswordCompany;