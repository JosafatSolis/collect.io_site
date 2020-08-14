// Imports
import { loginPost, logoutPost } from "../services/loginServices";

// Actions
const LOGIN_SUCCESS = "collect.io/session/LOGIN_SUCCESS";
const LOGIN_FAILED = "collect.io/session/LOGIN_FAILED";
const CLEAR_ERROR_MSG = "collect.io/session/CLEAR_ERROR_MSG";
const LOGOUT_SUCCESS = "collect.io/session/LOGOUT_SUCCESS";
const UPDATE_BREADCRUMB = "collect.io/session/UPDATE_BREADCRUMB";

// State
const initState = {
  currentUser: JSON.parse(localStorage.getItem("currentUser")) || {},
  errorMsg: null,
  breadcrumbText: "View Data",
};

// Reducer
export default function reducer(state = initState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("currentUser", JSON.stringify(action.payload));
      return {
        ...state,
        currentUser: action.payload,
        breadcrumbText: "View Data",
        errorMsg: null,
      };

    case LOGIN_FAILED:
      localStorage.removeItem("currentUser");
      return { ...state, currentUser: {}, errorMsg: action.payload };

    case CLEAR_ERROR_MSG:
      return { ...state, errorMsg: null };

    case LOGOUT_SUCCESS:
      localStorage.clear();
      return { currentUser: null, errorMsg: null };

    case UPDATE_BREADCRUMB:
      return { ...state, breadcrumbText: action.payload };

    default:
      return state;
  }
}

// Action Creators
export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginFailed = (payload) => ({
  type: LOGIN_FAILED,
  payload,
});

export const clearErrorMsg = () => ({
  type: CLEAR_ERROR_MSG,
});

const logOutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

export const updateBreadcrumb = (payload) => ({
  type: UPDATE_BREADCRUMB,
  payload,
});

// Thunks
export const login = (credentials) => {
  return (dispatch) => {
    loginPost(credentials)
      .then((response) => {
        dispatch(loginSuccess(response.data));
      })
      .catch((error) => {
        dispatch(loginFailed(error.toString()));
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    logoutPost()
      .then((response) => {
        dispatch(logOutSuccess());
      })
      .catch((error) => console.log("Logout error", error));
  };
};
