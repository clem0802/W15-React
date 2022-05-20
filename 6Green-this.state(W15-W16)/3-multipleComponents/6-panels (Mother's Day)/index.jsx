import React from "react";
import ReactDOM from "react-dom";
import { Panel } from "./panels";

const App = () => {
    return(
        <div>
            <h1>Available Merchandise</h1>
            <Panel 
                url="https://mimo.app/i/mothers-day.png"
                description="Mother's Day Sale"
                price="$5.00"
            />
            <Panel 
                url="https://mimo.app/i/tiger.png"
                description="Mtiger Print"
                price="$17.50"
            />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);