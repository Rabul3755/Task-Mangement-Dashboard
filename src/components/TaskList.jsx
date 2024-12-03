import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleComplete, deleteTask, selectFilteredTasks } from '../features/tasks/taskSlice';
import { Card, CardContent, CardActions, Typography, Button, Box } from '@mui/material';

const TaskList = () => {
  const tasks = useSelector(selectFilteredTasks);
  const dispatch = useDispatch();

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        Task List
      </Typography>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <Card
            key={task.id}
            sx={{
              mb: 2,
              backgroundColor: task.completed ? '#e0ffe0' : '#fff',
            }}
          >
            <CardContent>
              <Typography variant="h6">{task.title}</Typography>
              <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
                {task.description}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Due: {task.dueDate}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color={task.completed ? 'secondary' : 'primary'}
                onClick={() => dispatch(toggleComplete(task.id))}
              >
                {task.completed ? 'Mark as Pending' : 'Mark as Completed'}
              </Button>
              <Button size="small" color="error" onClick={() => dispatch(deleteTask(task.id))}>
                Delete
              </Button>
            </CardActions>
          </Card>
        ))
      ) : (
        <Typography variant="body1">No tasks found. Add some!</Typography>
      )}
    </Box>
  );
};

export default TaskList;

