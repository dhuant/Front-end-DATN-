import * as Action from './index';
import callApi from './../utils/apiCaller';
import {authHeader} from '../constants/autHeader'
import {API_URL} from '../constants/Config';
import axios from 'axios'
export const actFetchEstatesRequest = (info) => {
    return dispatch => {
        return callApi('projects/getListInRadius', 'POST', info).then(res => {
            dispatch(Action.actFetchEstates(res.data.projects));
        });
    };
}
export const actGetEstateRequest = (id) => {
    return dispatch => {
        return callApi(`projects/${id}`, 'GET', null).then(res => {
            dispatch(Action.actGetEstate(res.data.project));
            console.log(res.data.project);
        });
    }
}
export const actGetListEstatesFromFormSearch = (data) => {
    return dispatch => {
        return callApi(`projects/search/${data.type}/${data.address}/${data.area}/${data.price}`, 'POST', data).then(res => {
            // dispatch(Action.actGetListEstateFromFromSearch(res.data.projects))
            console.log(res);
        });
    }
}
export const actGetInfoUser = (id) => {
    return dispatch => {
        return axios.get(`http://localhost:3001/users/info/${id}`, {headers:authHeader()}).then(res => {
            dispatch(Action.actSaveInfoUser(res.data))
            console.log(res);
        });
    }
}