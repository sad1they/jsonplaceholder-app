const initialState = {
  query: ""
};

export default function (state = initialState, action) {
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
