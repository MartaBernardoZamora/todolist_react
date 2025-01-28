import React, { useState, useContext } from 'react';
import { TaskContext } from '../App'

function TasksList() {
  const { task, setTask } = useContext(TaskContext);
  function handleDeleteButton(id){
    setTask(currentTask => currentTask.filter((_, i) => i !== id));
  }
  const tasks = task.map((t, i) =>
      <li key={i}>
        <p>{t}</p>
        <button
          className='upButton'
          onClick={()=>handleOrderButtons(-1)}
        >
          ^
        </button>
        <button 
          className='downButton'
          onClick={()=>handleOrderButtons(1)}
        >
          v
        </button>
        <button 
          className='deleteButton'
          onClick={()=>handleDeleteButton(i)}
        >
          Borrar
        </button>
      </li>
  )

  return (
    <ul>{tasks}</ul>
  )
}

export default TasksList