import { DispatchType } from "../type";

export const filterUsers = (text: string) => (dispatch: DispatchType) => {
  dispatch({
    type: "FILTER_USERS",
    payload: text
  });
};
