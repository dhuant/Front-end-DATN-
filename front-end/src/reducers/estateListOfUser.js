import * as Types from '../constants/ActionTypes';

var initialState = [];
const estateListOfUser = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_ESTATE_LIST_OF_USER:
            state = action.estates
            console.log(state)
            return [...state]
        default: return [...state];
    }
};

export default estateListOfUser;