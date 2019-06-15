import * as types from '../constants/searchEstate'

export const actSearchEstate = (estates) => {
    return {
        type: types.SEARCH_ESTATE,
        estates: estates
    }
}