import React, { Component } from 'react'

const divStyle = {
    backgroundColor: '#ffd966',
    border: '2px black solid',
    display: 'inline-block',
    height: '265px',
    width: '160px',
    margin: '10px 0px 10px 10px'
}

export class Subcontents extends Component {
    render() {
        return (
            <div style={divStyle}>Subcontents</div>
        )
    }
}

export default Subcontents