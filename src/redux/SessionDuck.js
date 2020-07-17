// Imports
import { loginPost } from "../services/loginServices";

// Actions
const LOGIN_SUCCESS = "collect.io/session/LOGIN_SUCCESS";
const LOGIN_FAILED = "collect.io/session/LOGIN_FAILED";
const CLEAR_ERROR_MSG = "collect.io/session/CLEAR_ERROR_MSG";

// State
const initState = {
  currentUser: JSON.parse(localStorage.getItem("currentUser")) || {},
  errorMsg: null,
};

// Reducer
export default function reducer(state = initState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("currentUser", JSON.stringify(action.payload));
      return { ...state, currentUser: action.payload, errorMsg: null };

    case LOGIN_FAILED:
      localStorage.removeItem("currentUser");
      return { ...state, currentUser: {}, errorMsg: action.payload };

    case CLEAR_ERROR_MSG:
      return { ...state, errorMsg: null };

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
