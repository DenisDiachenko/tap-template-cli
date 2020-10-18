import {
  TOGGLE_TODO, 
  LOADING_START,
  LOADING_SUCCESS,
  LOADING_FAILURE
} from "../actions/types";

const initialState = {
  todos: [],
  isLoading: false,
  error: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_START:
      return { ...state, isLoading: true };
    case LOADING_SUCCESS:
      return { ...state, isLoading: false, ...action.payload };
    case LOADING_FAILURE:
      return { ...state, isLoading: false, ...action.payload };
    case TOGGLE_TODO: {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
}
