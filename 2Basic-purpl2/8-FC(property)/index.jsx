import React from "react";
import ReactDOM from "react-dom";

// Add a property nationality to the <App/> component.
const App = (props) => {
    return(
        <div>
            <h1>I am {props.nationality}</h1>
        </div>
    );
}

ReactDOM.render(
    <App 
        nationality="French"
    />,
    document.getElementById("root")
);

export default App;