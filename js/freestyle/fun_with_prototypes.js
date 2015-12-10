var Protos = function(status) {
	this.status = status;
};

Protos.prototype.get_status = function() {
	return this.status;
};

var zigg = new Protos('soldier');

console.log(zigg.get_status());


var terran = {
	status: 'machine'
};

console.log(Protos.prototype.get_status.apply(terran));