import React from "react";


export const Panel = (props) => {
    return(
        <div>
            <img src={props.url}/>
            <h4>{props.desc}</h4>
            <p>Support Level: {props.support}</p>
        </div>
    );
}