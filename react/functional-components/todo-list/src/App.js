import './App.css';
import React, {useState} from 'react'
import TodoDisplay from './components/TodoDisplay';
import TodoForm from './components/TodoForm';
import TodoWithReducer from './components/TodoWithReducer';

function App() {
  const [tasks, setTasks] = useState([]);

  const handleNewTask = (newTask) => {
    setTasks([...tasks, newTask]);
  }
  const handleUpdateTasks= (allTasks) => {
    setTasks(allTasks)
  }
  return (
    <div>
      <TodoWithReducer />
      <div className="container w-50 shadow p-3 mb-5 bg-body rounded">
        <TodoForm onNewTask={handleNewTask} />
        <TodoDisplay tasks={tasks} handleUpdateTasks={handleUpdateTasks}/>
      </div>
    </div>
  );
}

export default App;
