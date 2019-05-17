import {GET_FOLLOWING_LIST, FOLLOW_PROJECT, UNFOLLOW_PROJECT} from '../constants/Follow'

var initialState = []

const follow = (state = initialState, action) => {
    var index = -1;
    switch (action.type) {
        case GET_FOLLOWING_LIST:
            state = action.follow
            console.log(state)
            return [...state]
        case FOLLOW_PROJECT:
            console.log(state, action)
            state.push({createTime: action.follow.createTime, project: action.project})
            return [...state]
        case UNFOLLOW_PROJECT:
            console.log(action)
            index = state.findIndex(follow => {return follow.project._id === action.data.projectid})
            state.splice(index, 1);
            // state = action.follow
            console.log(state)
            return [...state]
        default: return [...state];
    }

}
export default follow;