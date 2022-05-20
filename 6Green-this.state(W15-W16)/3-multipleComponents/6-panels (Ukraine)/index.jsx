
import React from "react";
import ReactDOM from "react-dom";
import { Panel } from "./panels";

const App = () => {
    return(
        <div>
            <h1>Stand with Ukraine</h1>
            <Panel 
                url="https://en.wikipedia.org/wiki/Day_of_the_National_Flag_(Ukraine)#/media/File:Flag_of_Ukraine.jpg"
                description="Ukraine's National Flag"
                support="100%"
            />
            <Panel 
                url="https://www.civitatis.com/fr/kiev/visite-escale-kiev/"
                description="Cathédrale Sainte-Sophie"
                support="100%"
            />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);