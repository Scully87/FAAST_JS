function Station() {
	this.trains=[];
};
function Train() {
	this.carriages=[]
};

Station.prototype.dock = function(train) {
	this.trains.push(train)
	return train;
};