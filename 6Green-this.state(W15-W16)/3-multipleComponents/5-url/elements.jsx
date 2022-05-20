// How many components in total are there in this React application?
// (1 in "index.jsx] and [2 in elements.jsx]

import React from "react";

export const MyButton = (props) => {
    return(
        <button onClick={props.clickFunction}>
            {props.text}
        </button>
    )
}

export const MyUrl = (props) => {
    return(
        <a href={props.url}>
            {props.text}
        </a>
    )
}