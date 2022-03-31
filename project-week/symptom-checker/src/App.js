import React, { createContext, useState, useCallback } from "react";
import axios from "axios";
// import FirstSearch from "./components/_FirstSearch";

import SymptomData from "./Data.json"
import SearchBar from "./components/SearchBar";
import SexInput from "./components/SexInput";
import AgeInput from "./components/AgeInput";

export const MyContext = createContext()

function App() {
  const [age, setAge] = useState("")
  const [ageErr, setAgeErr] = useState(true)
  const [viewAgeInput, setViewAgeInput] = useState(true)

  const [sex, setSex] = useState("male")
  const [viewSexInput, setViewSexInput] = useState(false)

  const [tags, setTags] = useState([]) //single selected symptom
  // const [suggestions, setSuggestions] = useState([]) //symptoms list according to age
  const [suggestions, setSuggestions] = useState(SymptomData) // for testing and conserving API calls
  const [viewSymptomInput, setViewSymptomInput] = useState(false)

  const [evidence, setEvidence] = useState([])

  const handleAge = (e) => {
    setAge(e.target.value)
    if (e.target.value <= 0) {
      setAgeErr("Age is required.")
    }
    else if (e.target.value > 119) {
      setAgeErr("Age inputted exceeds the age of oldest person currently alive.")
    }
    else setAgeErr("")
  }

  // function getSymptoms() {
  //   const header = {
  //     "App-Key": process.env.REACT_APP_API_KEY,
  //     "App-Id": process.env.REACT_APP_API_ID
  //   };
  //   axios.get(`https://api.infermedica.com/v3/symptoms?age.value=${age}`, { headers: header })
  //     .then(res => {
  //       console.log(res.data)
  //       setSuggestions(res.data)
  //     })
  //     .catch(err => console.log(err))
  // }

  // searchbar functions
  const onDelete = useCallback((tagIdx) => {
    setTags(tags.filter((_, i) => i !== tagIdx))
  }, [tags])

  const onAddition = useCallback((newTag) => {
    setTags([...tags, newTag])
    setEvidence([...evidence, { "id": newTag.id, "choice_id": "present" }])
  }, [tags])

  function handleFirstSubmit(age, sex, evidence) {
    const header = {
      "Content-Type": "application/json",
      "App-Key": process.env.REACT_APP_API_KEY,
      "App-Id": process.env.REACT_APP_API_ID
    }
    axios.post('https://api.infermedica.com/v3/diagnosis', {
      "age": {
        "value": age
      },
      "sex": sex,
      "evidence": evidence,
      "extras": { "disable_groups": true }
    }, { headers: header })
      .then(res => {
        console.log(res.data)
      })
      .catch(err => console.log(err))
  }

  return (
    <MyContext.Provider
      value={{ age, setAge, ageErr, setAgeErr, viewAgeInput, setViewAgeInput, sex, setSex, viewSexInput, setViewSexInput, tags, setTags, suggestions, setSuggestions, viewSymptomInput, setViewSymptomInput, evidence, setEvidence, handleAge, onDelete, onAddition }}>

      <div className="container w-50 shadow p-3 my-5 bg-body rounded text-center">
        <h1>Symptom Checker</h1>
        {/* <FirstSearch data={SymptomData} handleFirstSubmit={handleFirstSubmit} /> */}
        {
          viewAgeInput &&
          <AgeInput />
        }
        {
          viewSexInput &&
          <SexInput />
        }
        {
          viewSymptomInput &&
          <SearchBar handleFirstSubmit={handleFirstSubmit} />
        }
      </div>
    </MyContext.Provider >

  );
}

export default App;
