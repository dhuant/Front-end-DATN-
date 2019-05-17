import React, { Component } from 'react'
import moment from 'moment'
import ViewUI from './ViewUI'
import { Modal, Button } from 'antd';
import * as actions from '../../actions/request'
import { connect } from 'react-redux'

const confirm = Modal.confirm

class FollowingProject extends Component {
  constructor(props) {
    super(props)

    this.state = {
      visibleViewFollow: false,
      visibleUnfollow: false,
      loading: false
    }
  }

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visibleViewFollow: false });
    }, 500);
  }

  handleCancel = () => {
    this.setState({
      visibleViewFollow: false
    })
  }

  handleCancelDelete = () => {
    this.setState({
      visibleUnfollow: false
    })
  }
  showUnfollowConfirm = (e) => {
    console.log(e.target.id)
    var id = e.target.id
    var info = {
      projectid: id
    }
    confirm({
      title: 'Are you sure unfollow this post?',
      //   content: 'Data deleted can not be restored!',
      okText: 'Yes, Unfollow it',
      okType: 'danger',
      cancelText: 'No',
      onOk: () => {
        this.props.onUnfollowProject(info)
        console.log(this.props.follow)
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }
  render() {
    let { followSingle} = this.props
    let projectInfo = followSingle.project
    console.log(projectInfo)
    // console.log(projectInfo.url)
    let { visibleViewFollow } = this.state
    return (
      <div>
        <tr>
          <td className="title-container">
            <img src='/images/Home.png' alt="my-properties-1" className="img-responsive hidden-xs" />
            <div className="title">
              <h4><a href="true">{projectInfo.name}</a></h4>
              <span>{projectInfo.investor}</span>
              <span><i className="fa fa-map-marker" /> {projectInfo.address} </span>
              <span className="table-property-price">{projectInfo.price}</span>
            </div>
          </td>
          <td className="expire-date hidden-xs">{moment.unix(projectInfo.updateTime).format('DD/MM/YYYY, h:mm a')}</td>
          <td className="action">
            <div style={{ marginBottom: "5px" }} className="view">
              <i className="fa fa-eye fa-2x" style={{ cursor: "pointer", width: "30px", height: "30px" }} onClick={() => this.setState({ visibleViewFollow: true, visibleUnfollow: false })} />
            </div>

            <div style={{ marginTop: "40px" }} className="remove">
              <i className="fa fa-heartbeat fa-2x" style={{ cursor: "pointer", width: "30px", height: "30px" }} onClick={this.showUnfollowConfirm} id={projectInfo._id}></i>
            </div>
          </td>
        </tr>

        <Modal
          visible={visibleViewFollow}
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
            <ViewUI estateUserInfo={projectInfo} />
          </div>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    follow: state.follow
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGetFollowingList: () => dispatch(actions.actGetFollowingListRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowingProject)