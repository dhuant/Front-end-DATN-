import React, { Component } from 'react'
import { List, Avatar, Button } from 'antd';
import { connect } from 'react-redux'
import * as transActions from '../../actions/transactionRequest'
import * as actions from '../../actions/request'

class SingleWaiting extends Component {

  // onShowRequestContent = (waiting) => {
  //   var result = null
  //   if (requestList.length > 0 && requestList.project._id === projectid) {
  //     result = waitingData.map((index, waiting) => {
  //       return (
  //         <React.Fragment>
  //           <span key={index}>
  //             ${waiting.user.fullname} đã gửi yêu cầu giao dịch bất động sản ${requestList.project.name}
  //             <div style={{ float: "right" }}>
  //               <div className="comment-meta-reply" style={{ marginRight: "5px" }}>
  //                 <a>Đồng ý</a>
  //               </div>
  //               <Button type="danger">Hủy Bỏ</Button>
  //             </div>
  //           </span>


  //         </React.Fragment>
  //       )
  //     })
  //   }
  //   else return (<span>Hiện không có yêu cầu nào!</span>)
  //   return result
  // }
  render() {
    var { waitingRequestSingle, waitingList } = this.props
    return (
      <div className="container">
        <div className="col-md-8 col-lg-8 col-xs-12">
          <tr>
            <List
              itemLayout="horizontal"
              dataSource={waitingList.requests}
              renderItem={waitingRequestSingle => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src={waitingRequestSingle.user.avatar} />}
                    // title={<a href="https://ant.design">{item.title}</a>}
                    description={
                    <span>
                      ${waitingRequestSingle.user.fullname} đã gửi yêu cầu giao dịch bất động sản ${waitingList.project.name}
                      <div style={{ float: "right" }}>
                        <div className="comment-meta-reply" style={{ marginRight: "5px" }}>
                          <a>Đồng ý</a>
                        </div>
                        <Button type="danger">Hủy Bỏ</Button>
                      </div>
                    </span>}
                  />
                </List.Item>
              )}
            />,
        </tr>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleWaiting)
