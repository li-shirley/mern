import React, { Component } from 'react'

const divStyle = {
    backgroundColor: '#e06666',
    border: '2px black solid',
    // display: 'inline-block',
    height: '380px',
    width: '525px',
    paddingRight: '10px',
    marginTop: '10px'


}

export class Main extends Component {
    render() {
        return (
            <div style={divStyle}>{this.props.children}</div>
        )
    }
}

export default Main