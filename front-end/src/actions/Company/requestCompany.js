import * as action from './userCompany'
import axios from 'axios'
import { authHeader } from "../../constants/authHeader";

export const actGetInfoUserCompany = (id)=>{
    return dispatch => {
        return console.log('login');
        // return axios
        //   .get(`http://localhost:3001/users/info/${id}`, { headers: authHeader() })
        //   .then(res => {
        //     dispatch(Action.actSaveInfoUser(res.data));
        //     console.log(res.data);
        //   })
        //   .catch(err => {
        //     if (err.data.status === 401) {
        //       console.log(err)
        //       dispatch(Action.actSaveInfoUser(err.data))
        //     }
        //   })
      };
}