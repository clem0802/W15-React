// Modify the constructor() of MyVideoPlayer so that the component can accept props. 
// Complete the this.prop code inside render() based on the attributes 
// provided by <MyVideoPlayer> in ReactDOM.render().

import React from "react";
import ReactDOM from "react-dom";

export default class MyVideoPlayer extends React.Component {
 constructor(props) {
  super(props);
 }
 render() {
    //   .title // .author // .thumbnail // .datePublished // .views  !!!!!
    const title = this.props .title;
    const author = this.props.author;
    const thumb = this.props.thumbnail;
    const publish = this.props.datePublished;
    const views = this.props.views;
  return (
   <div>
    <h2>{title}</h2>
    <div className="previewWindow">
     <img src={thumb} alt={title} />
     <img className="play" src="https://mimo.app/i/player-button-play.png" />
    </div>
    <h4>Video Details:</h4>
    <p className="views">{views} views</p>
    <p className="creator">By: {author}</p>
    <p className="publish">Published: {publish}</p>
   </div>
  );
 }
}

ReactDOM.render(
 <MyVideoPlayer 
    title="The Matrices: A Review" 
    author="ChrisReviews"
    thumbnail="https://mimo.app/i/chris.png" 
    datePublished="04/09/2022"
    views={142930}
 />,
 document.getElementById("root")
);