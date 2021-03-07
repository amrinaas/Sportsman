import { combineReducers } from "redux";
import userReducer from "./Reducer/userReducer";
import contentReducer from "./Reducer/contentReducer";
import bookmarkReducer from "./Reducer/bookmarkReducer";

export default combineReducers({
  users: userReducer,
  content: contentReducer,
  bookmark: bookmarkReducer,
});
