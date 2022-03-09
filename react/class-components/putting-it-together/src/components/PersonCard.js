import React, {Component} from "react";

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            readyToAge: "yes"
        }
    }

    addAge = (e) => {
        if (this.state.readyToAge === "yes"){
            this.setState({readyToAge: this.props.person.age += 1});
        } else {
            this.setState({readyToAge: "no"});
        }
        
    }

    render() {
        const {...person} = this.props.person
        // const {firstName, lastName, age, hairColor} = this.props
        return (
            <div className="App">
                <h1>{person.lastName}, {person.firstName}</h1>
                <p>Age: {person.age}</p>
                <p>Hair Color: {person.hairColor}</p>
                <button onClick={ this.addAge }>Birthday Button for {person.firstName} {person.lastName}</button>
            </div>
            // <div>
            //     <h1>{lastName}, {firstName}</h1>
            //     <p>Age: {age}</p>
            //     <p>Hair Color: {hairColor}</p>
            // </div>
        );
    }
}

export default PersonCard;