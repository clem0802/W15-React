import React from "react";
import ReactDOM from "react-dom";

// Functional Component ("Testimonial")
export const Testimonial = (props) => {
	const title = props.title;
	const author = props.author;
    const date = props.date;
    const stars = props.stars;
    const content = props.content;
	return (
		<div className="card">
			<h2>{title}</h2>
			<h5>Submitted by {author} on {date}</h5>
            <h5>{stars} / 5 Stars</h5>
            <p>{content}</p>
		</div>
	);
}

class TestimonialCard extends React.Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		const title = this.props.title;
        const author = this.props.author;
        const date = this.props.date;
        const stars = this.props.stars;
        const content = this.props.content;
		
		return (
			<div className="card">
				<h2>{title}</h2>
                <h5>Submitted by {author} on {date}</h5>
                <h5>{stars} / 5 Stars</h5>
                <p>{content}</p>
			</div>
		);
	}
}

ReactDOM.render(
  <div>
    <Testimonial
      title="Great atmosphere!"
      author="Sheila S."
      date="11/10/20"
      stars={4}
      content="Great food, wait staff, and ambience. We'll be returning!"
    />
    <Testimonial
      title="Loved the Apps!"
      author="Kim Z."
      date="10/15/20"
      stars={3}
      content="The appetizers were fantastic, but the overall menu could be expanded."
    />
    <Testimonial
      title="Super Apps!"
      author="Clémence"
      date="02/28/22"
      stars={5}
      content="Everything is so so good!!"
    />
    <Testimonial
      title="Amazing Apps!"
      author="Isaac TAN"
      date="02/28/22"
      stars={5}
      content="Love it, will definitely recommend this!!"
    />
  </div>,
 document.getElementById("root")
);

export { TestimonialCard };