import React, {useState} from 'react'

const TodoForm = (props) => {
    const [name, setName] = useState("");
    const [priority, setPriority] = useState("1");
    const [completed, setCompleted] = useState(false);
    const [taskNameError, setTaskNameError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim().length){
            setTaskNameError("Task cannot be blank");
            return;
        }
        props.onNewTask({name, priority, completed});
        setName("")
        setTaskNameError("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Add to Todo List:</h3>

                <label className="form-label">Task</label>
                <input className="form-control my-1" type="text" name="name" placeholder="Enter task" onChange={(e) => setName(e.target.value)} value={name}>
                </input>
                {
                    taskNameError &&
                        <p className="text-danger">{taskNameError}</p>
                }

                <label className="form-label">Priority Level</label>
                <select className="form-select my-1" name="priority" onChange={(e) => setPriority(e.target.value)} value={priority}>
                    <option value="1">Level 1</option>
                    <option value="2">Level 2</option>
                    <option value="3">Level 3</option>
                </select>

                <button className="btn btn-primary my-2">Submit</button>
            </form>
        </div>
    )
}

export default TodoForm