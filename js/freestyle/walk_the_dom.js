// Define a walk_the_DOM function that visits every
// node of the tree in HTML source order, starting
// from some given node. It invokes a function,
// passing it each node in turn. walk_the_DOM calls
// itself to process each of the child nodes.

var walk_the_DOM = function walk(node, func) {
	func(node);
	node = node.firstChild();
	while (node) {
		walk(node, func);
		node = node.nextSibling;
	}
};

// Define a getElementsByAttribute function. It
// takes an attribute name string and an optional matching
// value. It calls walk_the_DOM, passing it a
// function that looks for attribute name in the node.
// The matching nodes are accumulated in a results array.

var getElementsByAttribute = function(att, value) {
	var results = [];

	walk_the_DOM(document.body, )
}