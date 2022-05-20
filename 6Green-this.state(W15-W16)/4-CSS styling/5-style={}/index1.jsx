import React from "react";
import ReactDOM from "react-dom";


export const App = () => {
    const bold = {
    fontWeight: "bold"
    }
    const strikeThrough = {
    textDecoration: "line-through",
    };

//  Make the discounted price bold and style the old price with a strikethrough.
 return (
    <div>
        <p>
            This item is now on sale. It is now <span style={bold}>25.00</span> instead of
            <span style={strikeThrough}>40.00</span>. Only for a limited time!
        </p>
    </div>
 );
};

ReactDOM.render(<App />, document.getElementById("root"));