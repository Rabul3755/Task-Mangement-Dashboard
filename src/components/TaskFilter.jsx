import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../features/tasks/taskSlice';
import { Box, Button } from '@mui/material';

const TaskFilters = () => {
  const dispatch = useDispatch();

  return (
    <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
      <Button variant="contained" onClick={() => dispatch(setFilter('all'))}>
        All
      </Button>
      <Button variant="outlined" onClick={() => dispatch(setFilter('completed'))}>
        Completed
      </Button>
      <Button variant="outlined" onClick={() => dispatch(setFilter('pending'))}>
        Pending
      </Button>
      <Button variant="outlined" onClick={() => dispatch(setFilter('overdue'))}>
        Overdue
      </Button>
    </Box>
  );
};

export default TaskFilters;

