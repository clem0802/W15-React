// Functional Components are "stateless components", and more used in companies
// but there are some ways we can use "states" in FC, via "hooks"
// to import "hooks", we have to change this ORIGINAL line =>  import React from "react"
// import React, {useState} from "react"
// {useState} is the HOOK
// {useEffect} is another HOOK
// and create things (variables) inside the curly braces
// then go inside "return()"
// the <button></button> can change "Elif-Header"

import React, {useState,useEffect} from "react"

export default function Header(props) {

    //    this is a "STATE"
    //    (var)(function) (default&initial value of this user)
    const [user,setUser] = useState("Elif-Header")
    const [day,setDay] = useState("Thursday")
    const [quote,setQuote] = useState("Hi, for useEffect Quote")
    
    // to change it, create a button and give an onClick function
    // the function for this button, is to change "Elif-Header"
    // so we change "Elif-Header" to "Peter" (new value)
    const changeInfo = () => {
        setUser("Peter")
        setDay("Monday")
    }

    // useEffect, more useful than componentDidMount in CC
    useEffect(()=>{
        fetch("https://quote-garden.herokuapp.com/api/v3/quotes")
        .then(response=>response.json())
        .then(data=>{
            setQuote(data.data[0].quoteText)
            console.log(data.data[0].quoteText)
        })
    },[]) // => the [] very IMPORTANT


    return (
        <div className="header-container">
            {/* Header
            Welcome {props.user} 
            It is {props.day} */}
            <div>{quote}</div>
            {user} Today is {day}
            <button onClick={changeInfo}>change NAME</button>
        </div>
    )
}