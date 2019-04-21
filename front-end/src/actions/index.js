import * as Types from './../constants/ActionTypes';

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