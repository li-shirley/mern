import React from 'react'

const TodoDisplay = (props) => {
    const updatedTasks = [...props.tasks]

    const setCompleted = (i, newVal) => {
        updatedTasks[i].completed = newVal;
        props.handleUpdateTasks(updatedTasks)
    }

    const handleDelete = (deleteIndex) => {
        const filteredTasks = props.tasks.filter((task, i) => i !== deleteIndex);
        props.handleUpdateTasks(filteredTasks)
    }
    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Priority</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.tasks.map((task, i) => {
                            return (
                                <tr key={i}>
                                    <td style={{ textDecoration: task.completed ? "line-through" : ""}}>{task.name}</td>
                                    <td>{task.priority}</td>
                                    <td>
                                        <input type="checkbox" name="completed" checked={task.completed} onChange={(e)=>setCompleted(i, e.target.checked)}/>
                                        <button className="btn-sm btn-secondary, mx-1" onClick={ () => handleDelete(i)}>
                                            <span>Delete</span>
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TodoDisplay