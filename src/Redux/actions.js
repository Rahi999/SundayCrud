import {
  GET_TODO_FAILURE,
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
  POST_TODO_FAILURE,
  POST_TODO_REQUEST,
  POST_TODO_SUCCESS
} from "./actionsType";

export const TodoRequest = () => {
  return {
    type: GET_TODO_REQUEST
  };
};

export const TodoFailure = () => {
  return {
    type: GET_TODO_FAILURE
  };
};

export const TodoSuccess = (payload) => {
  return {
    type: GET_TODO_SUCCESS,
    payload
  };
};

export const PostRequest = () => {
  return {
    type: POST_TODO_REQUEST
  };
};

export const PostFailure = () => {
  return {
    type: POST_TODO_FAILURE
  };
};

export const PostSuccess = (payload) => {
  return {
    type: POST_TODO_SUCCESS,
    payload
  };
};
