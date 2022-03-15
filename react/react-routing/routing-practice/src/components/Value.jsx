import React from 'react';
import {useParams} from 'react-router';

const Value = (props) => {
    const {value, textColor, bgColor} = useParams();

    const styling = {
        color: textColor,
        backgroundColor: bgColor
    }
    return (
        isNaN(+value)?
            <h1 style={styling}>The word is: {value}</h1> :
            <h1 style={styling}>The number is: {value}</h1>
    )
}

export default Value