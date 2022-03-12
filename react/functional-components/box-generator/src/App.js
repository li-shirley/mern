import React, { useState } from 'react';
import BoxForm from './Components/BoxForm';
import BoxDisplay from './Components/BoxDisplay';

function App() {
  const [currentBox, setCurrentBox] = useState("");

  const[allBoxes, setAllBoxes] = useState([]);

  const handleNewBox = (newBox) => {
    setCurrentBox(newBox);
    setAllBoxes([...allBoxes, newBox]);
  }

  return (
    <div>
      <BoxForm onNewBox={ handleNewBox }/>
      <BoxDisplay box={currentBox} boxes={allBoxes}/>
    </div>
  );
}

export default App;

