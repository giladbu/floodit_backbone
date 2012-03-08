var BoardView = Backbone.View.extend({    
  el: $('.container'), // attaches `this.el` to an existing element.
  className: 'board',
  initialize: function() {
    _.bindAll(this, 'render'); // fixes loss of context for 'this' within methods
    
    this.render();
  },

  render: function() {
    new BoardControlView({model: this.model});
    for (var i=0 ; i < this.model.boardSize ; i++) {
      var row = $("<div class='row'/>");
      for (var j=0 ; j < this.model.boardSize; j++) {
        var cell_view = new CellView(
          {
            model: this.model.get_cell(i, j),
            width: 12 / this.model.boardSize
          }
        );
        $(row).append(cell_view.render());
      }
      $(this.el).append(row);
    }
  },
});
