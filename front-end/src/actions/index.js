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
