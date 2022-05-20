
import React from "react";

// We need to Export components before we can Import them
// Exported components can be Imported "as often as needed"
// {props.text} will be printed inside the button when rendered

export const MyButton = (props) => {
    return(
        <button onClick={props.clickFunction}>
            {props.text}
        </button>
    );
}