import React, { createContext, useState, useCallback } from "react";
import axios from "axios";
import './App.css'
// import FirstSearch from "./components/_FirstSearch";

import SymptomData from "./Data.json"
import SearchBar from "./components/SearchBar";
import SexInput from "./components/SexInput";
import AgeInput from "./components/AgeInput";
import Question from "./components/Question";
import Results from "./components/Results";

export const MyContext = createContext()

function App() {
  const [age, setAge] = useState("")
  const [ageErr, setAgeErr] = useState(true)
  const [viewAgeInput, setViewAgeInput] = useState(true)

  const [sex, setSex] = useState("male")
  const [viewSexInput, setViewSexInput] = useState(false)

  const [tags, setTags] = useState([])
  // const [suggestions, setSuggestions] = useState([])
  const [suggestions, setSuggestions] = useState(SymptomData) //7 for testing and conserving API calls 
  const [viewSymptomInput, setViewSymptomInput] = useState(false) //8

  const [evidence, setEvidence] = useState([])

  const [question, setQuestion] = useState({})
  const [present, setPresent] = useState("present")
  const [viewQuestionInput, setViewQuestionInput] = useState(false)

  const [broadConditions, setBroadConditions] = useState([])

  const [shouldStop, setShouldStop] = useState(false)
  const [results, setResults] = useState({})


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

  const onDelete = useCallback((tagIdx) => {
    setTags(tags.filter((_, i) => i !== tagIdx))
  }, [tags])

  const onAddition = useCallback((newTag) => {
    setTags([...tags, newTag])
    setEvidence([...evidence, { "id": newTag.id, "choice_id": "present", "source": "initial" }])
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
        console.log(res.data.question)
        setQuestion(res.data.question)
        setViewSymptomInput(false);
        setViewQuestionInput(true);
      })
      .catch(err => console.log(err.response))
  }

  function handleQuestionSubmit(e) {
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
      "evidence": e,
      "extras": { "disable_groups": true }
    }, { headers: header })
      .then(res => {
        console.log(res.data)
        if (res.data.should_stop === true) {
          getCondition(res.data.conditions[0].id)
        }
        else {
          setQuestion(res.data.question)
          setBroadConditions(res.data.conditions)
        }
      })
      .catch(err => console.log(err.response))
  }

  function getCondition(id) {
    const header = {
      "Content-Type": "application/json",
      "App-Key": process.env.REACT_APP_API_KEY,
      "App-Id": process.env.REACT_APP_API_ID
    }
    axios.get(`https://api.infermedica.com/v3/conditions/${id}?age.value=${age}`, {
      headers: header
    })
      .then(res => {
        console.log(res.data)
        setResults(res.data)
        setViewQuestionInput(false)
        setShouldStop(true)
      })
      .catch(err => console.log(err.response))
      
  }

  return (
    <MyContext.Provider
      value={{ age, setAge, ageErr, setAgeErr, viewAgeInput, setViewAgeInput, sex, setSex, viewSexInput, setViewSexInput, tags, setTags, suggestions, setSuggestions, viewSymptomInput, setViewSymptomInput, evidence, setEvidence, handleAge, onDelete, onAddition, question, present, setPresent, setViewQuestionInput, setViewSymptomInput, results, broadConditions }}>

      <div className="container w-50 shadow p-3 my-5 bg-body rounded text-center">
        <h1>Symptom Checker</h1>
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
        {
          viewQuestionInput &&
          <Question handleQuestionSubmit={handleQuestionSubmit} />
        }
        {
          shouldStop &&
          <Results />
        }
      </div>
    </MyContext.Provider >

  );
}

export default App;
