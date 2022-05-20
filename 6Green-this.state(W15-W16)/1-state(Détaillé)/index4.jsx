// Which function is called when the button in the browser is clicked?
// this.handleClick
import React from "react";

class Counter extends React.Component {
 constructor(props) {
  super(props);
  this.state = {count:1}
 }

 handleClick = () => {
  this.setState({
   count: this.state.count + 1
  });
 }

 render() {
  return (
   <div>
    <h4>The Unreliable Clicker</h4>
    <button onClick={this.handleClick}>Click me!</button>
    <p>I've been clicked {this.state.count} times.</p>
   </div>
  )
}