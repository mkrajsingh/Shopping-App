import { SEARCH_PRODUCTS } from "../actions/searchActions";

interface SearchState {
  query: string;
}

const initialState: SearchState = {
  query: "",
};

interface SearchAction {
  type: typeof SEARCH_PRODUCTS;
  payload: {
    query: string;
  };
}

const searchReducer = (state = initialState, action: SearchAction): SearchState => {
  switch (action.type) {
    case SEARCH_PRODUCTS:
      return {
        ...state,
        query: action.payload.query,
      };
    default:
      return state;
  }
};

export default searchReducer