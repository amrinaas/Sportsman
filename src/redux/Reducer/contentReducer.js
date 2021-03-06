import {
  DELETE_CONTENT,
  GET_CONTENT,
  GET_CONTENT_BY_ID,
  POST_CONTENT,
  PUT_CONTENT,
} from "../Action/actionTypes";

const initialState = {
  content: [],
  video: "",
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
        video: payload,
      };
    case POST_CONTENT:
      return {
        ...state,
        content: payload,
      };
    case PUT_CONTENT:
      return {
        ...state,
        content: payload,
      };
    case DELETE_CONTENT:
      return {
        ...state,
        content: payload,
      };
    default:
      return state;
  }
};

export default contentReducer;
