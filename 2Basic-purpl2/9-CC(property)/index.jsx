import React from "react";
import ReactDOM from "react-dom";


// Add a property name to the <App/> component .
// Set your name as its value.
// Display the name property in the h1 element.
class App extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
            </div>
        );
    }
}

ReactDOM.render(
    <App 
        name="Clémence"
    />,
    document.getElementById("root")
);

export default App;