import * as Types from '../constants/ActionTypes';

var initialState = {
    province: 'province',
    district: 'district',
    addressDetail: 'addressDetail',
};
const address = (state = initialState, action) => {
    switch (action.type) {
        case Types.SAVE_LOCATION_INFO:
            state = action.address;
            // console.log(state);
            return {...state};
        default: return {...state};
    }

}
export default address;