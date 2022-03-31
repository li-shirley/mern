import React, {useContext} from 'react'
import { MyContext } from '../App';

const SexInput = () => {
    const {sex, setSex, setViewSexInput, setViewAgeInput, setViewSymptomInput} = useContext(MyContext)
    return (
        <div>
            <label className="form-label">Sex:</label>
            <select className="form-select" name="sex" onChange={(e) => setSex(e.target.value)} value={sex}>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <button className="btn btn btn-secondary me-3 mt-3" onClick={(e) => { setViewSexInput(false); setViewAgeInput(true); }}>Back</button>
            <button className="btn btn btn-primary mt-3" onClick={(e) => { setViewSymptomInput(true); setViewSexInput(false) }}>Next</button>
        </div>
    )
}

export default SexInput