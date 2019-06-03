import React, { Component } from 'react'
import { List, Avatar, Button } from 'antd';
import { connect } from 'react-redux'
import * as transActions from '../../actions/transactionRequest'
import * as actions from '../../actions/request'
import moment from 'moment'

class SingleWaiting extends Component {

  onHandleAcceptingRequest = (waiting, waitingSingle) => {
    var step = null, typetransaction = null
    if (waiting.project.type === 1) {
      step = 7
      typetransaction = 1
    }

    if (waiting.project.type === 3) {
      step = 8
      typetransaction = 2
    }
    var transactionInfo = {
      step: step,
      typeproject: waiting.project.type,
      typetransaction: typetransaction,
      project: waiting.project._id,
      buyer: waitingSingle.user._id,
      company: waitingSingle.user.company,
      createTime: moment().unix(),
      updateTime: moment().unix(),
    }
    console.log(transactionInfo)
    this.props.onCreatingTransaction(transactionInfo)
  }
  render() {
    var { waitingList } = this.props
    return (
      <React.Fragment>
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
                      <p style={{ fontWeight: "bold" }}>{waitingRequestSingle.user.fullname}</p> đã gửi yêu cầu giao dịch bất động sản.
                      <div style={{ float: "right" }}>
                        <div className="comment-meta-reply" 
                              style={{ marginRight: "5px" }} 
                              onClick={() => this.onHandleAcceptingRequest(waitingList, waitingRequestSingle)}>
                          <a>Đồng ý</a>
                        </div>
                        <div className="comment-meta-reply" style={{ backgroundColor: "red" }}>
                          <a>Hủy bỏ</a>
                        </div>
                      </div>
                    </span>}
                />
              </List.Item>
            )}
          />,
        </tr>
      </React.Fragment>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    transaction: state.transaction
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCreatingTransaction: (transactionInfo) => dispatch(transActions.actCreatingTransactionRequest(transactionInfo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleWaiting)
