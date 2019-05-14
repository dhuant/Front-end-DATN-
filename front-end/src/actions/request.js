import * as Action from "./index";
import callApi from "./../utils/apiCaller";
import { authHeader } from "../constants/authHeader";
import axios from "axios";

export const actFetchEstatesRequest = info => {
  return dispatch => {
    return axios.post("http://localhost:3001/projects/home", info)
      .then(res => {
        console.log("request")
        dispatch(Action.actFetchEstates(res.data.projects));
      })
      .catch(error => {
        dispatch(Action.actFetchEstates([]));
        // console.log(error);
      })
      .catch(err => { console.log(err) })
  };
};

//Hàm này sử dụng cho việc lấy detail của 1 estate

export const actGetEstateRequest = id => {
  return dispatch => {
    return callApi(`projects/${id}`, "GET", null).then(res => {
      dispatch(Action.actGetEstate(res.data.project));
      console.log(res.data.project);
    })
      .catch(err => { console.log(err) })
  };
};
export const actGetListEstatesFromFormSearch = data => {
  return dispatch => {
    return callApi(
      `projects/search/${data.type}/${data.address}/${data.area}/${data.price}`,
      "POST",
      data
    ).then(res => {
      dispatch(Action.actGetListEstateFromFromSearch(res.data.projects));
      console.log(res)
    })
      .catch(err => { console.log(err) })
  };
};

export const actGetInfoUser = id => {
  return dispatch => {
    return axios
      .get(`http://localhost:3001/users/info/${id}`, { headers: authHeader() })
      .then(res => {
        dispatch(Action.actSaveInfoUser(res.data));
        console.log(res.data);
      })
      .catch(err => {
        if(err.data.status === 401){
          console.log(err)
          dispatch(Action.actSaveInfoUser(err.data))
        }
      })
  };
};

export const actGetNewsByTypeRequest = (type, page) => {
  return dispatch => {
    return callApi(`news/all/${type}/${page}`, "GET", null).then(res => {
      dispatch(Action.actGetNewsByType(res.data.news));
      console.log(res.data.news);
    })
      .catch(err => { console.log(err) })
  };
};

export const actGetNewsByIdRequest = id => {
  return dispatch => {
    return callApi(`news/${id}`, "GET", null).then(res => {
      dispatch(Action.actGetNewsById(res.data.news));
      console.log(res.data.news);
    })
      .catch(err => { console.log(err) })
  };
};

export const actGetCommentsByIdRequest = (id) => {
  return dispatch => {
    return callApi(`comment/all/${id}`, 'GET', null).then(res => {
      dispatch(Action.actGetComments(res.data.comments));
      console.log(res)
    })
      .catch(err => { console.log(err) })
  }
}

export const actGetEstateListOfUserRequest = () => {
  return dispatch => {
    return axios.get(`http://localhost:3001/users/danhsachproject`, { headers: authHeader() }).then(res => {
      if (res.data.status === 200)
        dispatch(Action.actGetEstateListOfUser(res.data.projects))
      console.log(res);
    })
      .catch(err => {
        if (err.data.status === 401) {
          console.log(err)
          dispatch(Action.actGetEstateListOfUser(err.data))
        }
      })
  }
}

