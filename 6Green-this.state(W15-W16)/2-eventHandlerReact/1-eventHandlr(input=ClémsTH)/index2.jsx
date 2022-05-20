// not related
// Look at the code below; 
// how can the method validateText() access the current value of the <input /> element?
// => refer to "THIS.STATE.VALUE"
// "onChange" tracks when a user types into <input />

import React from "react";

class TextInput extends React.Component {
 constructor() {
  super();
  this.state = { value:"" }
 }

 updateText = (e) => {
  this.setState({
   value:e.target.value
  });
 }

 // "this.state.value"
 validateText = () => {}

 render() {
  return (
   <input 
    type="text"
    value={this.state.value}
    onChange={this.updateText}
   />
  );
 }

}