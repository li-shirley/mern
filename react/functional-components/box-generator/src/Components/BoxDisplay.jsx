import React from 'react';

const BoxDisplay = (props) => {
    return (
        <div>
            <h3>All the previous boxes:</h3>
            <div style={{display: "flex", flexWrap: "wrap"}}>
                
                {
                    props.boxes.map((box, i) => {
                        return (
                            <div key={i} style={{backgroundColor: box.color, height: box.size+"px", width: box.size+"px", border: "2px solid black", borderRadius: "5%"}} ></div>
                        )
                    })
                }
            </div>
        </div>
    )
}


export default BoxDisplay;