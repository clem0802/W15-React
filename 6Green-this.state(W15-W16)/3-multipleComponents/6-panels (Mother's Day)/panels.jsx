import React from "react";

// Inside of the Panel component, make sure that "props.url", "props.desc" and "props.price" values 
// are added properly to the JSX elements in Panel

export const Panel = (props) => {
    return(
        <div>
            <img src={props.url}/>
            <h4>{props.desc}</h4>
            <p>Price: {props.price}</p>
        </div>
    );
}