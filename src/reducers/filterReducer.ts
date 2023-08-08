import { QueryAction, QueryState } from "../type";

const initialState = {
  query: ""
};

export default function (
  state: QueryState = initialState,
  action: QueryAction
) {
  switch (action.type) {
    case "FILTER_USERS":
      return {
        ...state,
        query: action.payload
      };
    default:
      return state;
  }
}
