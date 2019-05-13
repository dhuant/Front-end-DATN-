/* eslint-disable */
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import moment from 'moment'
import ViewUI from '../My Properties/ViewUI'
import { authHeader } from '../../constants/authHeader'
import { Modal, Button, message } from 'antd';
import axios from 'axios'
// import { Button } from 'react-bootstrap'
const confirm = Modal.confirm

export class SingleProperty extends Component {
  constructor(props) {
    super(props)

    this.state = {
      estateListOfUser: null,
      visibleView: false,
      loading: false,
      visibleEdit: false
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

  showDeleteConfirm = (e) => {
    console.log(e.target.id)
    confirm({
      title: 'Are you sure delete this post?',
      content: 'Data deleted can not be restored!',
      okText: 'Yes, Delete it',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        axios.delete(`http://localhost:3001/projects/${e.target.id}`, { headers: authHeader() })
          .then(res => {
            console.log(res);
            if (res.status === 200 && res) {
              this.props.history.goBack()
              return message.success('Delete post successfully!'); 
            }
            else return message.error('Failed to delete post!');
          })
          .catch(err => {
            if(err.data.status === 401){
              console.log(err)
              localStorage.removeItem("res")
              message.error("Tài khoản hết hạn đăng nhập! Vui lòng đăng nhập lại!")
            }
          })
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  render() {
    let { estateListOfUser } = this.props
    let { visibleView } = this.state
    return (
      <div>
        {/* // <Link to={`/myproperties/${estateListOfUser._id}`}> */}
        <tr>
          <td className="title-container">
            <img src="img/my-properties/my-properties-1.jpg" alt="my-properties-1" className="img-responsive hidden-xs" />
            <div className="title">
              <h4><a href="true">{estateListOfUser.name}</a></h4>
              <span>{estateListOfUser.investor}</span>
              <span><i className="fa fa-map-marker" /> {estateListOfUser.address} </span>
              <span className="table-property-price">{estateListOfUser.price}</span>
            </div>
          </td>
          <td className="expire-date hidden-xs">{moment.unix(estateListOfUser.updateTime).format('DD/MM/YYYY, h:mm a')}</td>
          <td className="action">
            <div style={{ marginBottom: "5px" }} className="view">
              <i className="fa fa-eye fa-2x" style={{ cursor: "pointer", width: "30px", height: "30px" }} onClick={() => this.setState({ visibleView: true, visibleEdit: false })} />
            </div>

            <Link to={`myproperties/edit/${estateListOfUser._id}`}>
              <i className="fa fa-pencil fa-2x" style={{ cursor: "pointer", width: "30px", height: "30px" }} />
            </Link>

            <div style={{ marginTop: "40px" }} className="remove">
              <i className="fa fa-remove fa-2x" style={{ cursor: "pointer", width: "30px", height: "30px" }} onClick={this.showDeleteConfirm} id={estateListOfUser._id}/>
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

        {/* <Modal
          title="Delete Confirm"
          visible={this.state.visibleEdit}
          onOk={this.handleOkDelete(estateListOfUser._id)}
          onCancel={this.handleCancelDelete}
        >
          Data deleted can not be restored!
        </Modal> */}
      </div>
      // </Link>
    )
  }
}

export default withRouter(SingleProperty);
