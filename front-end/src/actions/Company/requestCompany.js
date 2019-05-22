import * as action from './userCompany'
import axios from 'axios'
import { authCompany } from "../../constants/Company/authCompany";
import * as config from '../../constants/Config'

export const actGetInfoUserCompany = (id)=>{
    return dispatch => {
      // return console.log("Company")
        return axios
          .get(`${config.API_URL}/company/info`, { headers: authCompany() })
          .then(res => {
            dispatch(action.actSaveInfoUserCompany(res.data));
            console.log(res.data);
          })
          .catch(err => {
            // if (err.data.status === 401) {
            //   console.log(err)
            //   // dispatch(action.actSaveInfoUserCompany(err.data))
            // }
            console.log(err.respone)
          })
      };
}