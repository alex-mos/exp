/*** My ***/

//var ArrowFunc = (arr) => arr.map((item) => String.fromCharCode(item)).join('');

/*** Best ***/

var ArrowFunc = arr => String.fromCharCode.apply(null, arr);

/*** Usage ***/

console.log(ArrowFunc([70,85,83,32,82,79,72,32,68,65,72]));