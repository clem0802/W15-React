// /*----------------------------------------*/ INDEX.HTML
// <!doctype html>
// <html>
//  <head>
//   <link rel="stylesheet" href="./index.css" />
//   <style>
//    img {
//     width:100%;
//     max-width:300px;
//    }
//    input {
//     margin-bottom: 4px;
//    }
//   </style>
//   <script type="module" src="./index.js"></script>
//  </head>
//  <body>
  
//   <div id="root"></div>

//  </body>
// </html>

// /*----------------------------------------*/ JSX
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
 constructor() {
  super();
  this.state = { 
   text: "",
   desc: "" 
  }
 }

 handleChange = (e) => {
  this.setState({
   text: e.target.value
  });
 }

 submitDesc = () => {
  const t = this.state.text;
  this.setState({
   text: "",
   desc: t
  })
 }

 // Code {this.state.desc} inside <i></i> so that when the user clicks the submit button, 
 // it'll save and print the user's description onto the screen.
 render() {
  return (
   <div>
    <img src="https://mimo.app/i/salmon-dish.png" alt="Salmon" />
    <p>Enter a brief description of the image.</p>
    <input 
     type="text"
     name="desc"
     value={this.state.text}
     onChange={this.handleChange}
    />
    <button onClick={this.submitDesc}>
     Submit Description
    </button>
    <h5>Your Description:</h5>
    <p><i>{this.state.desc}</i></p>
   </div>
  );
 }
}

ReactDOM.render(
 <App />,
 document.getElementById("root")
);