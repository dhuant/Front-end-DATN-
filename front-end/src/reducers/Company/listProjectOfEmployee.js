import * as types from '../../constants/Company/employee';

var initialState = [];
const listProjectsOfEmployee = (state = initialState, action) => {
    
    switch (action.type) {
        case types.GET_LIST_PROJECT_OF_EMPLOYEE:
            state = action.projects;
            console.log(state)
            return [...state];
        
        default: return [...state];
    }
};

export default listProjectsOfEmployee;