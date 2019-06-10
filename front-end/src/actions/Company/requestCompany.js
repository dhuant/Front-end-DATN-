import * as action from './userCompany'
import * as actionEmployee from './employee'
import axios from 'axios'
import { authCompany } from "../../constants/Company/authCompany";
import * as config from '../../constants/Config'
import { message } from 'antd'
export const actGetInfoUserCompany = (id) => {
  return dispatch => {
    // return console.log("Company")
    return axios
      .get(`${config.API_URL}/company/info/${id}`)
      .then(res => {
        console.log(res.data);
        dispatch(action.actSaveInfoUserCompany(res.data.company));
        dispatch(action.actSaveListEmployees(res.data.company.employees))
      })
      .catch(err => {
        console.log(err.respone)
      })
  };
}
export const reqGetInfoEmployee = (id, page) => {
  return dispatch => {
    // return console.log("Company")
    return axios
      .get(`${config.API_URL}/company/infoemployee/${id}/${page}`, { headers: authCompany() })
      .then(res => {
        console.log(res);
        dispatch(actionEmployee.actGetInfoEmployee(res.data.info));
        // dispatch(action.actSaveListEmployees(res.data.company.employees))
      })
      .catch(err => {
        console.log(err.respone)
      })
  };
}
