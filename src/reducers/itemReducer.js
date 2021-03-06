import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  ITEMS_LOADING,
  UPDATE_ITEM,
  GET_ITEM,
  ADD_CART,
} from "../actions/constants";
const initialState = {
  items: [],
  singleItem: {},
  loading: false,
  cart: [],
};
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case GET_ITEM:
      return {
        ...state,
        /* items: action.payload, */
        singleItem: action.payload,
        loading: false,
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload),
      };
    case ADD_ITEM:
      return {
        ...state,
        items: [action.payload, ...state.items],
      };
    case UPDATE_ITEM:
      return {
        ...state,
        items: [action.payload, ...state.items],
        loading: false,
      };
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ADD_CART:
      return {
        ...state,
        cart: [action.payload, ...state.cart],
        loading: false,
      };
    default:
      return state;
  }
}
