/* eslint-disable */
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import moment from 'moment'
import ViewUI from '../My Properties/ViewUI'
import EditUI from '../My Properties/EditUI'
import { Modal, Button } from 'antd';
// import { Button } from 'react-bootstrap'

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

  showModal = () => {
    this.setState({
      visibleView: true,
      visibleEdit: false
    })
    console.log("view")
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

  handleCancelEdit = () => {
    this.setState({
      visibleEdit: false
    })
  }

  showModalEdit = () => {
    this.setState({
      visibleEdit: true,
      visibleView: false
    })
    console.log("edit")
  }

  // componentDidMount = () => {
  //   this.setState({
  //     estateListOfUser: this.props.estateListOfUser
  //   })
  // }
  // onOpenViewModal = () => {
  //   return <ViewUI estateUserInfo={this.state.estateListOfUser}/>
  // }

  render() {
    let { estateListOfUser } = this.props
    let { visibleView, visibleEdit } = this.state
    console.log(visibleView, visibleEdit)
    console.log(estateListOfUser.url)
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
              {/* <a href="" onClick={this.showModal}><i className="fa  fa-eye" /> View</a> */}
              <div style={{ margin: "10px" }}>
                <Button type="dashed" size="small" onClick={() => this.setState({visibleView: true, visibleEdit: false})}>
                  <i className="fa  fa-eye" />

                </Button>
              </div>

              {/* <a href="#"><i className="fa fa-pencil" /> Edit</a> */}
              <div style={{ margin: "10px" }}>
                <Button type="normal" size="small" onClick={() => this.setState({visibleView: false, visibleEdit: true})}>
                  <i className="fa  fa-pencil" />

                </Button>
              </div>
              <div style={{ margin: "10px" }}>
                <Button type="danger" size="small"><i className="fa fa-remove" /></Button>
              </div>
              {/* <a href="#" className="delete"><i className="fa fa-remove" /> Delete</a> */}
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
        // mask={false}
        >
          <div style={{ overflow: 'hidden' }}>
            <ViewUI estateUserInfo={estateListOfUser} />
          </div>
        </Modal>

        <Modal
          visible={visibleEdit}
          title="Estate Editor"
          onCancel={this.handleCancelEdit}
          // onOk={this.handleOk}
          style={{ height: "80%", overflowY: "auto", zIndex: "1000", boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)" }}
          width="60%"
          footer={[
            <Button key="back" onClick={this.handleCancelEdit}>Close</Button>
          ]}
        // mask={false}
        >
          <div style={{ overflow: 'hidden' }}>
            <EditUI estateUserInfo={estateListOfUser} mode={this.state.visibleEdit}/>
          </div>
        </Modal>
      </div>
      // </Link>
    )
  }
}

export default (SingleProperty);
