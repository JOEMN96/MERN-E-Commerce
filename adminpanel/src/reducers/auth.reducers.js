export default function auth(state = {}, action) {
  switch (action.type) {
    case "LOGIN":
      state = { ...state, ...action.payload };
      break;
    default:
      return state;
  }
  return state;
}
