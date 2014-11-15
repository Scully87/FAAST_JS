describe('Station', function() {

	beforeEach(function(){
		station = new Station;
		train = new Train;
	});

	it('should be able to hold trains', function() {
		expect(station.trains).toEqual([])
	});

	it('should know how many trains it has', function () {
    expect(station.trains.length).toEqual(0)
    station.dock(train)
    station.dock(train)
    expect(station.trains.length).toEqual(2)
  });

  it('should be able to dock a train', function() {
		station.dock(train)
		expect(station.trains.length).toEqual(1)
	});

  it('should be able to release', function() {
  	station.dock(train)
  	station.release(train)
  	expect(station.trains.length).toEqual(0);
  });

  it("should know which trains it's docking", function() {
  	station.dock(train)
  	station.dock(train)
  	expect(station.op);
  }); 

});