import React from "react";
import ReactDOM from "react-dom";

const App = (props) => {
    const content = (<img src="https://mimo.app/i/bubu.png"/>);;
    return(
        <div>
            {content}
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);

export default App;