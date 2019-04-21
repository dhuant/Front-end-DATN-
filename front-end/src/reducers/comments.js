import * as Types from '../constants/ActionTypes';

var initialState = [];

const comments = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_ALL_COMMENT:
            state = action.comments;
            console.log(state);
            return [...state];
        default: return [...state];
    }

}
export default comments;