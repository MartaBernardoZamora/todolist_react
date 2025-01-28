import React, { useState, useContext } from 'react';
import { TaskContext } from '../App'

function TasksList() {
    const { task, setTask } = useContext(TaskContext);
  return (
    <div>{task}</div>
  )
}

export default TasksList