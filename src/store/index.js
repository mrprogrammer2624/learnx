import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const logout = () => ({
  type: LOGOUT,
});

const initialState = {
  isAuthenticated: false,
  userRole: null,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        userRole: action.payload.role,
        user: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        userRole: null,
        user: null,
      };
    default:
      return state;
  }
};

export const login = (credentials) => async (dispatch) => {
  try {
    const response = await new Promise((resolve) => {
      setTimeout(() => {
        let user;
        if (
          credentials.username === "admin" &&
          credentials.password === "admin123"
        ) {
          user = { id: 1, username: "admin", role: "admin" };
        } else if (
          credentials.username === "teacher" &&
          credentials.password === "teacher123"
        ) {
          user = { id: 2, username: "teacher", role: "teacher" };
        } else if (
          credentials.username === "student" &&
          credentials.password === "student123"
        ) {
          user = { id: 3, username: "student", role: "student" };
        }
        resolve(user);
      }, 1000);
    });

    if (response) {
      dispatch(loginSuccess(response));
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (error) {
    console.error("Login failed:", error);
  }
};

export const store = createStore(authReducer, applyMiddleware(thunk));
