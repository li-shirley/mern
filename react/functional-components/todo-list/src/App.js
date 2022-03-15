import './App.css';
import React, {useState} from 'react'
import TodoDisplay from './components/TodoDisplay';
import TodoForm from './components/TodoForm';
// import TodoWithReducer from './components/TodoWithReducer';

function App() {
  const [tasks, setTasks] = useState([]);

  const handleNewTask = (newTask) => {
    setTasks([...tasks, newTask]);
  }
  const handleUpdateTasks= (allTasks) => {
    setTasks(allTasks)
  }
  return (
    <div style={{padding: "20px"}}>
      {/* <TodoWithReducer /> */}
      <TodoForm onNewTask={handleNewTask} />
      <TodoDisplay tasks={tasks} handleUpdateTasks={handleUpdateTasks}/>
    </div>
  );
}

export default App;
