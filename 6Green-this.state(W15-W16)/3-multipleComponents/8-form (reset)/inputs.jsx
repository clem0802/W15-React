import React from "react";

export const FormButton = (props) => {
 return (
    <button onClick={props.handler}>
    {props.val}
    </button>
 );
}

export const FormInput = (props) => {
 return (
  <input 
   type="text"
   placeholder={}
   value={props.val}
   onChange={props.handler}
  />
 );
}