import {
  DELETE_CONTENT,
  GET_CONTENT,
  GET_CONTENT_BY_ID,
  POST_CONTENT,
  PUT_CONTENT,
  GET_HISTORY_TRACKING,
} from "../Action/actionTypes";

const initialState = {
  content: [],
  message: "",
  video: "",
  tracking: "",
};

const contentReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CONTENT:
      return {
        ...state,
        content: payload,
      };
    case GET_CONTENT_BY_ID:
      return {
        ...state,
        video: payload.video,
        message: payload.message,
      };
    case POST_CONTENT:
      return {
        ...state,
        content: payload,
        message: payload,
      };
    case PUT_CONTENT:
      return {
        ...state,
        content: payload,
        message: payload,
      };
    case DELETE_CONTENT:
      return {
        ...state,
        message: payload,
      };
    case GET_HISTORY_TRACKING:
      return {
        ...state,
        tracking: payload,
      };
    default:
      return state;
  }
};

export default contentReducer;
