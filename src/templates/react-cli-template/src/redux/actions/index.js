import {
  TOGGLE_TODO,
  SET_FILTER,
  LOADING_START,
  LOADING_SUCCESS,
  LOADING_FAILURE,
} from "./types";
import { fetchTodos } from '../../services/api/todos';

export const toggleTodo = id => (dispatch, getState) => {
  const { todos: { todos } } = getState();
  const updatedTodos = todos.map(
    (item) => item.id === id ?
      { ...item, completed: !item.completed } :
      item
  );
  dispatch({
    type: TOGGLE_TODO,
    payload: {
      todos: updatedTodos,
    }
  });
};

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });


const request = () => ({
  type: LOADING_START,
});

const success = (payload) => ({
  type: LOADING_SUCCESS,
  payload,
});

const failure = (error) => ({
  type: LOADING_FAILURE,
  payload: {
    error,
  }
});

export const getTodos = () => async (dispatch) => {
  dispatch(request());
  try {
    const todos = await fetchTodos();
    dispatch(success({ todos }));
  } catch (error) {
    failure({ error });
  }
}
