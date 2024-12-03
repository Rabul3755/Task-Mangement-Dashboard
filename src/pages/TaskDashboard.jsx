import React from 'react';
import AddTask from '../components/AddTask';
import TaskList from '../components/TaskList';
import TaskFilters from '../components/TaskFilter';
import { Container, Typography } from '@mui/material';

const TaskDashboard = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Task Management Dashboard
      </Typography>
      <TaskFilters />
      <AddTask />
      <TaskList />
    </Container>
  );
};

export default TaskDashboard;

