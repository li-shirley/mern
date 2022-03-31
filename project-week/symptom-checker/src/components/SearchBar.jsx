import React, {useContext, useRef} from 'react'
import { MyContext } from '../App';
import ReactTags from 'react-tag-autocomplete'

const SearchBar = (props) => {
    const {age, sex, evidence, tags, suggestions, onDelete, onAddition, setViewSexInput, setViewSymptomInput} = useContext(MyContext)
    const reactTags = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleFirstSubmit(age, sex, evidence)
    }
    
    return (
        <div>
            <ReactTags
                ref={reactTags}
                tags={tags}
                suggestions={suggestions}
                onDelete={onDelete}
                onAddition={onAddition}
                placeholderText="Search symptoms" />
            <button className="btn btn btn-secondary me-3 mt-3" onClick={(e) => { setViewSexInput(true); setViewSymptomInput(false); }}>Back</button>
            <button className="btn btn btn-primary mt-3" onClick={handleSubmit}>Next</button>
        </div>
    )
}

export default SearchBar