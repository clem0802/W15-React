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
// -----------------------------------------(CSS)
// html {
//     font-family: sans-serif;
//    }
//    html,body {
//     padding:0;
//     margin:0;
//    }
//    body {
//     position:relative;
//     height:100%;
//     width:100%;
//     padding:40px;
//     box-sizing: border-box;
//     text-align: center;
//    }
//    h3 { 
//        margin-bottom:0px; 
//    }
//    p { 
//        margin-top:4px;
//    }

// -----------------------------------------(cf jsx6.jpg)
// -----------------------------------------(JSX)
// Modify incrementCount() so that the state value count is incremented by 10.
import React from "react";
import ReactDOM from "react-dom";

export default class Counter extends React.Component {
 constructor() {
  super();
  this.state = {
   count: 0
  }
 }

 componentDidMount() {
  this.incrementCount();
 }

 incrementCount = () => {
  this.setState({
   count: 10
  });
 }
 
 render() {
  return (
   <div>
    <p>The count is currently:</p>
    <h1>{this.state.count}</h1>
   </div>
  );
 }
}

ReactDOM.render(
 <Counter />,
 document.getElementById("root")
);