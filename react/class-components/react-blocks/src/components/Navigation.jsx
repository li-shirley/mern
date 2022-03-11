import React, { Component } from 'react'

const divStyle = {
    backgroundColor: '#6fa8dc',
    border: '2px black solid',
    height: '300px',
    width: '150px',
    margin: '10px 10px 10px 0px'
}

export class Navigation extends Component {
    render() {
        return (
            <div style={divStyle}>Navigation</div>
        )
    }
}

export default Navigation