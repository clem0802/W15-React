import React from "react";
import ReactDOM from "react-dom";
import {PopularFruits} from "./PopularFruits";

export const App = () => {
    return(
        <div>
            <h1>Popular Fruits</h1>
            <ul>
                <PopularFruits name="Strawberries" />
                <PopularFruits name = "Apples" />
            </ul>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.getElementById("root")
);