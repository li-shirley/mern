import React, {useState} from 'react'

const BoxForm = (props) => {
    const [boxSize, setBoxSize] = useState("");
    const [boxColor, setBoxColor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewBox({color: boxColor, size: boxSize});
        setBoxColor("");
        setBoxSize("");
    }
    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Create a Box!</h3>
                <input type="text" name="boxColor" placeholder="Enter color" onChange={ (e) => setBoxColor(e.target.value)} value={boxColor}>
                </input>
                <input type="number" name="boxSize" placeholder="Enter size (px)" onChange={ (e) => setBoxSize(e.target.value)} value={boxSize}>
                </input>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default BoxForm;