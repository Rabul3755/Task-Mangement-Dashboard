import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskDashboard from './pages/TaskDashboard';

const App = () => {
  return (
    <TaskDashboard/>
    // <Router>
    //   <Routes>
    //     <Route path="/tasks" element={<TaskDashboard />} />
    //   </Routes>
    // </Router>
  );
};

export default App;

