// Imports
import { normalizeArray } from "../utils/utils";
import { getUserFormats, getRecords } from "../services/dataServices";

// Actions
// Async
const GET_USER_FORMATS_SUCCESS =
  "collect.io_site/data/GET_USER_FORMATS_SUCCESS";
const GET_USER_FORMATS_FAILED = "collect.io_site/data/GET_USER_FORMATS_FAILED";
const GET_DATA_SUCCESS = "collect.io_site/data/GET_DATA_SUCCESS";
const GET_DATA_FAILED = "collect.io_site/data/GET_DATA_FAILED";

// Sync
const UPDATE_STATUS_LOADING = "collect.io_site/data/UPDATE_STATUS_LOADING";
const UPDATE_CURRENT_FORMAT = "collect.io_site/data/UPDATE_CURRENT_FORMAT";
const UPDATE_ADDING_NEW_FORMAT = "collect.io_site/data/UPDATE_ADDING_NEW_FORMAT";

// State
// Status available: new_query, loading_data, display_data
const status = {
  new_query: 1,
  loading_data: 2,
  display_data: 3,
  error: 4,
};
Object.freeze(status);

const initState = {
  data: {},
  userFormats: {},
  currentFormat: {},
  status: status.new_query,
  error_msg: null,
  addingNewFormat: false,
};

// Reducer
export default function reducer(state = initState, action) {
  switch (action.type) {
    case UPDATE_STATUS_LOADING:
      return { ...state, status: status.loading_data };

    case UPDATE_CURRENT_FORMAT:
      //console.log(state.userFormats[action.payload]);
      return {
        ...state,
        currentFormat: state.userFormats[action.payload],
        data: {},
      };

    case GET_USER_FORMATS_SUCCESS:
      return {
        ...state,
        currentFormat: action.payload[0] || {},
        userFormats: normalizeArray(action.payload),
        status: status.display_data,
        error_msg: null,
      };

    case GET_USER_FORMATS_FAILED:
      return {
        ...state,
        userFormats: {},
        status: status.error,
        error_msg: action.payload,
      };

    case GET_DATA_SUCCESS:
      //console.log(action.payload);
      return {
        ...state,
        data: action.payload,
        status: status.display_data,
        error_msg: null,
      };

    case GET_DATA_FAILED:
      return {
        ...state,
        data: {},
        status: status.error,
        error_msg: action.payload,
      };

    case UPDATE_ADDING_NEW_FORMAT:
      return { ...state, addingNewFormat: action.payload };

    default:
      return state;
  }
}

// Action Creators
export const updateStatusLoading = () => ({
  type: UPDATE_STATUS_LOADING,
});

const getUserFormatsSuccess = (payload) => ({
  type: GET_USER_FORMATS_SUCCESS,
  payload,
});

const getUserFormatsFailed = (payload) => ({
  type: GET_USER_FORMATS_FAILED,
  payload,
});

export const updateCurrentFormat = (payload) => ({
  type: UPDATE_CURRENT_FORMAT,
  payload,
});

const getDataSuccess = (payload) => ({
  type: GET_DATA_SUCCESS,
  payload,
});

const getDataFailed = (payload) => ({
  type: GET_DATA_FAILED,
  payload,
});

const updateAddingNewFormat = (payload) => ({
  type: UPDATE_ADDING_NEW_FORMAT,
  payload,
});

// Custom Actions
export const startNewProduct = () => {
  return (dispatch) => {
    dispatch(updateAddingNewFormat(true));
    dispatch()
  }
}

// Thunks
// User id is not required because backend extracts it from Token
export const loadUserFormats = () => {
  return (dispatch) => {
    dispatch(updateStatusLoading());
    getUserFormats()
      .then((response) => {
        dispatch(getUserFormatsSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getUserFormatsFailed(error.toString()));
      });
  };
};

export const loadData = (params) => {
  return (dispatch) => {
    dispatch(updateStatusLoading());
    getRecords(params)
      .then((response) => {
        dispatch(getDataSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getDataFailed(error.toString()));
      });
  };
};
