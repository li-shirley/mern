import React, { useContext } from 'react'
import { MyContext } from '../App';

const Results = () => {
    const { results } = useContext(MyContext)

    return (
        <div>
            <h1>Most Likely Condition:</h1>
            <h3>{results.name} </h3>
            <p>Recommendation: {results.extras.hint}</p>
        </div>
    )
}

export default Results