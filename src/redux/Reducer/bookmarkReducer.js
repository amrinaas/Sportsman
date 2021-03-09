import { BOOKMARK_VIDEO, GET_BOOKMARK_VIDEO } from "../Action/actionTypes";

const initialState = {
  bookmark: "",
  bookmarked: [],
  message: "",
};

const bookmarkReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKMARK_VIDEO:
      return {
        ...state,
        bookmark: action.payload,
        message: action.payload,
      };
    case GET_BOOKMARK_VIDEO:
      return {
        ...state,
        bookmarked: action.payload,
      };
    default:
      return state;
  }
};

export default bookmarkReducer;
