import * as types from '../../constants/Company/employee'
export const actGetInfoEmployee = (employee) => {
    return {
        type: types.GET_INFO_EMPLOYEE,
        employee: employee
    }
}

export const actGetListProjectOfEmployee = (projects) => {
    return{
        type: types.GET_LIST_PROJECT_OF_EMPLOYEE,
        projects: projects
    }
}