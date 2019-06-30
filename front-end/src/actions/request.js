import * as Action from "./index";
import * as actSearch from './searchEstate'
import * as actMap from "./map"
import callApi from "./../utils/apiCaller";
import { authHeader } from "../constants/authHeader";
import axios from "axios";
import { message } from 'antd'

export const actFetchEstatesRequest = info => {
  return dispatch => {
    return axios.post("http://localhost:3001/projects/home", info)
      .then(res => {
        dispatch(Action.actFetchEstates(res.data.projects));
      })
      .catch(error => {
        dispatch(Action.actFetchEstates([]));
        // console.log(error);
      })
  };
};

//--------- SearchMap
export const actSearchMapRequest = info => {
  return dispatch => {
    return axios.post("http://localhost:3001/projects/searchmap", info)
      .then(res => {
        dispatch(actMap.actSearchMap(res.data.projects));
      })
      .catch(error => {
        if (error.response) {
          if (error.response.data.status === 404) {
            dispatch(actMap.actSearchMap([]));
            message.warning('Không có bất động sản quanh khu vực này')
          }
          else {
            message.error('Có lỗi xảy ra!')
          }
        }
        else {
          message.error('Có lỗi xảy ra. Vui lòng kiểm tra lại đường truyền hoặc lỗi do server!')
        }

      })
  }
}
//---------
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

export const actGetUserInfoRequest = () => {
  return dispatch => {
    return axios
      .get(`http://localhost:3001/users/info/`, { headers: authHeader() })
      .then(res => {
        dispatch(Action.actGetUserInfo(res.data));
        console.log(res.data);
      })
      .catch(err => {
        message.error("Lấy thông tin tài khoản không thành công!")
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

export const actGetEstateListOfUserRequest = (page) => {
  return dispatch => {
    return axios.get(`http://localhost:3001/users/danhsachproject/${page}`, { headers: authHeader() }).then(res => {
      if (res.data.status === 200)
        dispatch(Action.actGetEstateListOfUser(res.data.projects))
      console.log(res);
      // return message.success("Lấy danh sách bài viết của tài khoản thành công!")
    })
      .catch(err => {
        if (localStorage.getItem('res') === undefined || localStorage.getItem('res') === null)
          return message.warning("Bạn cần phải đăng nhập trước!")
        return message.error("Có lỗi xảy ra khi lấy danh sách bài viết!")
      })
  }
}

export const actGetFollowingListRequest = () => {
  return dispatch => {
    return axios.get(`http://localhost:3001/users/listSaved`, { headers: authHeader() }).then(res => {
      if (res.data.status === 200)
        dispatch(Action.actGetFollowingList(res.data.result.projects))
    })
      .catch(err => {
        if (localStorage.getItem('res') === undefined || localStorage.getItem('res') === null)
          return null
      })
  }
}

export const actUnfollowProjectRequest = (data) => {
  return dispatch => {
    return axios.post(`http://localhost:3001/users/unfollow`, data, { headers: authHeader() }).then(res => {
      console.log(res.data.status)
      if (res.data.status === 201) {
        dispatch(Action.actUnfollowProject(res.data, data))
        return message.success("Bỏ theo dõi thành công!")
      }
    })
      .catch(err => {
        if (localStorage.getItem('res') === undefined || localStorage.getItem('res') === null)
          return message.warning("Bạn cần phải đăng nhập trước!")
        else return message.error("Có lỗi xảy ra khi bỏ theo dõi bài đăng!")
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

export const actEditUserProjectRequest = (data, id) => {
  return dispatch => {
    axios.post(`http://localhost:3001/projects/edit/${id}`, data, { headers: authHeader() })
      .then(res => {
        console.log(res);
        if (res.status === 200 || res.data.status === 200) {
          message.success('Cập nhật bài đăng thành công!');
          dispatch(Action.actEditUserProject(data, res.data.project))
        }
        else return message.error('Cập nhật bài đăng thất bại');
      })
      .catch(err => { return message.error("Có lỗi xảy ra!") })
  }
}

export const actEditUserInfoRequest = (data) => {
  return dispatch => {
    axios.post(`http://localhost:3001/users/edit`, data, { headers: authHeader() })
      .then(res => {
        console.log(res)
        if (res.status === 200) {
          dispatch(Action.actEditUserInfo(res.data.user))
          message.success("Cập nhật thông tin thành công!")
        }
        else return message.error("Có lỗi xảy ra khi cập nhật thông tin!")
      })
      .catch(err => {
        if (localStorage.getItem('res') === undefined || localStorage.getItem('res') === null)
          return message.warning("Bạn cần phải đăng nhập trước!")
        return message.error('Có lỗi xảy ra khi cập nhật thông tin!')
      })
  }
}

export const actEditCommentRequest = (id, data) => {
  return dispatch => {
    axios.post(`http://localhost:3001/comment/edit/${id}`, data, { headers: authHeader() })
      .then(res => {
        if (res.data.status === 200 && res) {
          dispatch(Action.actEditComment(res.data.comment, data))
          message.success("Chỉnh sửa thành công!")
        }
        else return message.error("Chỉnh sửa bình luận thất bại!")
      })
      .catch(err => {
        message.error("Có lỗi xảy ra!")
      })
  }
}

export const actDeleteCommentRequest = (id, data) => {
  return dispatch => {
    axios.delete(`http://localhost:3001/comment/${id}`, { headers: authHeader() })
      .then(res => {
        if (res.data.status === 200) {
          dispatch(Action.actDeleteComment(id, data))
          message.success("Xóa bình luận thành công!")
        }
        else return message.error("Xóa bình luận thất bại!")
      })
      .catch(err => {
        message.error("Có lỗi xảy ra!")
      })
  }
}

export const reqSearchEstate = (data) => {
  return dispatch => {
    axios.post(`http://localhost:3001/projects/searchprojects`, data)
      .then(res => {
        if (res.data.status === 200) {
          console.log(res)
          dispatch(actSearch.actSearchEstate(res.data.projects))
        }
      })
      .catch(err => {
        if (err) {
          message.warning('Không có bất động sản bạn cần tìm')
          dispatch(actSearch.actSearchEstate([]))
        }
        else {
          message.error('Lỗi, vui lòng kiểm tra lại đường truyền!')
        }
      })
  }
}