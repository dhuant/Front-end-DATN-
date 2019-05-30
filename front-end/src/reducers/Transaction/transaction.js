import * as Types from '../../constants/Transaction/transaction'

var initialState = {
    
};
const transaction = (state = initialState, action) => {
    switch (action.type) {
        case Types.CREATE_TRANSACTION:
            console.log(action, state)
            
        default: return {...state};
    }

}
export default transaction;