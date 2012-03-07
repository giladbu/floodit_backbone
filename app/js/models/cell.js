// **This example illustrates how to use a Collection of Models to store data, and how to tie changes in those to a View.**
//
// _Working example: [3.html](../3.html)._  
// _[Go to Example 4](4.html)_
//
var Cell = Backbone.Model.extend({
  defaults: {
    x: 0,
    y: 0,
    color: 'green'
  },

  boardSize: function() {
    if (typeof this.collection != 'undefined') {
      return this.collection.boardSize;
    } else {
      return 12;
    }
  }
});
