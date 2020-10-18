import React, { useCallback } from 'react';

import { useDispatch } from 'react-redux';
import { toggleTodo } from '../../redux/actions';

import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(1, 2),
  },
}))

const ListItem = ({ id, title, completed }) => {

  const dispatch = useDispatch();

  const onChange = useCallback(() => {
    dispatch(toggleTodo(id));
  }, [dispatch, id]);

  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.root}>
      <Grid container alignItems="center" justify="space-between">
      <Checkbox checked={completed} onChange={onChange} />
      <Typography>{title}</Typography>
      </Grid>
    </Paper>
  )
};

export default ListItem;
