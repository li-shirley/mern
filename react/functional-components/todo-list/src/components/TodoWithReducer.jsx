import React, { useState, useReducer } from 'react'

const initialState = []

const ACTIONS = {
    ADD_TASK: "add-task",
    TOGGLE_TASK: "toggle-task",
    DELETE_TASK: "delete-task"
}

function reducer(tasks, action) {
    switch (action.type) {
        case ACTIONS.ADD_TASK:
            return [...tasks, newTask(action.payload.taskName)];
        case ACTIONS.TOGGLE_TASK:
            return tasks.map(task => {
                if (task.id === action.payload.id) {
                    return {...task, completed: !task.completed}
                }
                return task;
            })
        case ACTIONS.DELETE_TASK:
            return tasks.filter(task => task.id !== action.payload.id);
        default:
            return tasks;
    }
}

function newTask(taskName) {
    return {id: Date.now(), taskName: taskName, completed: false}
}

const TodoForm = () => {
    const [tasks, dispatch] = useReducer(reducer, initialState);
    const [taskName, setTaskName] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        dispatch({ type: ACTIONS.ADD_TASK, payload: {taskName: taskName} })
        setTaskName('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Add to Todo List:</h3>
                <input type="text" name="taskName" placeholder="Enter task" onChange={(e) => setTaskName(e.target.value)} value={taskName}>
                </input>
                <button>Submit</button>
            </form>

            <div>
                {tasks.map(task => {
                    return (
                        <ul key = {task.id}>
                            <li style={{ color: task.completed ? "lightgrey" : "black"}}>
                                {task.taskName}
                                <button onClick={() => dispatch({type: ACTIONS.TOGGLE_TASK, payload:{id: task.id}})}>
                                    ✓
                                </button>
                                <button onClick={() => dispatch({type: ACTIONS.DELETE_TASK, payload:{id: task.id}})}>
                                    Delete
                                </button>
                            </li>
                        </ul>
                    )
                })}
        </div>
        </div>
    )
}

export default TodoForm