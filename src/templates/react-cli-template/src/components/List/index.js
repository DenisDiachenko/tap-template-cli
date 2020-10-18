import React from 'react';

import { useSelector } from 'react-redux';
import { selectFilter } from '../../redux/selectors/filter';

import useTodos from '../../hooks/todos';

import ListItem from '../ListItem';

import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  list: {
    padding: theme.spacing(2),
  },
}))

const List = () => {

  const classes = useStyles();

  const filter = useSelector(selectFilter)

  const [isLoading, todos] = useTodos(filter);

  if(isLoading) {
    return <CircularProgress />
  }

  return (
    <Grid container className={classes.list} justify="space-evenly">
      {todos.map((item) => (
        <Grid item xs={12} md={3} key={item.id}>
          <ListItem {...item} />
        </Grid>
      ))}
    </Grid>
  )
}

export default List
