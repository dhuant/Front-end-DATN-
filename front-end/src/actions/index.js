import * as Types from './../constants/ActionTypes';
import {SAVE_FOLLOW_PROJECTID, GET_FOLLOWING_LIST, UNFOLLOW_PROJECT, FOLLOW_PROJECT} from './../constants/Follow'

//==================== Estates ==================== 
export const actFetchEstates = (estates) => {
    return {
        type : Types.FETCH_ESTATES_AROUND_CURRENT_LOCATION,
        estates: estates
    }
}
export const actGetEstate = (info) => {
    return {
        type : Types.GET_INFO_ESTATE,
        info: info
    }
}
export const actGetListEstateFromFromSearch = (estates) => {
    return {
        type: Types.GET_LIST_ESTATE_FROM_FORM_SEARCH,
        estates: estates
    }
}

export const actSaveInfoUser = (user) => {
    return {
        type: Types.SAVE_INFO_USER,
        user: user
    }
}

export const actGetNewsByType = (news) => {
    return {
        type: Types.GET_NEWS_BY_TYPE,
        news: news
    }
}

export const actGetNewsById = (newsDetail) => {
    return {
        type: Types.GET_NEWS_BY_ID,
        newsDetail: newsDetail
    }
}

export const actSaveLocationInfo = (address) => {
    return {
        type: Types.SAVE_LOCATION_INFO,
        address: address
    }
}

export const actGetComments = (comments) => {
    return {
        type: Types.GET_ALL_COMMENT,
        comments: comments
    }
}

export const actGetEstateListOfUser = (estatesListOfUser) => {
    return {
        type: Types.GET_ESTATE_LIST_OF_USER,
        estatesListOfUser: estatesListOfUser
    }
}

export const actSaveFollowProject = (follow) => {
    return {
        type: SAVE_FOLLOW_PROJECTID,
        follow: follow
    }
}

export const actGetFollowingList = (follow) => {
    return {
        type: GET_FOLLOWING_LIST,
        follow: follow
    }
}

export const actUnfollowProject = (follow, data) => {
    return {
        type: UNFOLLOW_PROJECT,
        follow: follow,
        data: data
    }
}

export const actFollowProject = (follow, project) => {
    return {
        type: FOLLOW_PROJECT,
        follow: follow,
        project: project,
    }
}

export const actPostComment = (comments, user) => {
    return {
        type: Types.POST_COMMENT,
        comments: comments,
        user: user
    }
}

export const actDeleteProject = (estatesListOfUser, data) => {
    return {
        type: Types.DELETE_PROJECT,
        estatesListOfUser: estatesListOfUser,
        data: data
    }
}