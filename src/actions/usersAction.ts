export const fetchUsers = () => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) =>
      dispatch({
        type: "GET_USERS",
        payload: users
      })
    );
};

export const removeUser = (newList) => (dispatch) => {
  dispatch({
    type: "REMOVE_USER",
    payload: newList
  });
};
