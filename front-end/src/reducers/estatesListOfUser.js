import * as Types from '../constants/ActionTypes';

var initialState = [];
const estatesListOfUser = (state = initialState, action) => {
    var index = -1
    switch (action.type) {
        case Types.GET_ESTATE_LIST_OF_USER:
            state = action.estatesListOfUser
            console.log(state)
            return [...state]
        case Types.DELETE_PROJECT:
            index = state.findIndex(project => {return project._id === action.data._id})
            state.splice(index, 1);
            console.log(action, state)
            return [...state]
        default: return [...state];
    }
};

export default estatesListOfUser;