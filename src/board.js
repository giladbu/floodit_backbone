// **This example illustrates how to use a Collection of Models to store data, and how to tie changes in those to a View.**
//
// _Working example: [3.html](../3.html)._  
// _[Go to Example 4](4.html)_

//
// **List class**: A collection of `Cells`s
var Board = Backbone.Collection.extend({
  model: Cell,
  initialize: function(models, size){
    this.boardSize = size;
    for(var i=0; i < size; i++) {
      for(var j = 0 ; j < size; j++) {
	this.add(new Cell({x:i, y:j}));
      }
    }
  }
});
