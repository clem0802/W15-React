import React from "react";
import ReactDOM from "react-dom";

import {
 FormButton,
 FormInput
} from "./inputs";

class App extends React.Component {
 constructor() {
  super();
  this.state = { 
      text:"", 
      email:""
    }
 }

 handleText = (event) => {
  this.setState({
   text: event.target.value
  });
 }
 handleEmail = (event) => {
     this.setState({
         email:event.target.value
     })
 }
 resetInput = () => {
  this.setState({
   text: "",
   email: ""
  })
 }


 render() {
  return (
   <div>
    <h1>Login Form</h1>
        <FormInput 
        val={this.state.text}
        handler={this.handleText}
        placeholder="Your name"
        />
        <FormInput     
        val={this.state.email}
        handler={this.handleEmail}
        placeholder="Your email"
        />
        <FormButton 
        val="Reset"
        handler={this.resetInput}
        />
   </div>
  );
 }
}

ReactDOM.render(
 <App />,
 document.getElementById("root")
);