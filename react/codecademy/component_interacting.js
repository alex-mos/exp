// Navbar.js

var React = require('react');

var NavBar = React.createClass({
	render: function () {
		var pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
		var navLinks = pages.map(function(page){
			return (
				<a href={'/' + page}>
					{page}
				</a>
			);
		});

		return <nav>{navLinks}</nav>;
	}
});

module.exports = NavBar;

// ProfilePage.js

var React = require('react');
var ReactDOM = require('react-dom');
var NavBar = require('./NavBar');

var ProfilePage = React.createClass({
	render: function () {
		return (
			<div>
				<NavBar />
				<h1>All About Me!</h1>
				<p>I like movies and blah blah blah blah blah</p>
				<img src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyselfie.jpg" />
			</div>
		);
	}
});

ReactDOM.render(
	<ProfilePage />,
	document.getElementById('app')
);