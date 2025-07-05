import React from 'react';

function TaskItem({ task }) {
  return (
    <div className="task">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Completado: {task.completed ? '✔️' : '❌'}</p>
    </div>
  );
}

export default TaskItem;
