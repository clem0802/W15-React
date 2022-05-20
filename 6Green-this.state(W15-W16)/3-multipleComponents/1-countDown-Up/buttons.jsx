import React from "react";

export const CustomButton = (props) => {
    return(
        <button onClick={props.handleClick}>
            {props.text}
        </button>
    );
}