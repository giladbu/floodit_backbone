var Board = Backbone.Collection.extend({
  model: Cell,
  initialize: function(models, size){
    this.boardSize = size;
    for(var i=0; i < size; i++) {
      for(var j = 0 ; j < size; j++) {
	this.add(new Cell({x:i, y:j}));
      }
    }

    this.comparator = function(cell) {
      return -1 * (cell.get('x') * this.boardSize + cell.get('y'));
    }
  },

  get_cell: function(x, y) {
    return this.at (x * this.boardSize + y);
  }
});
