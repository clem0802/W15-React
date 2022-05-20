import React from "react";
import ReactDOM from "react-dom";

// add an <img> inside the "Country" component
const Country = (props) => {

    return(
        <div>
            <h1>France</h1>
            <p>The capital is Paris</p>
            <img src="https://mimo.app/i/eiffel.png" />
        </div>
    );
}

ReactDOM.render(
    <Country />,
    document.getElementById("root")
);

export default Country;