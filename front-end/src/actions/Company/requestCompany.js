import * as action from './userCompany'
import axios from 'axios'
import { authCompany } from "../../constants/Company/authCompany";
import * as config from '../../constants/Config'

export const actGetInfoUserCompany = ()=>{
    return dispatch => {
      // return console.log("Company")
        return axios
          .get(`${config.API_URL}/company/info`, { headers: authCompany() })
          .then(res => {
            console.log(res);
            dispatch(action.actSaveInfoUserCompany(res.data));
            
          })
          .catch(err => {
            console.log(err.respone)
          })
      };
}