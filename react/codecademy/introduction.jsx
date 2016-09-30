var React = require('react');
var ReactDOM = require('react-dom');

// Copy code here:
ReactDOM.render(
	<h1>Hello world</h1>,
	document.getElementById('app')
);


var h1 = <h1>Hello world</h1>;




// Write code here:
var myList = (
	<ul>
		<li>mindmap</li>
		<li>main questions</li>
		<li>code</li>
	</ul>
);

ReactDOM.render(
	myList,
	document.getElementById('app')
);



var myDiv = <div className="big">I AM A BIG DIV</div>;

ReactDOM.render(myDiv, document.getElementById(app));

// ---------

ReactDOM.render(
	<h1>2 + 3</h1>,
	document.getElementById('app')
);



// ----------

var math = <h1>2 + 3 = {2 + 3}</h1>;

// --------

function makeDoggy (e) {
	// Call this extremely useful function on an <img>.
	// The <img> will become a picture of a doggy.
	e.target.setAttribute('src', 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg');
	e.target.setAttribute('alt', 'doggy');
}

var kitty = (
	<img
		onClick={makeDoggy}
		src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg"
		alt="kitty" />
);

ReactDOM.render(kitty, document.getElementById('app'));

// -------- if

function coinToss () {
	// This function will randomly return either 'heads' or 'tails'.
	return Math.random() < 0.5 ? 'heads' : 'tails';
}

var pics = {
	kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
	doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
};

// if/else statement begins here:
if (coinToss() === 'heads') {
	var img = <img src={pics.kitty} />
} else {
	var img = <img src={pics.doggy} />
}

ReactDOM.render(img, getElementById('app'));

// ----------- ternary

function coinToss () {
	// Randomly return either 'heads' or 'tails'.
	return Math.random() < 0.5 ? 'heads' : 'tails';
}

var pics = {
	kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
	doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
};

var img = <img src={pics[coinToss() == 'heads' ? 'kitty' : 'doggy']} />;

ReactDOM.render(
	img,
	document.getElementById('app')
);

// ------------ &&

var judgmental = Math.random() < 0.5;

var favoriteFoods = (
	<div>
		<h1>My Favorite Foods</h1>
		<ul>
			<li>Sushi Burrito</li>
			<li>Rhubarb Pie</li>
			{!judgmental && <li>Nacho Cheez Straight Out The Jar</li>} // услование && выражение, если выполняется условие
			<li>Broiled Grapefruit</li>
		</ul>
	</div>
);

var tasty = (
	<ul>
		<li>Applesauce</li>
		{ !baby && <li>Pizza</li> }
		{ age > 15 && <li>Brussels Sprouts</li> }
		{ age > 20 && <li>Oysters</li> }
		{ age > 25 && <li>Grappa</li> }
	</ul>
);

ReactDOM.render(
	favoriteFoods,
	document.getElementById('app')
);

// map

var people = ['Rowe', 'Prevost', 'Gare'];

var peopleLIs = people.map(function(person, i){
	// return statement goes here:
	return <li key={'person_' + i}>{person}</li>
});

// ReactDOM.render goes here:
ReactDOM.render(<ul>{peopleLIs}</ul>, document.getElementById('app'));