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
    expect(station.trains.length).toEqual(1)
  });

});