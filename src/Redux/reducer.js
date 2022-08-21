import {
  GET_TODO_FAILURE,
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
  POST_TODO_FAILURE,
  POST_TODO_REQUEST,
  POST_TODO_SUCCESS
} from "./actionsType";

const initState = {
  todos: [],
  isLoading: false,
  isError: false
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_TODO_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }
    case GET_TODO_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    }
    case GET_TODO_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        todos: [...payload]
      };
    }
    case POST_TODO_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }
    case POST_TODO_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    }
    case POST_TODO_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false
      };
    }
    default:
      return state;
  }
};
