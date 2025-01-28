import { useState, createContext } from 'react'
import './App.css'
import NewTask from './components/NewTask'
import TasksList from './components/TasksList';

export const TaskContext = createContext();

function App() {
  const [task, setTask] = useState([]);
  console.log(task);
  return (
    <>
      <h1>To do list</h1>
      <TaskContext.Provider value={{ task, setTask }}>
        <NewTask />
        <TasksList />
      </TaskContext.Provider>
    </>
  )
}

export default App
