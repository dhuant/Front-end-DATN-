import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actions from '../../actions/request'

class Detail extends Component {
    componentDidMount =() => {
        this.props.onGetEstateListOfUser()
        this.props.onGetUserInfo()
    }
    onSubmit = (e) => {
        e.preventDefault()
        var updateInfo = {
            fullname: document.getElementById('fullname').value,
            address: document.getElementById('address').value,
            phone: document.getElementById('phone').value,
            description: document.getElementById('description').value,
            avatar: localStorage.getItem('avatar') ? localStorage.getItem('avatar') : JSON.parse(localStorage.getItem('res')).user.avatar,
            statusAccount: 2,
            totalProject: this.props.estatesListOfUser.length
        }
        this.props.onEditUserInfo(updateInfo)
    }

    render() {
        let { user, userUpdated } = this.props;
        console.log(user);
        console.log(userUpdated)
        console.log(userUpdated.user)
        return (
            <div>
                <div className="my-address">
                    <div className="main-title-2">
                        <h1><span>Thông tin</span> cơ bản</h1>
                    </div>
                    <form action="http://themevessel-item.s3-website-us-east-1.amazonaws.com/nest/index.html" method="POST">
                        <div className="form-group">
                            <label>Tên đầy đủ</label>
                            <input type="text" className="input-text" name="fullname" id="fullname" placeholder="Nhập tên của bạn..." defaultValue={userUpdated.fullname !== '' ? userUpdated.fullname : JSON.parse(localStorage.getItem('res')).user.fullname} />
                        </div>
                        <div className="form-group">
                            <label>Địa chỉ</label>
                            <input type="text" className="input-text" name="address" id="address" placeholder="Nhập địa chỉ của bạn..." defaultValue={userUpdated.address !== '' ? userUpdated.address : ' '} required/>
                        </div>
                        <div className="form-group">
                            <label>Số điện thoại</label>
                            <input type="text" className="input-text" name="phone" id="phone" placeholder="+55 4XX-634-7071" defaultValue={userUpdated.phone === '' ? ' ' : userUpdated.phone} required/>
                        </div>
                        <div className="form-group">
                            <label>Giới thiệu bản thân</label>
                            <textarea className="input-text" name="description" id="description" placeholder="Viết thêm gì đó về bạn..." defaultValue={userUpdated.description === '' ? ' ' : userUpdated.description}></textarea>
                        </div>
                        <a href="true" className="btn button-md button-theme" onClick={this.onSubmit}>Lưu thay đổi</a>
                    </form>
                </div>
            </div>
        );
    }
}

const mapDispathToProp = (dispatch) => {
    return {
        onGetEstateListOfUser: () => dispatch(actions.actGetEstateListOfUserRequest()),
        onEditUserInfo: (data) => dispatch(actions.actEditUserInfoRequest(data)),
        onGetUserInfo: () => dispatch(actions.actGetUserInfoRequest())
    }
}
const mapStateToProp = (state) => {
    return {
        estatesListOfUser: state.estatesListOfUser,
        userUpdated: state.user
    }
}
export default connect(mapStateToProp, mapDispathToProp)(Detail)