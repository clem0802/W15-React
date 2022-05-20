import React from "react";

// Make sure the Todo component renders a <div> 
// with a title property inside the <h3> header.
// <h3>{props.title}</h3>
export const Todo = (props) => {
    return(
        <div>
            <h3>{props.title}</h3>
            <p>This is some generic description text</p>
            <p className="todo_item">&gt; {props.title}</p>;
        </div>
    )
}