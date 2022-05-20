// CLASS COMPONENT
// We've already created a object variable named movie that contains four properties: 
// language, genre, name, and image.
// We'll be working with this movie data throughout the project.

import React from "react";
import ReactDOM from "react-dom";

const movie = {
    language: "English",
    genre: "Horror",
    name: "The Haunting of Bly Manor",
    image: "https://mimo.app/i/haunting_poster.png",
};


// Define a render method in the class. 
// Inside that function, return null. We'll add more to it later.
// Nest an h1 element from the render method of App inside a div
// Inside the render method in App, 
// odify the h3 tag so that it renders the name prop.
class App extends React.Component {

    constructor(props) {
        super(props);
    }


// Inside of ReactDOM.render, add a new image attribute to <App />. 
// Use the image URL inside of the movie object as its value.
// Add a src attribute to the img tag that is set to the new image prop.
/*----------------------------------*/
// Add a brand new attribute named movie. Set its value to the movie object.
// Modify the prop values used in the render method in App to account for the changes above.
/*----------------------------------*/
// Modify the label element by adding a for attribute with a value of rating.
// Underneath the label element, add a select with both id and name set to rating. 
// Take a look at the hint if you need help with the select syntax.
// Inside the select element, add five option elements from values and text ranging from 5 to 1.

    render(){
        return (
          <div>
            <h1>Movie Info</h1>
            <h3>{this.props.movie.name}</h3>
            <ul>
                <li>{this.props.movie.genre}</li>
                <li>{this.props.movie.language}</li>
            </ul>
            <img 
                src={this.props.movie.image}
                alt={this.props.movie.name} 
            />

            <form>
                <label for='rating'>I rate this movie:</label>
                    <select id='rating' name='rating'>
                        <option value='5'>5</option>
                        <option value='4'>4</option>
                        <option value='3'>3</option>
                        <option value='2'>2</option>
                        <option value='1'>1</option>
                    </select>
            </form>
          </div>
        );
    }
   
}   
   
// ReactDOM.render(
//     <App name="The Haunting of the Bly Manor" 
//          genre="Comedy"
//          language="English"
//          image="https://mimo.app/i/haunting_poster.png"
//     />,
//     document.getElementById("root")
// );

ReactDOM.render(
    <App 
     movie={movie} //
    />,
    document.getElementById("root")
);

export { App };