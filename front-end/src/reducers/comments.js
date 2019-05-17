import * as Types from '../constants/ActionTypes';

var initialState = [];

const comments = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_ALL_COMMENT:
            state = action.comments;
            console.log(state);
            return [...state];
        case Types.POST_COMMENT:
            var comments = action.comments
            state.push({content: comments.content, 
                        createTime: comments.createTime, 
                        projectid: comments.projectid, 
                        star: comments.star, 
                        updateTime: comments.updateTime, 
                        user: action.user,
                        _id: comments._id })
            console.log(state, action)
            return [ ...state ]
        default: return [...state];
    }

}
export default comments;