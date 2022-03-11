import React, { useState } from 'react'

const Form2 = (props) => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [userError, setUserError] = useState({
        firstNameError: true,
        lastNameError: true,
        emailError: true,
        passwordError: true,
        confirmPasswordError: true,
    });


    const handleValidations = (e) => {
        const {name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })

        (name === "firstName" && value.length > 2) &&
        setUserError({ ...userError, firstName: false });

        (name === "lastName" && value.length > 2) &&
            setUserError({ ...userError, lastName: false });

        (name === "email" && value.length > 5) &&
            setUserError({ ...userError, email: false });

        (name === "password" && value.length > 8) &&
            setUserError({ ...userError, password: false });

        (name === "confirmPassword" && value === user.password) &&
            setUserError({ ...userError, confirmPassword: false });
    }

    return (
        <div>
            <form>
                <div>
                    <label>First Name: </label>
                    <input type="text" name="firstName" onChange={handleValidations} />
                    {
                        !userError.firstNameError &&
                        <p style={{ color: 'red' }}>First Name must be at least 2 characters. </p>
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" name="lastName" onChange={handleValidations} />
                    {
                        userError.lastNameError &&
                        <p style={{ color: 'red' }}>Last Name must be at least 2 characters.</p>
                    }
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" name="email" onChange={handleValidations} />
                    {
                        userError.emailError &&
                        <p style={{ color: 'red' }}>Email must be at least 5 characters</p>
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" name="password" onChange={handleValidations} />
                    {
                        userError.passwordError &&
                        <p style={{ color: 'red' }}>Password must be at least 8 characters.</p>
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" name="confirmPassword" onChange={handleValidations} />
                    {
                        userError.confirmPasswordError &&
                        <p style={{ color: 'red' }}>Must match password</p>
                    }
                </div>
                {/* <input type="submit" value="Create User" /> */}
            </form>
            <div>
                <h3>Your Form Data</h3>
                <p>First Name: {user.firstName}</p>
                <p>Last Name: {user.lastName}</p>
                <p>Email: {user.email}</p>
                <p>Password: {user.password}</p>
                <p>Confirm Password: {user.confirmPassword}</p>
            </div>
        </div>
    )
}

export default Form2