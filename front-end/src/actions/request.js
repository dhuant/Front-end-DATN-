import * as Action from './index';
import callApi from './../utils/apiCaller';
import {authHeader} from '../constants/authHeader'
import axios from 'axios'

export const actFetchEstatesRequest = (info) => {
    return dispatch => {
        return callApi('projects/home', 'POST', info).then(res => {
            dispatch(Action.actFetchEstates(res.data.projects));
            console.log(res);
        });
    };
}

//Hàm này sử dụng cho việc lấy detail của 1 estate
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
        return callApi(`projects/search`, 'POST', data).then(res => {
            dispatch(Action.actGetListEstateFromFromSearch(res.data.projects))
            console.log(res);
        });
    }
}

export const actGetInfoUser = (id) => {
    return dispatch => {
        return axios.get(`http://localhost:3001/users/info/${id}`, {headers:authHeader()}).then(res => {
            dispatch(Action.actSaveInfoUser(res.data))
            console.log(res.data);
        });
    }
}

export const actGetNewsByTypeRequest = (type, page) => {
    return dispatch => {
        return callApi(`news/all/${type}/${page}`, 'GET', null).then(res => {
            dispatch(Action.actGetNewsByType(res.data.news));
            console.log(res.data.news);
        })
    }
}

export const actGetNewsByIdRequest = (id) => {
    return dispatch => {
        return callApi(`news/${id}`, 'GET', null).then(res => {
            dispatch(Action.actGetNewsById(res.data.news));
            console.log(res.data.news);
        })
    }
}

export const actGetCommentsByIdRequest = (id) => {
    return dispatch => {
        return callApi(`comment/all/${id}`, 'GET', null).then(res => {
            //dispatch(Action.actGetComments(res.data.comments));
            console.log(res)
        })
    }
}

export const actGetEstateListOfUserRequest = () => {
    return dispatch => {
        return axios.post(`http://localhost:3001/users/dansachproject`, {headers:authHeader()}).then(res => {
            dispatch(Action.actGetEstateListOfUser(res.data.projects))
            console.log(res);
        });
    }
}
        

