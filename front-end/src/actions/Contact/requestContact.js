import * as actionAgent from './Agent'
import * as actionCompany from './Company'

import axios from 'axios'

import * as config from '../../constants/Config'
import { message } from 'antd'
export const reqGetListAgents = (page) => {
  return dispatch => {
    // return console.log("Company")
    return axios
      .get(`${config.API_URL}/users/allagent/${page}`,)
      .then(res => {
        console.log(res);
        dispatch(actionAgent.actGetListAgents(res.data.result));

      })
      .catch(err => {
        console.log(err.respone)
      })
  };
}

export const reqGetInfoAgent = (id, page) => {
  return dispatch => {
    // return console.log("Company")
    return axios
      .get(`${config.API_URL}/users/infoagent/${id}/${page}`,)
      .then(res => {
        console.log(res);
        dispatch(actionAgent.actGetInfoAgent(res.data.info));
        dispatch(actionAgent.actGetListProjectOfAgent(res.data.projects));
      })
      .catch(err => {
        console.log(err.respone)
      })
  };
}
