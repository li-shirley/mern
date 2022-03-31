import React, { useContext } from 'react'
import { MyContext } from '../App';

const Question = (props) => {
    const { question, present, setPresent, setViewQuestionInput, setViewSymptomInput, age, sex, evidence, setEvidence } = useContext(MyContext)

    function handleQuestion () {
        setEvidence([...evidence, { "id": question.items[0]["id"], "choice_id": present}])
        props.handleQuestionSubmit(present, age, sex, evidence);
    }
    return (
        <div>
            <label className="form-label">{question.text}</label>
            <select className="form-select" name="present" onChange={(e) => setPresent(e.target.value)} value={present}>
                <option value="present">Yes</option>
                <option value="absent">No</option>
                <option value="unknown">Don't know</option>
            </select>
            {/* <button className="btn btn btn-secondary me-3 mt-3" onClick={(e) => { setViewQuestionInput(false); setViewSymptomInput(true); }}>Back</button> */}
            <button className="btn btn btn-primary mt-3" onClick={handleQuestion}>Next</button>
        </div>
    )
}

export default Question