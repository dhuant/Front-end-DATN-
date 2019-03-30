import * as Types from '../constants/ActionTypes';
var initialState = {};
const user = (state = initialState, action) => {
    switch (action.type) {
        case Types.SAVE_INFO_USER:
            state = action.user;
            console.log(state);
            return {...state};
        default: return {...state};
    }
}
export default user;