import React, { Component } from 'react'

const divStyle = {
    backgroundColor: '#6aa84f',
    height: '100px',
    border: '2px black solid',
}

export class Header extends Component {
    render() {
        return (
            <div style={divStyle}>Header</div>
        )
    }
}

export default Header