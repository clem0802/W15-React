// create react functional component => rfc
// to create a component, toujours à l'intérieur et depuis "src" folder
// this component => file name 1st letter UPPERCASE
// props is kind of "DOM"
// FC is a more modern way to write React

import React from "react"

export default function Header(props) {
    return (
        <div className="header-container">
            Header
            Welcome {props.user} 
            It is {props.day}
        </div>
    )
}