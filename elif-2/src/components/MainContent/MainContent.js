import React, { Component } from "react"
// now MainContent is direct-parent of "Profile"
// also, add <Profile/> inside the <div></div>
import Profile from "./Profile/Profile" 
import Form from "./Form/Form"

// to create a state, in a Class Componnet, to store info,
// we have to use constructor(), super(), this.state={} => OBJECT
// constructor(){
//     super()
//     this.state={*
//     }
// }
// inside state, they are just VARIABLES
export default class MainContent extends Component {
    constructor(){
        super()
        this.state={
            myName:"HHCC",
            age:47,
            urlOne:"https://picsum.photos/200/300",
            urlTwo:"https://mimo.app/i/cheesecake.png",
            quote: ""
        }
    }


changeAge = () => {
    this.setState({
        age:40,
        myName:"THTH"
    })
}

// this runs ONE 1 TIME, at the beginning
// it doesnt run again with the "setState" update (when update other buttons infos)
// we can use this to get infomation in the beginning, so the page is NOT BLANK
// componentDidMount() is only for Class Component
// open up F12 on localhost:3000 page to see how things go
componentDidMount(){
    console.log("Hi quote")
    fetch("https://quote-garden.herokuapp.com/api/v3/quotes")
    .then(response=>response.json())
    .then(data=>{
        this.setState({
            quote:data.data[0].quoteText
        })
        console.log(data.data[0].quoteText)
    })
}


    render() {
        return (
            <div className="main-container">
                MainContent
                <button onClick={this.changeAge}>change AGE</button>     
                <div>
                    <p>{this.state.quote}</p>
                    <p>{this.props.user}</p>
                    <p>{this.state.myName}</p>
                    <p>{this.state.age}</p>
                    <Profile url={this.state.urlOne}/>
                    <Profile url={this.state.urlTwo}/>
                    <Form/>
                </div>
            </div>
        )
    }
}