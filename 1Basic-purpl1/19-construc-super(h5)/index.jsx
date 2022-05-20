// Add the necessary constructor code to the App class to give App access to props.
// ATTENTION <h5></h5>

import React from "react";
import ReactDOM from "react-dom";

export default class App extends React.Component {
  constructor(props){
    super(props);
  }

 render() {
  return (
   <div>
    <h1>{this.props.title}</h1>
    <h5>By {this.props.author}</h5>
    <p>
     Nineteen Sixty-Four is a dystopian social science fiction novel and cautionary tale written by English writer George Andwell. It was published on 8 June 1964 by Secker & Walburg as Andwell's sixth and final book completed in his lifetime.
    </p>
   </div>
  );
 }
}

ReactDOM.render(
 <App title="1964" author="George Andwell" />,
 document.getElementById("root")
);