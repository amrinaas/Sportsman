import axios from "axios";
import {
  BOOKMARK_VIDEO,
  GET_BOOKMARK_VIDEO,
  DELETE_BOOKMARK_VIDEO,
} from "./actionTypes";

export const bookmarkVideo = (token, body) => (dispatch) => {
  const config = {
    headers: { Authorization: token },
  };
  axios
    .post(`/api/favourite`, body, config)
    .then((res) => {
      dispatch({
        type: BOOKMARK_VIDEO,
        payload: res,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
export const deleteBookmark = (token, id) => (dispatch) => {
  const config = {
    headers: { Authorization: token },
  };
  axios
    .delete(`/api/favourite/${id}`, config)
    .then((res) => {
      dispatch({
        type: DELETE_BOOKMARK_VIDEO,
        payload: res,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
export const getBookmarkVideo = (token) => (dispatch) => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const config = {
    headers: { Authorization: token },
  };
  axios
    .get(`api/favourite`, config)
    .then((res) => {
      dispatch({
        type: GET_BOOKMARK_VIDEO,
        payload: res.data.data.filter((item) => {
          return item.user_id === userData.userId;
        }),
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
