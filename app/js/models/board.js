var Board = Backbone.Collection.extend({
  colors: ['blue', 'green', 'red', 'yellow', 'purple'],
  model: Cell,
  initialize: function(models, size){
    this.boardSize = size;
    for(var i=0; i < size; i++) {
      for(var j = 0 ; j < size; j++) {
        index = Math.floor(Math.random()*this.colors.length);
	this.add(new Cell({x:i, y:j, color: this.colors[index]}));
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
