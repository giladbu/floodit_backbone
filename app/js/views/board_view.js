var BoardView = Backbone.View.extend({    
  el: $('container-fluid'), // attaches `this.el` to an existing element.

  initialize: function {
    _.bindAll(this, 'render'); // fixes loss of context for 'this' within methods

    this.render();
  },

  render: function() {
    for (var i=0 ; i < this.model.boardSize ; i++) {
      var row = $("<div class='row-fluid'/>");
      for (var j=0 ; j < this.model.boardSize; j++) {
        var cell_view = new CellView({model: this.model.get_cell(i, j)});
        cell_view.render();
      }
      $(this.el).append(row);
    }
  },
});
