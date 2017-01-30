var React = require('react');
var ReactDOM = require('react-dom');

var MyComponentClass = React.createClass({
	render: function () {
		return <h1>Hello world</h1>;
	}
});

ReactDOM.render(
	<MyComponentClass />,
	document.getElementById('app')
);

// ---

var CitateGenerator = React.createClass ({
	render: function () {
		return (
			<blockquote>
				<p>
					What is important now is to recover our senses.
				</p>
				<cite>
					<a target="_blank"
					   href="http://bit.ly/1LvSLUA">
						Susan Sontag
					</a>
				</cite>
			</blockquote>
		)
	}
});

ReactDOM.render(
	<CitateGenerator />,
	document.getElementById('app')
);

// ---

var redPanda = {
	src: 'http://bit.ly/1U92LL3',
	alt: 'Red Panda',
	width: '200px'
};

var RedPanda = React.createClass({
	render: function () {
		return (
			<div>
				<h1>Cute Red Panda</h1>
				<img
					src={redPanda.src}
					alt={redPanda.alt}
					width={redPanda.width} />
			</div>
		);
	}
});

ReactDOM.render(
	<RedPanda />,
	document.getElementById('app')
);

// ---

var friends = [
	{
		title: "Yummmmmmm",
		src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyweirdo.jpg"
	},
	{
		title: "Hey Guys!  Wait Up!",
		src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-earnestfrog.jpg"
	},
	{
		title: "Yikes",
		src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-alpaca.jpg"
	}
];

// New component class starts here:
var Friend = React.createClass({
	render: function () {
		var friend = friends[0];

		return (
			<div>
				<h1>{friend.title}</h1>
				<img src={friend.src} />
			</div>
		)
	}
});

ReactDOM.render(
	<Friend />,
	document.getElementById('app')
);

// ---

var MyName = React.createClass({
	// name property goes here:
	name: 'Alexander Mospan',

	render: function () {
		return <h1>My name is {this.name}</h1>;
	}
});

ReactDOM.render(<MyName />, document.getElementById('app'));

// --- Event handler

var Button = React.createClass({
	scream: function () {
		alert('AAAAAAAAHHH!!!!!');
	},

	render: function () {
		return <button onClick={this.scream}>AAAAAH!</button>;
	}
});

ReactDOM.render(
	<Button />,
	document.getElementById('app')
);

// ---



