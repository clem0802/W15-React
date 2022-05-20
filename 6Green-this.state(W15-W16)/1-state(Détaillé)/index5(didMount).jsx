// -----------------------------------------(HTML)
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
// -----------------------------------------(CSS pas noté)

// -----------------------------------------(cf jsx5.jpg)
// -----------------------------------------(JSX)
// Inside this.setState() in the componentDidMount() method set the score to 9and the hint to Try jumping more.
import React from "react";
import ReactDOM from "react-dom";

export default class Scoreboard extends React.Component {
 constructor(props) {
  super(props);
  this.state = { 
   score:0,
   hint:"No hints"
  };
 }

 componentDidMount() {
  this.setState({
   score:9, // output on webpage
   hint:"Try jumping more" // output on webpage
  });
 }

 render() {
  return (
   <div>
    <h3>Score: {this.state.score}</h3>
    <p>{this.state.hint}</p>
   </div>
  );
 }
}

ReactDOM.render(
 <Scoreboard />, 
 document.getElementById("root")
);