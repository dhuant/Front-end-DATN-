import * as Types from '../../constants/Transaction/transaction'

var initialState = [];

const transaction = (state = initialState, action) => {
    switch (action.type) {
        case Types.CREATE_TRANSACTION:
            console.log(action, state)
            return { ...state }
        case Types.CHANGE_STATUS:
            console.log(action, state)
            return { ...state }
        case Types.TRANSACTION_DETAIL:
            console.log(action, state)
            return { ...state }
        case Types.TRANSACTION_HISTORY:
            console.log(action, state)
            state = action.transaction
            return [ ...state ]

        default: return { ...state };
    }

}
export default transaction;