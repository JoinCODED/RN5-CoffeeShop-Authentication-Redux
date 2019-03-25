import * as actionTypes from "../actions/types";

const initialState = {
  items: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      return {
        ...state,
        items: action.payload
      };
    case actionTypes.REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item !== action.payload)
      };
    case actionTypes.CHECKOUT:
      return {
        ...state,
        items: []
      };
    default:
      return state;
  }
}
