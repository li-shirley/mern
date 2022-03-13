import React, {useState, useReducer} from 'react'

const initialState = [
    {id: 1, label: "Tab 1", content: "Tab 1 content is showing here", activated: false},
    {id: 2, label: "Tab 2", content: "Tab 2 content is showing here", activated: false},
    {id: 3, label: "Tab 3", content: "Tab 3 content is showing here", activated: false},
]

function reducer(tabs, action) {
    switch(action.type) {
        case "toggle-tab":
            return tabs.map(tab => {
                if (tab.id === action.payload.id) {
                    return {...tab, activated: !tab.activated }
                }
                    return {...tab, activated: false}
            })
    }
}

const Tabs = (props) => {
    const [tabs, dispatch] = useReducer(reducer, initialState)

    return (
        <div style={{padding: "10px"}}>
            {tabs.map((tab) => {
                return (
                    <button key = {tab.id} className="btn" style={{backgroundColor: tab.activated ? "black" : "pink", color: tab.activated ? "pink" : "black", border:"1px solid black", margin:"5px"}} onClick={() => dispatch({type: "toggle-tab", payload: {id: tab.id}})}> 
                        {tab.label}
                    </button>
                )
            })}
            {tabs.map((tab) => {
                if (tab.activated){
                    return <div key={tab.id} className="mx-auto" style={{border: "1px solid black", marginTop: "20px", width:"30%"}}>
                                <p>{tab.content}</p>
                            </div>
                }
            })}

        </div>
    )
}
export default Tabs