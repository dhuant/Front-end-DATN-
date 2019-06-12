import * as types from '../../constants/Company/employee'
export const actGetInfoEmployee = (employee) => {
    return {
        type: types.GET_INFO_EMPLOYEE,
        employee: employee
    }
}