import * as types from './../constants/Map/Map';

export const actGetListEstatesAroundCurrentLocationFailure = (error) => {
    return {
        type : types.GET_LIST_ESTATES_AROUND_CURRENT_LOCATION_FAILURE,
        error: error
    }
}
export const actGetListEstatesAroundCurrentLocationSuccess = (estates) => {
    return {
        type : types.GET_LIST_ESTATES_AROUND_CURRENT_LOCATION_SUCCESS,
        estates: estates
    }
}