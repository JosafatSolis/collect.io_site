// Imports

// Actions
const SET_USER = "collect.io/session/SET_USER";

// State
const initState = {
  currentUser: JSON.parse(localStorage.getItem("currentUser")) || {}
}

// Reducer
export default function reducer(state = initState, action) {
    switch (action.type) {
        case SET_USER:
          localStorage.setItem("currentUser", JSON.stringify(action.payload));
          return { ...state, currentUser: action.payload }

        default:
            return state;
  }
}

// Action Creators
export const setUser = (payload) => ({
  type: SET_USER,
  payload,
});

// Thunks
export const loadProducts = () => {
    return (dispatch) => {
    //  dispatch(loadingProducts());
    //   getProducts()
    //     .then((response) => {
    //       dispatch(getProductsSuccess(response.data));
    //     })
    //     .catch((error) => {
    //       dispatch(productsError(error.toString()));
    //     });
    };
  };