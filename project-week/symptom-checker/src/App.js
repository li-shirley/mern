import React, { createContext, useState, useCallback } from "react";
import axios from "axios";
import './App.css'
// import FirstSearch from "./components/_FirstSearch";

import SymptomData from "./Data.json"
import SearchBar from "./components/SearchBar";
import SexInput from "./components/SexInput";
import AgeInput from "./components/AgeInput";
import Question from "./components/Question";

export const MyContext = createContext()

function App() {
  const [age, setAge] = useState("") //1
  const [ageErr, setAgeErr] = useState(true) //2
  const [viewAgeInput, setViewAgeInput] = useState(true) //3

  const [sex, setSex] = useState("male") //4
  const [viewSexInput, setViewSexInput] = useState(false) //5

  const [tags, setTags] = useState([]) //6
  // const [suggestions, setSuggestions] = useState([])
  const [suggestions, setSuggestions] = useState(SymptomData) //7 for testing and conserving API calls 
  const [viewSymptomInput, setViewSymptomInput] = useState(false) //8

  const [evidence, setEvidence] = useState([]) //9

  const [question, setQuestion] = useState({}) //10
  const [present, setPresent] = useState("present") //11
  const [viewQuestionInput, setViewQuestionInput] = useState(false) //12


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
      .catch(err => console.log(err))
  }

  function handleQuestionSubmit(age, sex, evidence) {
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
        setQuestion(res.data.question)
      })
      .catch(err => console.log(err))
  }


  return (
    <MyContext.Provider
      value={{ age, setAge, ageErr, setAgeErr, viewAgeInput, setViewAgeInput, sex, setSex, viewSexInput, setViewSexInput, tags, setTags, suggestions, setSuggestions, viewSymptomInput, setViewSymptomInput, evidence, setEvidence, handleAge, onDelete, onAddition, question, present, setPresent, setViewQuestionInput, setViewSymptomInput }}>

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
      </div>
    </MyContext.Provider >

  );
}

export default App;
