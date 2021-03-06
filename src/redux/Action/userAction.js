import axios from "axios";
import jwt_decode from "jwt-decode";
import {
  SIGN_IN,
  SIGN_UP,
  SET_BOARDING,
  SIGN_OUT,
  SET_TOKEN,
  UPLOAD_IMAGE,
  PUT_USERDATA,
  POST_CONTACT,
  MESSAGE_ERROR,
  GOOGLE_AUTH,
  DELETE_ACCOUNT,
  GET_USERDATA,
} from "./actionTypes";

export const signUp = (payload) => {
  return {
    type: SIGN_UP,
    payload,
  };
};

export const postSignUp = (body) => (dispatch) => {
  axios
    .post(`api/register`, body)
    .then((res) => {
      console.log("ini res =>", res);
      const decoded = jwt_decode(res.data.data.token);
      dispatch(signIn(decoded));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const signIn = (payload) => {
  return {
    type: SIGN_IN,
    payload,
  };
};

export const setToken = (token) => {
  return {
    type: SET_TOKEN,
    token,
  };
};

export const postSignIn = (body) => (dispatch) => {
  axios
    .post(`api/login`, body)
    .then((res) => {
      console.log("ini res =>", res);
      // const decoded = jwt_decode(res.data.data.token);
      dispatch(signIn(res.data.data));
      // localStorage.setItem('userData', JSON.stringify(decoded));
      dispatch(setToken(res.data.data.token));
      localStorage.setItem("token", res.data.data.token);
    })
    .catch((err) => {
      console.log("error ==>", err.response);
      dispatch({
        type: MESSAGE_ERROR,
        payload: err.response.data.message,
      });
    });
};

export const googleSignin = () => (dispatch) => {
  axios
    .get(`api/google`)
    .then((res) => {
      console.log("coba", res);
      dispatch({
        type: GOOGLE_AUTH,
        payload: res.request.responseURL,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const onBoardingData = (payload) => {
  return {
    type: SET_BOARDING,
    payload,
  };
};

export const putBoardingData = (token, body) => async (dispatch) => {
  console.log("boarding", token);
  const config = {
    headers: { Authorization: token },
  };
  axios
    .put(`api/login/update`, body, config)
    .then((res) => {
      console.log("ini res =>", res);
      dispatch(onBoardingData(res));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const signOut = () => (dispatch) => {
  dispatch({
    type: SIGN_OUT,
    payload: localStorage.removeItem("token"),
  });
};

// export const setDataToken = () => (dispatch) => {
// 	dispatch({
// 		type: SET_TOKEN,
// 		payload: localStorage.getItem('token'),
// 	});
// };

export const uploadImage = (token, body) => (dispatch) => {
  const config = {
    headers: { Authorization: token, "Content-Type": "multipart/form-data" },
  };
  axios
    .post(`api/upload`, body, config)
    .then((res) => {
      console.log("coba", res);
      dispatch({
        type: UPLOAD_IMAGE,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const putUserData = (token, userData) => (dispatch) => {
  const config = {
    headers: { Authorization: token },
  };
  axios
    .put(`api/update`, userData, config)
    .then((res) => {
      console.log("putUserData => ", res);
      dispatch({
        type: PUT_USERDATA,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
export const postContact = (token, body) => (dispatch) => {
  const config = {
    headers: { Authorization: token },
  };
  axios
    .post(`api/contact-us`, body, config)
    .then((res) => {
      console.log("coba", res);
      dispatch({
        type: POST_CONTACT,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteAccount = (token) => async (dispatch) => {
  const config = {
    headers: { Authorization: token },
  };
  axios.delete(`api/users/delete`, config).then((res) => {
    if (res === 200) {
      dispatch({
        type: DELETE_ACCOUNT,
        payload: res.data.message,
      });
    }
  });
};

export const getUserData = (token) => (dispatch) => {
  const config = {
    headers: { Authorization: token },
  };
  axios
    .get(`api/get`, config)
    .then((res) => {
      console.log("ini get user data RIRI", res);
      if (res.status === 200) {
        dispatch({
          type: GET_USERDATA,
          payload: res.data,
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
