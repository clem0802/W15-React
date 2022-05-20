// /*------------------------------------*/ INDEX.HTML
// <!doctype html>
// <html>
//  <head>
//   <link rel="stylesheet" href="./index.css" />
//   <script type="module" src="./index.js"></script>
//  </head>
//  <body>
  
//   <div id="root"></div>

//  </body>
// </html>

// /*------------------------------------*/ INDEX.JSX
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
 constructor() {
  super();
  this.state = { 
   email: ""
  }
 }
 
 handleEmailInput = (e) => {
  this.setState({
   email: e.target.value
  });
 }

 render() {
  return (
   <div>

    <p>Please input your email below</p>

    <input 
     type="email"
     value={this.state.email}
     onChange={this.handleEmailInput}
    />

    <h5>Your email is: <u>{this.state.email}</u></h5>

   </div>
  );
 }
}

ReactDOM.render(
 <App />,
 document.getElementById("root")
);
