import axios from "../helpers/axios";

const login = (user) => {
  console.log(user);

  return async (dispatch) => {
    dispatch({ type: "LOGIN_REQUESTED" });

    try {
      const res = await axios.post("/adminSignIn", user);
      if (res.status === 200) {
        const { token, firstName, lastName, email } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem(
          "user",
          JSON.stringify({ token, firstName, lastName, email })
        );
        dispatch({
          type: "LOGIN_SUCESS",
          payload: { token, firstName, lastName, email },
        });
      }
    } catch (error) {
      dispatch({
        type: "LOGIN_FAILED",
        payload: { error: error.response.data.errors },
      });
    }
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

const isUserLoggedIn = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        dispatch({
          type: "LOGIN_SUCESS",
          payload: {
            token: user.token,
            firstName: user.firstname,
            lastName: user.lastName,
            email: user.email,
          },
        });
      }
    } else {
      dispatch({
        type: "LOGIN_FAILED",
        payload: { error: "failed to login" },
      });
    }
  };
};

const signOut = () => {
  return async (dispatch) => {
    localStorage.clear();
    dispatch({
      type: "LOGOUT",
    });
  };
};

export { login, signUp, isUserLoggedIn, signOut };
