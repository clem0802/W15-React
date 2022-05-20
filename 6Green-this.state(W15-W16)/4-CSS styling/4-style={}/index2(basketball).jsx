// /*----------------------------------*/ INDEX.HTML
// <!doctype html>
// <html>
//  <head>
//    <link rel="stylesheet" href="./index.css" />
//    <script type="module" src="./index.js"></script>
//  </head>
//  <body>
//    <div id="root"></div>
//  </body>
// </html>


// /*----------------------------------*/ INDEX.JSX
// Stylize the <ul> element with a paddingLeft of 36px and marginTop of 0.

// const myStyles={}
// style={myStyles.image}
// style={myStyles.para}
// style={myStyles.list}

// we can also write => import "./style.css" and do all in a CSS file

import React from "react";
import ReactDOM from "react-dom";

const App = () => {
    const myStyles={
        image:{width:"100%"},
        para:{marginBottom:1},
        list:{paddingLeft:36, marginTop:0}
    }


    return(
        <div className="container">
            <img src="https://mimo.app/i/swoosh.png" alt="Basketball underneath a basketball hoop"
            style={myStyles.image}
            />

            <p style={myStyles.para}>The techniques used here are:</p>

            <ul style={myStyles.list}>
                <li>Rule of Thirds</li>
                <li>Depth of Field</li>
            </ul>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);