import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import searchReducer from "./searchReducer";

export default combineReducers({
  users: usersReducer,
  query: searchReducer
});
