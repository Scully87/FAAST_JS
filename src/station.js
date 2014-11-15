function Station() {
	this.trains=[];
};

function Train() {
	this.carriages=["carriage1", "carriage2", "carriage3", "carriage4"]
};


Station.prototype.dock = function(train) {
	this.trains.push(train)
};

Station.prototype.release = function(train) {
	this.trains.splice(0,1)
};


