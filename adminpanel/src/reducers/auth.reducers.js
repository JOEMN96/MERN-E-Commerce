const initialState = {
  token: null,
  firstName: "",
  lastName: "",
  email: "",
  authenticated: false,
  authenticating: false,
  errors: [],
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case "LOGIN_REQUESTED":
      state = {
        ...state,
        authenticating: true,
      };
      break;
    case "LOGIN_SUCESS":
      state = {
        ...state,
        ...action.payload,
        authenticated: true,
        authenticating: false,
      };
      break;
    case "LOGIN_FAILED":
      state = {
        ...state,
        errors: action.payload.error,
      };
      break;
    default:
      return state;
  }
  return state;
}
