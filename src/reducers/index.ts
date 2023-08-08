import { CombinedState, Reducer, combineReducers } from "redux";
import usersReducer from "./usersReducer";
import filterReducer from "./filterReducer";
import { QueryAction, QueryState, UsersAction } from "../type";

const rootReducer:Reducer<
  CombinedState<{users: never; query: QueryState;}>, 
  UsersAction | QueryAction
> = combineReducers({
  users: usersReducer,
  query: filterReducer
});

export default rootReducer;