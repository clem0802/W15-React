// create react functional component => rcc
// in a class component, we have to use "this." to get the "props"
// CC is an older way to write React
// to create a component, toujours à l'intérieur et depuis "src" folder
// this component => file name 1st letter UPPERCASE

import React, { Component } from "react"

export default class MainContent extends Component {


    render() {
        return (
            <div className="main-container">
                MainContent
                <div>
                    <p>{this.props.user}</p>
                </div>
            </div>
        )
    }
}