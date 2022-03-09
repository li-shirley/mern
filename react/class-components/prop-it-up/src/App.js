import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  const jane = {firstName: "Jane", lastName: "Doe", age: 45, hairColor: "Black"}
  const john = {firstName: "John", lastName: "Smith", age: 88, hairColor: "Brown"}
  const millard = {firstName: "Millard", lastName: "Fillmore", age: 50, hairColor: "Brown"}
  const maria = {firstName: "Maria", lastName: "Smith", age: 62, hairColor: "Brown"}
  return (
    <div>
      <PersonCard person={jane}/>
      <PersonCard person={john}/>
      <PersonCard person={millard}/>
      <PersonCard person={maria}/>
    </div>
    // <div>
    //   <PersonCard firstName="Jane" lastName="Doe" age={45} hairColor="Black" />
    //   <PersonCard firstName="John" lastName="Smith" age={88} hairColor="Brown" />
    //   <PersonCard firstName="Millard" lastName="Fillmore" age={50} hairColor="Brown" />
    //   <PersonCard firstName="Maria" lastName="Smith" age={62} hairColor="Brown" />
    // </div>
  );
}

export default App;
