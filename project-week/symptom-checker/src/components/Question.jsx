import React, { useContext } from 'react'
import { MyContext } from '../App';

const Question = (props) => {
    const { question, present, setPresent, setViewQuestionInput, setViewSymptomInput, age, sex, evidence, setEvidence, broadConditions } = useContext(MyContext)

    function handleQuestion () {
        props.handleQuestionSubmit([...evidence, { "id": question.items[0]["id"], "choice_id": present}]);
        setEvidence([...evidence, { "id": question.items[0]["id"], "choice_id": present}])
    }
    return (
        <div>
            <label className="form-label">{question.text}</label>
            <select className="form-select text-center" name="present" onChange={(e) => setPresent(e.target.value)} value={present}>
                <option value="present">Yes</option>
                <option value="absent">No</option>
                <option value="unknown">Don't know</option>
            </select>
            {/* <button className="btn btn btn-secondary me-3 mt-3" onClick={(e) => { setViewQuestionInput(false); setViewSymptomInput(true); }}>Back</button> */}
            <button className="btn btn btn-primary mt-3" onClick={handleQuestion}>Next</button>
            <div>
                <h5>Probable Conditions: </h5>
                {
                    broadConditions &&
                    broadConditions.map((condition, i) => (
                        
                        <div key={i}>
                            <p>{condition.name}</p>
                            <p>Probability: {condition.probability}%</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Question