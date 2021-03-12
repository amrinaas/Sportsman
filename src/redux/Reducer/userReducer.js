import {
  SIGN_IN,
  SIGN_UP,
  SET_BOARDING,
  SIGN_OUT,
  SET_TOKEN,
  UPLOAD_IMAGE,
  POST_CONTACT,
  PUT_USERDATA,
  GET_USERDATA,
  MESSAGE_ERROR,
  GOOGLE_AUTH,
  DELETE_ACCOUNT,
  POST_EXERCISE,
  GET_EXERCISE,
} from "../Action/actionTypes";

const initialState = {
  signUp: "",
  signIn: "",
  token: null,
  status: null,
  boarding: 0,
  uploadImg: null,
  contact: "",
  userData: [],
  message: "",
  google: "",
  exercise: "",
  userProfile: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        // signUp: action.payload,
        message: action.payload,
      };
    case SIGN_IN:
      return {
        ...state,
        signIn: action.payload.token,
        status: action.payload.status,
        message: "",
      };
    case SET_BOARDING:
      return {
        ...state,
        boarding: action.payload,
      };

    case SIGN_OUT:
      return {
        ...state,
        signOut: action.payload,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case UPLOAD_IMAGE:
      return {
        ...state,
        uploadImg: action.payload,
      };
    case POST_CONTACT:
      return {
        ...state,
        contact: action.payload,
      };
    case PUT_USERDATA:
      return {
        ...state,
        // userProfile: action.payload.user,
        userProfile: action.payload.user,
        message: action.payload.message,
      };
    case GET_USERDATA:
      return {
        ...state,
        userProfile: action.payload,
      };
    case MESSAGE_ERROR:
      return {
        ...state,
        message: action.payload,
      };
    case GOOGLE_AUTH:
      return {
        ...state,
        google: action.payload,
      };
    case DELETE_ACCOUNT:
      return {
        ...state,
        status: action.payload,
      };
    case GET_EXERCISE:
      return {
        ...state,
        exercise: action.payload,
      };
    case POST_EXERCISE:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
