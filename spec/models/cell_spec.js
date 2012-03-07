describe("Cell", function() {
  var cell;

  describe("initialize", function() {
    describe("with no params", function() {
      beforeEach(function() {
	cell = new Cell();
      });
      it("should have default coordinates (0,0)", function() {
	expect(cell.get('x')).toEqual(0);
	expect(cell.get('y')).toEqual(0);
      });
      it("should have default color of green", function() {
	expect(cell.get('color')).toEqual('green');
      });
    });

    describe("with coordinates", function() {
      var x = 1;
      var y = 2;
      beforeEach(function() {
	cell = new Cell({x: x,y: y});
      });
      it("should have coordinates ("+x+","+y+")", function() {
	expect(cell.get('x')).toEqual(x);
	expect(cell.get('y')).toEqual(y);
      });
    });
  });
});
