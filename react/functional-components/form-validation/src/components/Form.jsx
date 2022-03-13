import React, {useState, useReducer} from 'react'

const initialState = {
    firstName: {
        value: '',
        error: null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    },
};

function reducer(state, action) {
    switch (action.type) {
        case 'update-form': 
            const {name, value, error} = action.payload
            return {
                ...state,
                [name]: {
                    ...state[name],
                    value,
                    error
                }
            }
        default:
            return state;
    }
}

const handleChange = (name, value, dispatch, state) => {
    const {error} = validateInput(name, value)
    dispatch ({
        type: "update-form",
        payload: {
            name,
            value,
            error
        }
    })
}

const validateInput = (name, value) => {
    let error = ""
    switch (name) {
        case "firstName":
            if (value.length < 1){
                error = "First Name is required"
            }
            else if (value.length < 3 && value.length > 0) {
                error = "First Name must be at least 3 characters"
            }
            break;
        case "lastName":
            if (value.length < 1){
                error = "Last Name is required"
            }
            else if (value.length < 3 && value.length > 0) {
                error = "Last Name must be at least 3 characters"
            }
            break;
        case "email":
            if (value.length < 1){
                error = "Email is required"
            }
            else if (!/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(value)) {
                error = "Invalid email format"
            }
            break;
        default:
            break;

    }
    return {error};
}

const Form = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <form>
                <label>First Name: </label>
                <input type="text" name="firstName" onChange={(e) => handleChange("firstName", e.target.value, dispatch, state)} value={state.firstName.value}></input>
                <p style={{color: "red"}}>{state.firstName.error}</p>

                <label>Last Name: </label>
                <input type="text" name="lastName" onChange={(e) => handleChange("lastName", e.target.value, dispatch, state)} value={state.lastName.value}></input>
                <p style={{color: "red"}}>{state.lastName.error}</p>

                <label>Email: </label>
                <input type="text" name="email" onChange={(e) => handleChange("email", e.target.value, dispatch, state)} value={state.email.value}></input>
                <p style={{color: "red"}}>{state.email.error}</p>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form