import React from "react";

export const PicWithCaption = (props) => {
 return (
  <div>
   <img src={props.img} alt={props.text} />
   <p>{props.text}</p>
  </div>
 );
}