// Observe the code and the ReactDOM.render() call. 
// Notice that <PurchaseButton> has two attributes: message and buttonText.

// Modify the PurchaseButton component to properly render message inside the <h4> header.
// => <h4>{props.message}</h4>
// Modify PurchaseButton to also properly render buttonText inside the <button> element.
// => <button>{props.buttonText}</button>


import React from "react";
import ReactDOM from "react-dom";

export const PurchaseButton = (props) => {
 return (
  <div>
    <h4>{props.message}</h4>
    <button>{props.buttonText}</button>
  </div>
 );
}

ReactDOM.render(
 <PurchaseButton 
 message="Coat: $52.30" 
 buttonText="Purchase Coat" 
 />,
 document.getElementById("root")
);