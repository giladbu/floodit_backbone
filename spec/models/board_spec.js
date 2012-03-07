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

  describe(".get_cell", function() {
    var cell;
    beforeEach(function() {
      cell = board.get_cell(2, 1);
    });

    it("should find a cell at coordinates x, y", function() {
      expect(cell.get('x')).toEqual(2);
      expect(cell.get('y')).toEqual(1);
    });
  });
});
