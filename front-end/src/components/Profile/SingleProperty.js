/* eslint-disable */
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import moment from 'moment'
import ViewUI from '../My Properties/ViewUI'
import { authHeader } from '../../constants/authHeader'
import { Modal, Button, message } from 'antd';
import axios from 'axios'
import * as actions from '../../actions/request'
import { connect } from 'react-redux';
// import { Button } from 'react-bootstrap'
const confirm = Modal.confirm

export class SingleProperty extends Component {
  constructor(props) {
    super(props)

    this.state = {
      estateListOfUser: null,
      visibleView: false,
      loading: false,
      visibleEdit: false,
      flag: ''
    }
  }

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visibleView: false });
    }, 3000);
  }

  handleCancel = () => {
    this.setState({
      visibleView: false
    })
  }

  handleCancelDelete = () => {
    this.setState({
      visibleEdit: false
    })
  }

  handleOkDelete = (id) => {
    // axios.delete(`http://localhost:3001/projects/${id}`, { headers: authHeader() })
    //   .then(res => {
    //     console.log(res);
    //     if (res.status === 200) {
    //       this.props.history.goBack()
    //       return message.success('Delete post successfully!');
    //     }
    //     else return message.error('Failed to delete post!');
    //   });
    // this.setState({ visibleEdit: false })
  }

  showDeleteConfirm = (estateInfo) => {
    // console.log(e.target.id)
    // var id = e.target.id
    confirm({
      title: 'Bạn có đồng ý xóa bài này không?',
      okText: 'Đồng ý',
      okType: 'danger',
      cancelText: 'Hủy bỏ',
      onOk: () => {
        this.props.onDeleteProject(estateInfo._id, estateInfo)
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  render() {
    let { estateListOfUser } = this.props
    let { visibleView } = this.state
    let status = ' Chưa kiểm duyệt '
    if (estateListOfUser) {
      if (estateListOfUser.verify === true) {
        status = ' Đã kiểm duyệt '
      }
    }
    return (
      <div className="projectSingle" style={{ padding: "0px 20px" }}>
        <div className="property-tag button alt featured" style={{ marginLeft: '30px', color: 'white', width:'120px',textAlign:'center' }}>{status}</div>
        <tr>
          <td className="title-container" style={{ width: "700px" }}>

            <img src={estateListOfUser.url[0]} alt="my-properties-1" className="img-responsive hidden-xs" style={{ width: "150px", height: "150px", marginLeft: "10px" }} />
            <div className="title">
              <h4 style={{ color: "#84ad1d", fontSize: "20px", cursor: "pointer" }} onClick={() => this.setState({ visibleView: true, visibleEdit: false })}>{estateListOfUser.name}</h4>
              <span><i className="fa fa-user-circle-o" />{estateListOfUser.investor}</span>
              <span><i className="fa fa-map-marker" style={{ width: "10px", marginLeft: "2px" }} /> {estateListOfUser.address} </span>
              {/* <span className="table-property-price"><i className="fa fa-money" />{estateListOfUser.price}</span> */}
              <span className="hidden-xs">
                <i className="fa fa-calendar-check-o" />
                {moment.unix(estateListOfUser.updateTime).format('DD/MM/YYYY')}
                <span className="hidden-xs" style={{ fontWeight: "lighter", color: "#BA4A00", fontSize: "18px" }}>
                  <i className="fa fa-money" style={{ fontSize: "12px" }} />
                  {estateListOfUser.price >= 1000 && estateListOfUser.statusProject === 1
                    ? `${Number(estateListOfUser.price / 1000).toFixed(1)} Tỉ`
                    : `${estateListOfUser.price} ${estateListOfUser.unit}`}
                </span>
              </span>
            </div>
          </td>

          <td className="action" style={{ width: "200px", marginRight: "10px" }}>
            <div style={{ marginBottom: "5px" }} className="view">
              <i className="fa fa-eye"
                style={{ cursor: "pointer", width: "20px", height: "20px" }}
                onClick={() => this.setState({ visibleView: true, visibleEdit: false })}
              >
                <span style={{ marginLeft: "5px" }}>Xem</span>
              </i>
            </div>

            <Link to={`myproperties/edit/${estateListOfUser._id}`} target="_blank">
              <i className="fa fa-pencil" style={{ cursor: "pointer", width: "20px", height: "20px" }} >
                <span style={{ marginLeft: "5px" }}>Sửa</span>
              </i>
            </Link>

            <div style={{ marginTop: "25px" }} className="remove">
              <i className="fa fa-remove"
                style={{ cursor: "pointer", width: "20px", height: "20px" }}
                onClick={() => this.showDeleteConfirm(estateListOfUser)}
                id={estateListOfUser._id}
              >
                <span style={{ marginLeft: "5px" }}>Xóa</span>
              </i>
            </div>
          </td>
        </tr>

        <Modal
          visible={visibleView}
          title="Estate View"
          onCancel={this.handleCancel}
          // onOk={this.handleOk}
          style={{ height: "80%", overflowY: "auto", zIndex: "1000", boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)" }}
          width="60%"
          footer={[
            <Button key="back" onClick={this.handleCancel}>Close</Button>
          ]}
        >
          <div style={{ overflow: 'hidden' }}>
            <ViewUI estateUserInfo={estateListOfUser} />
          </div>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projectListRedux: state.estateListOfUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteProject: (id, data) => dispatch(actions.actDeleteProjectRequest(id, data))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SingleProperty);
