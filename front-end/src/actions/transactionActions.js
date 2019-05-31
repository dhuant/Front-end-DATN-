import * as Types from '../constants/Transaction/transaction'
import { ADD_WAITING_REQUEST, GET_REQUEST_LIST, DELETE_WAITING_REQUEST } from '../constants/Transaction/waiting'

export const actCreateTransaction = (transaction) => {
    return {
        type: Types.CREATE_TRANSACTION,
        transaction: transaction
    }
}

export const actChangeStatus = (transaction) => {
    return {
        type: Types.CHANGE_STATUS,
        transaction: transaction
    }
}

export const actGetTransactionHistory = (transaction) => {
    return {
        type: Types.TRANSACTION_HISTORY,
        transaction: transaction
    }
}

export const actGetTransactionDetail = (transaction) => {
    return {
        type: Types.TRANSACTION_DETAIL,
        transaction: transaction
    }
}

export const actPostingDeal = (deal) => {
    return {
        type: Types.DEAL,
        deal: deal
    }
}

export const actPostingLegality = (legality) => {
    return {
        type: Types.LEGALITY,
        legality: legality
    }
}

export const actPostingDeposit = (deposit) => {
    return {
        type: Types.DEPOSIT,
        deposit: deposit
    }
}

export const actPostingContract = (contract) => {
    return {
        type: Types.CONTRACT,
        contract: contract
    }
}

export const actPostingConfirmation = (confirmation) => {
    return {
        type: Types.CONFIRMATION,
        confirmation: confirmation
    }
}

export const actPostingTax = (tax) => {
    return {
        type: Types.TAX,
        tax: tax
    }
}

export const actPostingDelivery = (delivery) => {
    return {
        type: Types.DELIVERY,
        delivery: delivery
    }
}

export const actPostingTransfer = (transfer) => {
    return {
        type: Types.TRANSFER,
        transfer: transfer
    }
}

export const actGettingRequestList = (waiting) => {
    return {
        type: GET_REQUEST_LIST,
        waiting: waiting
    }
}

export const actAddingWaitingRequest = (waiting) => {
    return {
        type: ADD_WAITING_REQUEST,
        waiting: waiting
    }
}

export const actDeletingWaitingRequest = (waiting) => {
    return {
        type: DELETE_WAITING_REQUEST,
        waiting: waiting
    }
}

