import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectTodos, selectLoadingStatus } from '../redux/selectors/todos';
import { getTodos } from '../redux/actions';

const useTodos = (filter) => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectLoadingStatus);
  const todos = useSelector(state => selectTodos(filter)(state));

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return [isLoading, todos];

};

export default useTodos;
