import * as Action from "./index";
import callApi from "./../utils/apiCaller";
import { authHeader } from "../constants/authHeader";
import axios from "axios";
import { message } from 'antd'

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
        if (err.data.status === 401) {
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
      return message.success("Lấy danh sách bài viết của tài khoản thành công!")
    })
      .catch(err => {
        if (localStorage.getItem('res') === undefined || localStorage.getItem('res') === null)
          return message.warning("Bạn cần phải đăng nhập trước!")
        return message.error("Có lỗi xảy ra khi lấy danh sách bài viết!")
      })
  }
}

export const actGetFollowingListRequest = () => {
  if (authHeader !== null)
    return dispatch => {
      return axios.get(`http://localhost:3001/users/listSaved`, { headers: authHeader() }).then(res => {
        if (res.data.status === 200)
          dispatch(Action.actGetFollowingList(res.data.result.projects))

        return message.success("Lấy danh sách theo dõi thành công!")
      })
        .catch(err => {
          if (localStorage.getItem('res') === undefined || localStorage.getItem('res') === null)
          return message.warning("Bạn cần phải đăng nhập trước!")
          return message.error("Có lỗi xảy ra khi lấy danh sách theo dõi!")
        })
    }
  else return null
}

export const actUnfollowProjectRequest = (data) => {
  return dispatch => {
    return axios.post(`http://localhost:3001/users/unfollow`, data, { headers: authHeader() }).then(res => {
      if (res.data.status === 201 || res.status === 201 || res.follow.status === 201) {
        dispatch(Action.actUnfollowProject(res.data, data))
        return message.success("Bỏ theo dõi thành công!")
      }
    })
      .catch(err => { 
        if (localStorage.getItem('res') === undefined || localStorage.getItem('res') === null)
          return message.warning("Bạn cần phải đăng nhập trước!")
        return message.error("Có lỗi xảy ra khi bỏ theo dõi bài đăng!") 
      })
  }
}

export const actFollowProjectRequest = (data, project) => {
  console.log(project)
  return dispatch => {
    return axios.post(`http://localhost:3001/users/follow`, data, { headers: authHeader() }).then(res => {
      if (res.data.status === 409)
        return message.warning("Bạn đã từng theo dõi bài đăng này trước đó rồi!")
      else if (res.data.status === 201) {
        dispatch(Action.actFollowProject(res.data.result, project))
        return message.success("Theo dõi thành công!")
      }
    })
      .catch(err => { 
        if (localStorage.getItem('res') === undefined || localStorage.getItem('res') === null)
          return message.warning("Bạn cần phải đăng nhập trước!")
        return message.error("Có lỗi xảy ra khi theo dõi bài đăng!") 
      })
  }
}

export const actPostingCommentRequest = (data, user) => {
  console.log(user)
  return dispatch => {
    return axios.post(`http://localhost:3001/comment`, data, { headers: authHeader() }).then(res => {
      if (res.data.status === 201 || res.status === 201) {
        dispatch(Action.actPostComment(res.data.comment, user))
        return message.success("Đăng bình luận thành công!")
      }
    })
      .catch(err => { 
        if (localStorage.getItem('res') === undefined || localStorage.getItem('res') === null)
          return message.warning("Bạn cần phải đăng nhập trước!")
        return message.error("Có lỗi xảy ra khi đăng bình luận!")
       })
  }
}

export const actDeleteProjectRequest = (id, data) => {
  return dispatch => {
    axios.delete(`http://localhost:3001/projects/${id}`, { headers: authHeader() })
      .then(res => {
        console.log(res);
        if (res.data.status === 200 && res) {
          dispatch(Action.actDeleteProject(res.data, data))
          message.success('Xóa bài đăng thành công!');
        }
        else return message.error('Có lỗi xảy ra!');
      })
      .catch(err => {
        if (localStorage.getItem('res') === undefined || localStorage.getItem('res') === null)
          return message.warning("Bạn cần phải đăng nhập trước!")
        return message.error('Có lỗi xảy ra khi xóa bài đăng!')
      })
  }
}