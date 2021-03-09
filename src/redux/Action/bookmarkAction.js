import axios from "axios";
import {
  BOOKMARK_VIDEO,
  GET_BOOKMARK_VIDEO,
  DELETE_BOOKMARK_VIDEO,
} from "./actionTypes";

export const bookmarkVideo = (token, body) => (dispatch) => {
  const config = {
    headers: { Authorization: token },
    // headers: { Authorization: localStorage.getItem("token") },
  };
  axios
    .post(`/api/favourite`, body, config)
    .then((res) => {
      console.log("test-favorite-video", res);
      dispatch({
        type: BOOKMARK_VIDEO,
        payload: res,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getBookmarkVideo = (token) => (dispatch) => {
  const config = {
    headers: { Authorization: token },
  };
  axios
    .get(`api/favourite/all`, config)
    .then((res) => {
      console.log("test-favourite-all", res);
      dispatch({
        type: GET_BOOKMARK_VIDEO,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
export const deleteBookmark = (token) => (dispatch) => {
  const config = {
    headers: { Authorization: token },
  };
  axios.delete(`api/favourite`, config).then((res) => {
    dispatch({
      type: DELETE_BOOKMARK_VIDEO,
      payload: res.data,
    });
  });
};
