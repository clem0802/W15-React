// to create a component, toujours à l'intérieur et depuis "src" folder
// this component => file name 1st letter UPPERCASE

import React from "react"

export default function Footer(props) {
    return (
        <div className="footer-container">
            Footer
            {props.weather}
        </div>
    )
}