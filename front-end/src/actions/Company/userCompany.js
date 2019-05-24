import * as types from '../../constants/Company/userCompany';
export const actSaveInfoUserCompany = (user) =>{
    return {
        type: types.SAVE_INFO_USER_COMPANY,
        userCompany: user
    }
}