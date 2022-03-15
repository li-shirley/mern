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
        if (!taskName.trim().length){
            return; //prevents submission of empty input or string of spaces
        }
        dispatch({ type: ACTIONS.ADD_TASK, payload: {taskName: taskName} })
        setTaskName('')
    }

    return (
        <div className="container w-50 shadow p-3 mb-5 bg-body rounded mt-5">
            <form onSubmit={handleSubmit}>
                <h3>Add to Todo List:</h3>
                <input className="form-control my-1" type="text" name="taskName" placeholder="Enter task" onChange={(e) => setTaskName(e.target.value)} value={taskName}>
                </input>
                <button className="btn btn-primary my-2">Submit</button>
            </form>

            <div >
                {tasks.map(task => {
                    return (
                        <ul className="list-group my-2" key = {task.id}>
                            <li className="list-group-item" style={{ color: task.completed ? "lightgrey" : "black"}}>
                                    <span className="mx-1">{task.taskName}</span>
                                <button className="btn-sm btn-secondary, mx-2" onClick={() => dispatch({type: ACTIONS.TOGGLE_TASK, payload:{id: task.id}})}>
                                    <span>✓</span>
                                </button>
                                <button className="btn-sm btn-secondary, mx-1" onClick={() => dispatch({type: ACTIONS.DELETE_TASK, payload:{id: task.id}})}>
                                    <span>Delete</span>
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