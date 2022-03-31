import React, { useState, useCallback, useRef } from 'react'
import ReactTags from 'react-tag-autocomplete'
import '../App.css'
import axios from 'axios'


const FirstSearch = (props) => {

    const { data } = props

    const [age, setAge] = useState("")
    const [ageErr, setAgeErr] = useState(true)
    const [viewAgeInput, setViewAgeInput] = useState(true)

    const [sex, setSex] = useState("male")
    const [viewSexInput, setViewSexInput] = useState(false)

    const [tags, setTags] = useState([]) //single selected symptom
    // const [suggestions, setSuggestions] = useState([]) //symptoms list according to age
    const [suggestions, setSuggestions] = useState(data) // for testing and conserving API calls
    const reactTags = useRef()
    const [viewSymptomInput, setViewSymptomInput] = useState(false)

    const [evidence, setEvidence] = useState([])

    const handleAge = (e) => {
        setAge(e.target.value)
        if (e.target.value <= 0) {
            setAgeErr("Age is required.")
        }
        else if (e.target.value > 119) {
            setAgeErr("Age inputted exceeds the age of oldest person currently alive.")
        }
        else setAgeErr("")
    }

    // function getSymptoms(){
    //     const header = {
    //         "App-Key": process.env.REACT_APP_API_KEY,
    //         "App-Id": process.env.REACT_APP_API_ID
    //     };
    //     axios.get(`https://api.infermedica.com/v3/symptoms?age.value=${age}`, {headers:header})
    //         .then(res => {
    //             console.log(res.data)
    //             setSuggestions(res.data)
    //         })
    //         .catch(err => console.log(err))
    // }


    // searchbar functions
    const onDelete = useCallback((tagIdx) => {
        setTags(tags.filter((_, i) => i !== tagIdx))
    }, [tags])

    const onAddition = useCallback((newTag) => {
        setTags([...tags, newTag])
        setEvidence([...evidence, {"id": newTag.id, "choice_id": "present"}])
    }, [tags])

    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleFirstSubmit(age, sex, evidence)
    }

    return (
        <div>
            {
                viewAgeInput &&
                <div>
                    <label className="form-label">Age:</label>
                    {
                        ageErr &&
                        <p className="text-danger">{ageErr}</p>
                    }
                    <input className="form-control" type="number" name="age" onChange={handleAge} value={age} />
                    <button className="btn btn btn-primary mt-3" disabled={ageErr} onClick={(e) => {
                        setViewSexInput(true); 
                        setViewAgeInput(false); 
                        // getSymptoms();
                    }}>Next</button>

                </div>
            }
            {
                viewSexInput &&
                <div>
                    <label className="form-label">Sex:</label>
                    <select className="form-select" name="sex" onChange={(e) => setSex(e.target.value)} value={sex}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <button className="btn btn btn-secondary me-3 mt-3" onClick={(e) => {setViewSexInput(false); setViewAgeInput(true);}}>Back</button>
                    <button className="btn btn btn-primary mt-3" onClick={(e) => {setViewSymptomInput(true); setViewSexInput(false)}}>Next</button>
                </div>
            }
            {
                viewSymptomInput &&
                <div>
                    <ReactTags
                        ref={reactTags}
                        tags={tags}
                        suggestions={suggestions}
                        onDelete={onDelete}
                        onAddition={onAddition}
                        placeholderText="Search symptoms" />
                    <button className="btn btn btn-secondary me-3 mt-3" onClick={(e) => {setViewSexInput(true); setViewSymptomInput(false);}}>Back</button>
                    <button className="btn btn btn-primary mt-3" onClick={handleSubmit}>Next</button>
                </div>
            }
        </div>
    )
}

export default FirstSearch