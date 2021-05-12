const login = (user) => {
  return async (dispatch) => {
    dispatch({
      type: "LOGIN",
      payload: { ...user },
    });
  };
};

const signUp = (user) => {
  return async (dispatch) => {
    dispatch({
      type: "SIGNUP",
      payload: { ...user },
    });
  };
};

export { login, signUp };
