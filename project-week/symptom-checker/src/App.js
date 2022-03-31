import React, {createContext, useState} from "react";
import axios from "axios";
import FirstSearch from "./components/FirstSearch";

import SymptomData from "./Data.json"

// export const MyContext = createContext()

function App() {
  // const [aState, setAState] = useState(true)
  
  // function toggleAState() {
  //   setAState(!aState)
  // }

  return (
    <div className="container w-50 shadow p-3 my-5 bg-body rounded text-center">
      <h1>Symptom Checker</h1>
      <FirstSearch data={SymptomData}/>
    </div>
  );
}

export default App;
