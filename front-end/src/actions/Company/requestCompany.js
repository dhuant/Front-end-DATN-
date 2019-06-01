import * as action from './userCompany'
import axios from 'axios'
import { authCompany } from "../../constants/Company/authCompany";
import * as config from '../../constants/Config'
import { message } from 'antd'
export const actGetInfoUserCompany = (id) => {
  return dispatch => {
    // return console.log("Company")
    return axios
      .get(`${config.API_URL}/company/info/${id}`, { headers: authCompany() })
      .then(res => {
        console.log(res.data);
        dispatch(action.actSaveInfoUserCompany(res.data));

      })
      .catch(err => {
        console.log(err.respone)
      })
  };
}
