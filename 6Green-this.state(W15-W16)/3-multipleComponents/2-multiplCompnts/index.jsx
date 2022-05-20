// Components are usually separated and organized across multiple files. 
// Let's learn how to work with two components spread across two files.
// Take a look at the two files to see how we have App in index.jsx and MyImage in components.jsx.

import React from "react";
import ReactDOM from "react-dom";
// We can now import that component into another script and use it there. 
// Let's import it inside index.jsx.
// Code import {MyImage} from "./components". We don't need to add .jsx at the end.
// To import it inside another file we write the component name surrounded by braces {}
import {MyImage} from "./components";


// After importing a component, we can use it like normal.
// Below, add <MyImage /> to the content of App with name="backpack" as one of its attributes.
/*----------------------------------------*/
// A fundamental concept of React is the idea that components can be reused in different areas of an application. 
// Let's add a second image.
// Add another <MyImage /> element but this time with name attribute set to "eiffel".
const App = () => {
    return(
        <div>
            <h1>Welcom to my App</h1>
            <MyImage 
                name="backpack"
            />
            <MyImage 
                name="eiffel"
            />
            <MyImage 
                name="camera"
            />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);