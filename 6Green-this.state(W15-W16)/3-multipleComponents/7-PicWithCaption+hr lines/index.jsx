import React from "react";
import ReactDOM from "react-dom";

import {
 PicWithCaption,
} from "./webElements";

const App = () => {
 return (
  <div>
    <PicWithCaption 
        img="https://mimo.app/i/forrest-walk.png"
        text="Walking through the woods"
    />
   <hr />
    <PicWithCaption 
        img="https://mimo.app/i/sea-of-clouds.png"
        text="Sea of Clouds"
    />
   <hr />
    <PicWithCaption 
        img="https://mimo.app/i/lakeside.png"
        text="Rock at the Lakeside"
    />
  </div>
 );
}

ReactDOM.render(
 <App />,
 document.getElementById("root")
);