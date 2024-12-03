import { createSlice } from '@reduxjs/toolkit';
import { format } from 'date-fns';

const initialState = {
  tasks: [],
  filter: 'all',
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({ ...action.payload, id: Date.now(), completed: false });
    },
    editTask: (state, action) => {
      const { id, title, description, dueDate } = action.payload;
      const task = state.tasks.find(task => task.id === id);
      if (task) {
        task.title = title;
        task.description = description;
        task.dueDate = dueDate;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    toggleComplete: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTask, editTask, deleteTask, toggleComplete, setFilter } =
  taskSlice.actions;

export const selectFilteredTasks = state => {
  const { tasks, filter } = state.tasks;
  const currentDate = format(new Date(), 'yyyy-MM-dd');
  switch (filter) {
    case 'completed':
      return tasks.filter(task => task.completed);
    case 'pending':
      return tasks.filter(task => !task.completed);
    case 'overdue':
      return tasks.filter(task => task.dueDate < currentDate && !task.completed);
    default:
      return tasks;
  }
};

export default taskSlice.reducer;
