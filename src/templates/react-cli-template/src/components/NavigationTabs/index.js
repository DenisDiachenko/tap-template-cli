import React, { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/actions';
import { selectFilter } from '../../redux/selectors/filter';

import { VISIBILITY_FILTERS } from '../../constants';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.primary.main,
  },
}))

const NavigationTabs = () => {

  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = useCallback((_, filter) => {
    dispatch(setFilter(filter));
  }, [dispatch])
  
  const classes = useStyles();

  return (
    <Paper square className={classes.paper}>
      <Tabs
        value={filter}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="navigation items"
        centered
      >
        <Tab label="All" value={VISIBILITY_FILTERS.ALL} />
        <Tab label="Active" value={VISIBILITY_FILTERS.ACTIVE} />
        <Tab label="Completed" value={VISIBILITY_FILTERS.COMPLETED} />
      </Tabs>
    </Paper>
  );
}

export default NavigationTabs;
