import * as Types from '../constants/Transaction/transaction'

export const actCreateTransaction = (transaction) => {
    return {
        type: Types.CREATE_TRANSACTION,
        transaction: transaction
    }
}

export const actChangeStatus  = (transaction) => {
    return {
        type: Types.CHANGE_STATUS,
        transaction: transaction
    }
}