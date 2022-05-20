// not related
import React from "react";

class App extends React.Component {
 constructor() {
  super();
  this.state = { name:"" }
 }

 handleInput = (event) => {
  this.setState({
   name:event.target.value
  });
 }

 render() {
  return (
   <input
    name="name"
    value={this.state.name}
    onChange={this.handleInput}
   />
  );
 }
}