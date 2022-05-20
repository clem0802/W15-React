import React from "react";
import ReactDOM from "react-dom";
import { MyStyles } from "./MyStyles.jsx"

// <p style={MyStyles.paragraph}> => 1royalblue.jpg
// <p style={MyStyles.featured}> => 2magenta.jpg
export const App = () => {
    return (
        <div>
            <h2 style={MyStyles.header2}>Latest News</h2>
            <p style={MyStyles.paragraph}>
                Still on the hung for the perfect gift? 
                Here are some last-minute ideas.
            </p>
        </div>
    )
}

ReactDOM.render(
    <App />, 
    document.getElementById("root")
);