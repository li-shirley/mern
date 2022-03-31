import React, {useContext} from 'react'
import { MyContext } from '../App';

const AgeInput = () => {
    const {age, ageErr, setViewAgeInput, setViewSexInput, handleAge} = useContext(MyContext)
    return (
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
    )
}

export default AgeInput