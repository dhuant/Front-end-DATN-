import * as Types from '../constants/ActionTypes';

var initialState = {
    province: '',
    district: '',
    addressDetail: '',
};
const address = (state = initialState, action) => {
    switch (action.type) {
        case Types.SAVE_LOCATION_INFO:
            state = action.address;
            console.log(state, action);
            return {...state};
        default: return {...state};
    }

}
export default address;