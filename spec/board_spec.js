describe("Board", function() {
  var board;
  var size = 3;

  beforeEach(function() {
    board = new Board([],size)
  });

  it("should have a board_size " + size, function() {
    expect(board.boardSize).toEqual(size);
  });

  it("should have " + size + "x" + size + " cells", function() {
    expect(board.length).toEqual(size*size);
  });
});
