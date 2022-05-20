import React from "react";
import ReactDOM from "react-dom";

const Menu = (props) => {
    return(
        <div>
            <h3>Today's menu is:</h3>
            <ul>
                <li>Starter:{props.starter}</li>
                <li>Main course:{props.main}</li>
            </ul>
        </div>
    );
}

ReactDOM.render(
    <Menu 
        starter="Salad"
        main="Pasta bolognese"
    />,
    document.getElementById("root")
);

export default Menu;