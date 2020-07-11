// Imports

// Actions
const LOADING_PRODUCTS = "lab-redux/products/LOADING_PRODUCTS";

// State
const initState = {}

// Reducer
export default function reducer(state = initState, action) {
    switch (action.type) {
        case LOADING_PRODUCTS:
          return { ...state, }

        default:
            return state;
  }
}

// Action Creators
export const loadingProducts = (payload) => ({
  type: LOADING_PRODUCTS,
  payload,
});

// Thunks
export const loadProducts = () => {
    return (dispatch) => {
      dispatch(loadingProducts());
    //   getProducts()
    //     .then((response) => {
    //       dispatch(getProductsSuccess(response.data));
    //     })
    //     .catch((error) => {
    //       dispatch(productsError(error.toString()));
    //     });
    };
  };