import { createSelector } from 'reselect';
import { VISIBILITY_FILTERS } from '../../constants'


const selectTodosState = (state) => state.todos;

export const selectLoadingStatus = createSelector(
  [selectTodosState],
  ({ isLoading }) => isLoading,
)

export const selectTodos = (filter) => createSelector(
  [selectTodosState],
  ({ todos }) => {
    switch (filter) {
      case VISIBILITY_FILTERS.ALL:
        return todos;
      case VISIBILITY_FILTERS.COMPLETED:
        return todos.filter((item) => item.completed);
      case VISIBILITY_FILTERS.ACTIVE:
        return todos.filter((item) => !item.completed);
    }
  }
);