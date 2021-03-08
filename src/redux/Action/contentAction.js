import {
  DELETE_CONTENT,
  GET_CONTENT,
  GET_CONTENT_BY_ID,
  POST_CONTENT,
  PUT_CONTENT,
} from "../Action/actionTypes";
import axios from "axios";

export const getContent = (token) => (dispatch) => {
  const config = {
    headers: { Authorization: token },
  };
  axios
    .get(`api/content/all`, config)
    .then((res) => {
      console.log("coba", res);
      dispatch({
        type: GET_CONTENT,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
export const getContentById = (token, id) => (dispatch) => {
  const config = {
    headers: { Authorization: token },
  };
  axios
    .get(`/api/content/${id}`, config)
    .then((res) => {
      console.log("coba content by id =>", res);
      dispatch({
        type: GET_CONTENT_BY_ID,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const postContent = (token, input) => (dispatch) => {
  const config = {
    headers: { Authorization: token },
  };
  axios
    .post(`api/admin/content`, input, config)
    .then((res) => {
      console.log("coba", res);
      dispatch({
        type: POST_CONTENT,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const putContent = (token, input, id) => (dispatch) => {
  const config = {
    headers: { Authorization: token },
  };
  axios
    .put(`/api/admin/content/${id}`, input, config)
    .then((res) => {
      console.log("put content =>", res);
      dispatch({
        type: PUT_CONTENT,
        payload: res,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteContent = (token, id) => (dispatch) => {
  const config = {
    headers: { Authorization: token },
  };
  axios
    .delete(`api/admin/content/${id}`, config)
    .then((res) => {
      console.log("delete =>", res);
      dispatch({
        type: DELETE_CONTENT,
        payload: res,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
