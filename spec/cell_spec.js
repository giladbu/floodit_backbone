describe("Cell", function() {
  var cell;

  describe("initialize", function() {
    describe("with no params", function() {
      beforeEach(function() {
	cell = new Cell();
      });
      it("should have default coordinates (0,0)", function() {
	expect(cell.x).toEqual(0);
	expect(cell.y).toEqual(0);
      });
    });
  });
});
