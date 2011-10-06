describe("Board", function() {
  var board;
  var size = 3;

  beforeEach(function() {
    board = new Board(size)
  });

  it("should have a size " + size, function() {
    expect(board.size).toEqual(size);
  });

//  it("should have " + size + "x" + size + " cells", function() {
//    expect(board.length).toEqual(size*size);
//  });
});
