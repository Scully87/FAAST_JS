function Station() {
	this.trains=[];
};
function Train() {};

Station.prototype.dock = function(train) {
	this.trains.push(train)
	return train;
};