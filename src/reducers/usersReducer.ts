import { UserState, UsersAction } from "../type";

const initialState = {
  items: []
};

export default function (
  state: UserState = initialState, 
  action: UsersAction
  ) {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        items: action.payload
      };
    case "REMOVE_USER":
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
