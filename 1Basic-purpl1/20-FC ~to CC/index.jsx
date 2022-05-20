// Convert the App class from a Functional Component into a Class Component. 
// Modify App so that it returns the provided JSX with render().


// import React from "react";
// import ReactDOM from "react-dom";

// const App  {

//   return (
//    <div>
//     <h3>Top Scores:</h3>
//     <ol>
//      <li>Sarah: 50 Points</li>
//      <li>Anna: 48 Points</li>
//      <li>Mark: 12 Points</li>
//     </ol>
//    </div>
//   );

// }

// ReactDOM.render(
//  <App />,
//  document.getElementById("root")
// );

// export default App;

/*-----------------------------------*/ 
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
 render(){
  return (
   <div>
    <h3>Top Scores:</h3>
    <ol>
     <li>Sarah: 50 Points</li>
     <li>Anna: 48 Points</li>
     <li>Mark: 12 Points</li>
    </ol>
   </div>
  );
}
}

ReactDOM.render(
 <App />,
 document.getElementById("root")
);
export default App;