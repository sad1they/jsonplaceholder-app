export const filterUsers = (text) => (dispatch) => {
  dispatch({
    type: "REMOVE_USER",
    payload: text
  });
};
