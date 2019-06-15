import * as Action from './transactionActions'
import { authHeader } from "../constants/authHeader";
import axios from "axios";
import { message } from 'antd'

export const actCreatingTransactionRequest = infoToCreate => {
    return dispatch => {
        return axios.post("http://localhost:3001/transaction/create", infoToCreate, { headers: authHeader() })
            .then(res => {
                if (res.data.status === 201) {
                    dispatch(Action.actCreateTransaction(res.data.transaction))
                    message.success('Tạo giao dịch thành công!')
                }
            })
            .catch(error => {
                message.error(`Có lỗi xảy ra: ${error}`)
            })
    };
};

export const actGettingTransactionHistoryRequest = (page) => {
    return dispatch => {
        return axios.get(`http://localhost:3001/transaction/history/${page}`, { headers: authHeader() })
            .then(res => {
                console.log(res)
                dispatch(Action.actGetTransactionHistory(res.data.history))
            })
            .catch(error => {
                message.error(`Có lỗi xảy ra: ${error}`)
            })
    }
}

export const actGettingTransactionDetailRequest = (transactionId, transactionType) => {
    console.log("a")
    return dispatch => {
        return axios.get(`http://localhost:3001/transaction/detail/${transactionId}/${transactionType}`, { headers: authHeader() })
            .then(res => {
                console.log(res)
                dispatch(Action.actGetTransactionDetail(res.data.transaction))
            })
            .catch(error => {
                message.error(`Có lỗi xảy ra: ${error}`)
            })
    }
}

export const actChangingTransactionStatus = (transactionData) => {
    return dispatch => {
        return axios.post("http://localhost:3001/transaction/changestatus", transactionData, { headers: authHeader() })
            .then(res => {
                dispatch(Action.actChangeStatus(res.data.active))
            })
            .catch(error => {
                message.error(`Có lỗi xảy ra: ${error}`)
            })
    }
}

export const actCompleteTransaction = (transactionId) => {
    return dispatch => {
        return axios.post("http://localhost:3001/transaction/complete", transactionId, { headers: authHeader() })
            .then(res => {
                if(res.data.status === 200){
                    dispatch(Action.actCompletingTransaction(res.data.transactionid))
                    message.success("Giao dịch đang chờ xác nhận!")
                }
                
            })
            .catch(error => {
                message.error(`Có lỗi xảy ra: ${error}`)
            })
    }
}
//API for Selling
export const actPostingDealRequest = (dealInfo) => {
    return dispatch => {
        return axios.post("http://localhost:3001/selldetail/deal", dealInfo, { headers: authHeader() })
            .then(res => {
                console.log(res)
                if (res.data.status === 200 || res.status === 200) {
                    dispatch(Action.actPostingDeal(res.data.deal))
                    message.success('Thành công!')
                }
            })
            .catch(error => {
                message.error(`Có lỗi xảy ra: ${error}`)
            })
    }
}

export const actPostingLegalityRequest = (legalityInfo) => {
    return dispatch => {
        return axios.post("http://localhost:3001/selldetail/legality", legalityInfo, { headers: authHeader() })
            .then(res => {
                console.log(res.data)
                if (res.data.status === 200 || res.status === 200) {
                    dispatch(Action.actPostingLegality(res.data.legality))
                    message.success('Thành công!')
                }
            })
            .catch(error => {
                message.error(`Có lỗi xảy ra: ${error}`)
            })
    }
}

export const actPostingDepositRequest = (depositInfo) => {
    return dispatch => {
        return axios.post("http://localhost:3001/selldetail/deposit", depositInfo, { headers: authHeader() })
            .then(res => {
                dispatch(Action.actPostingDeposit(res.data.deposit))
                message.success('Thành công!')
            })
            .catch(error => {
                message.error(`Có lỗi xảy ra: ${error}`)
            })
    }
}

export const actPostingContractRequest = (contractInfo) => {
    return dispatch => {
        return axios.post("http://localhost:3001/selldetail/contract", contractInfo, { headers: authHeader() })
            .then(res => {
                dispatch(Action.actPostingContract(res.data.contract))
                message.success('Thành công!')
            })
            .catch(error => {
                message.error(`Có lỗi xảy ra: ${error}`)
            })
    }
}

export const actPostingConfirmationRequest = (confirmationInfo) => {
    return dispatch => {
        return axios.post("http://localhost:3001/selldetail/confirmation", confirmationInfo, { headers: authHeader() })
            .then(res => {
                dispatch(Action.actPostingConfirmation(res.data.confirmation))
                message.success('Thành công!')
            })
            .catch(error => {
                message.error(`Có lỗi xảy ra: ${error}`)
            })
    }
}

export const actPostingTaxRequest = (taxInfo) => {
    return dispatch => {
        return axios.post("http://localhost:3001/selldetail/tax", taxInfo, { headers: authHeader() })
            .then(res => {
                dispatch(Action.actPostingTax(res.data.tax))
                message.success('Thành công!')
            })
            .catch(error => {
                message.error(`Có lỗi xảy ra: ${error}`)
            })
    }
}

export const actPostingDeliveryRequest = (deliveryInfo) => {
    return dispatch => {
        return axios.post("http://localhost:3001/selldetail/delivery", deliveryInfo, { headers: authHeader() })
            .then(res => {
                dispatch(Action.actPostingDelivery(res.data.delivery))
                message.success('Thành công!')
            })
            .catch(error => {
                message.error(`Có lỗi xảy ra: ${error}`)
            })
    }
}

export const actPostingTransferRequest = (transferInfo) => {
    return dispatch => {
        return axios.post("http://localhost:3001/selldetail/transfer", transferInfo, { headers: authHeader() })
            .then(res => {
                dispatch(Action.actPostingTransfer(res.data.transfer))
                message.success("Thành công!")
            })
            .catch(error => {
                message.error(`Có lỗi xảy ra: ${error}`)
            })
    }
}

//API for Requesting Transaction
export const actGettingWaitingListRequest = (id) => {
    console.log(id)
    return dispatch => {
        return axios.get(`http://localhost:3001/transaction/listrequest/${id}`, { headers: authHeader() })
            .then(res => {
                // console.log(res)
                dispatch(Action.actGettingRequestList(res.data.result))
            })
            .catch(error => {
                message.error(`Có lỗi xảy ra: ${error}`)
            })
    }
}

export const actAddingWaitingRequest = (waitingData) => {
    return dispatch => {
        return axios.post("http://localhost:3001/transaction/addwaitingrequest", waitingData, { headers: authHeader() })
            .then(res => {
                console.log(res)
                if (res.data.status === 201) {
                    dispatch(Action.actAddingWaitingRequest(res.data.result))
                    message.success("Gửi yêu cầu thành công!")
                }
                else if (res.data.status === 203)
                    message.warning('Bất động sản này đang trong quá trình giao dịch!')
                else if (res.data.status === 204)
                    message.warning('Bất động sản này đã đạt yêu cầu tối đa! Vui lòng quay lại sau!')
                else if (res.data.status === 206)
                    message.warning('Bạn đã gửi yêu cầu giao dịch trước đó rồi!')
            })
            .catch(error => {
                message.error(`Có lỗi xảy ra: ${error}`)
            })
    }
}

export const actDeletingWaitingRequest = (waitingData) => {
    return dispatch => {
        return axios.delete("http://localhost:3001/transaction/deletewaitingrequest", waitingData, { headers: authHeader() })
            .then(res => {
                dispatch(Action.actDeletingWaitingRequest(res.data))
            })
            .catch(error => {
                message.error(`Có lỗi xảy ra: ${error}`)
            })
    }
}

//API for Renting
export const actPostingRentingDealRequest = (dealInfo) => {
    return dispatch => {
        return axios.post("http://localhost:3001/rentdetail/deal", dealInfo, { headers: authHeader() })
            .then(res => {
                console.log(res)
                if (res.data.status === 200 || res.status === 200) {
                    dispatch(Action.actPostingRentingDeal(res.data.deal))
                    message.success('Thành công!')
                }
            })
            .catch(error => {
                message.error(`Có lỗi xảy ra: ${error}`)
            })
    }
}

export const actPostingRentingDepositRequest = (depositInfo) => {
    return dispatch => {
        return axios.post("http://localhost:3001/rentdetail/deposit", depositInfo, { headers: authHeader() })
            .then(res => {
                dispatch(Action.actPostingRentingDeposit(res.data.deposit))
                message.success('Thành công!')
            })
            .catch(error => {
                message.error(`Có lỗi xảy ra: ${error}`)
            })
    }
}

export const actPostingRentingContractRequest = (contractInfo) => {
    return dispatch => {
        return axios.post("http://localhost:3001/rentdetail/contract", contractInfo, { headers: authHeader() })
            .then(res => {
                dispatch(Action.actPostingRentingContract(res.data.contract))
                message.success('Thành công!')
            })
            .catch(error => {
                message.error(`Có lỗi xảy ra: ${error}`)
            })
    }
}

export const actPostingRentingConfirmationRequest = (confirmationInfo) => {
    return dispatch => {
        return axios.post("http://localhost:3001/rentdetail/confirmation", confirmationInfo, { headers: authHeader() })
            .then(res => {
                dispatch(Action.actPostingRentingConfirmation(res.data.confirmation))
                message.success('Thành công!')
            })
            .catch(error => {
                message.error(`Có lỗi xảy ra: ${error}`)
            })
    }
}

export const actPostingRentingDeliveryRequest = (deliveryInfo) => {
    return dispatch => {
        return axios.post("http://localhost:3001/rentdetail/delivery", deliveryInfo, { headers: authHeader() })
            .then(res => {
                dispatch(Action.actPostingRentingDelivery(res.data.delivery))
                message.success('Thành công!')
            })
            .catch(error => {
                message.error(`Có lỗi xảy ra: ${error}`)
            })
    }
}