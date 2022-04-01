import React, { useContext } from 'react'
import { MyContext } from '../App';
import { RiHospitalLine } from "react-icons/ri";
import { useHistory } from 'react-router-dom';

const Results = () => {
    const { results } = useContext(MyContext)
    const history=useHistory()
    return (
        <div>
            <h3>Most Likely Condition:</h3>
            <RiHospitalLine size="2em"/>
            <h4 className="mt-3 text-info">{results.name} </h4>
            <h5 className="mt-3">({results.common_name}) </h5>
            <p>Recommendation: {results.extras.hint}</p>
            <button className="btn btn btn-primary mt-3" onClick={ (e) => history.push("/symptom-check")}>Recheck Symptoms</button>
        </div>
    )
}

export default Results