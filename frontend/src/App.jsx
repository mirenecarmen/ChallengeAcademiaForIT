
import React, { useState } from 'react';
import TaskForm from './assets/components/TaskForm.jsx';
import TaskList from './assets/components/TaskList.jsx';
import './App.css';

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleTaskCreated = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="container">
      <h1>Lista de Tareas</h1>
      <TaskForm onTaskCreated={handleTaskCreated} />
      <TaskList key={refresh} />
    </div>
  );
}

export default App;
