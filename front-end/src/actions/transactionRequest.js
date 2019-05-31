import * as Action from './transactionActions'
import { authHeader } from "../constants/authHeader";
import axios from "axios";
import { message } from 'antd'

export const actCreatingTransactionRequest = infoToCreate => {
    return dispatch => {
        return axios.post("http://localhost:3001/transaction/create", infoToCreate, { headers: authHeader() })
            .then(res => {
                if (res.data.status === 201)
                    dispatch(Action.actCreateTransaction(res.data.transaction));
            })
            .catch(error => {
                message.error(`Có lỗi xảy ra: ${error}`)
            })
    };
};

export const actGettingTransactionHistoryRequest = (transactionHistory) => {
    return dispatch => {
        return axios.get("http://localhost:3001/transaction/history", transactionHistory, { headers: authHeader() })
            .then(res => {
                dispatch(Action.actGetTransactionHistory(res.data.history))
            })
            .catch(error => {
                message.error(`Có lỗi xảy ra: ${error}`)
            })
    }
}

export const actGettingTransactionDetailRequest = (transactionId) => {
    return dispatch => {
        return axios.get(`http://locahost:3001/transaction/detail/${transactionId}`, null, { headers: authHeader() })
            .then(res => {
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

export const actPostingDealRequest = (dealInfo) => {
    return dispatch => {
        return axios.post("http://localhost:3001/selldetail/deal", dealInfo, { headers: authHeader() })
            .then(res => {
                dispatch(Action.actPostingDeal(res.data.deal))
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
                dispatch(Action.actPostingLegality(res.data.legality))
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
            })
            .catch(error => {
                message.error(`Có lỗi xảy ra: ${error}`)
            })
    }
}

export const actGettingWaitingListRequest = (requestData) => {
    return dispatch => {
        return axios.get("http://localhost:3001/transaction/listrequest", requestData, { headers: authHeader() })
            .then(res => {
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
                if (res.data.status === 201) {
                    dispatch(Action.actAddingWaitingRequest(res.data.result))
                }
                else if (res.data.status === 203)
                    message.warning('Bất động sản này đang trong quá trình giao dịch!')
                else if (res.data.status === 204)
                    message.warning('Bất động sản này đã đạt yêu cầu tối đa! Vui lòng quay lại sau!')
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