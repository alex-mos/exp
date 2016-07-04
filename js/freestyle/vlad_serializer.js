var _ = require('underscore');

var data = [
  { name: "a", value: "1" },
  { name: "b", value: "2" },
  { name: "c", value: "3" },
  { name: "d", value: "4" },
  { name: "e", value: "5" }
];

Array.prototype.jsonFormat = function (obj) {
	obj = obj || {};

	_.map(this, function (item) {
		return obj[item.name] = item.value;
 	});

	return obj;
};


console.log(data.jsonFormat());