import { DispatchType, IUser } from "../type";

export const fetchUsers = () => (dispatch: DispatchType) => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) =>
      dispatch({
        type: "GET_USERS",
        payload: users
      })
    );
};

export const removeUser = (newList: IUser[]) => (dispatch: DispatchType) => {
  dispatch({
    type: "REMOVE_USER",
    payload: newList
  });
};
