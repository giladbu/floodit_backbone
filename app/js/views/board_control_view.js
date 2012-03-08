var BoardControlView = Backbone.View.extend({    
  tagName: 'div', // attaches `this.el` to an existing element.
  className: 'row board_control',
  initialize: function() {
    _.bindAll(this, 'render'); // fixes loss of context for 'this' within methods

    this.render();
  },

  render: function() {
    var controls = $("<div class='row controls'/>");
    var colors = this.model.colors;
    var offset = Math.floor((12 - colors.length)/2);
    $(controls).addClass('span'+(colors.length + 1));
    if (offset > 0) {
      $(controls).addClass('offset'+offset);
    }
    for (var i=0 ; i <  colors.length ; i++) {
      var cell_view = new CellView(
        {
          model: new Cell({x: 0, y: i, color: colors[i]}),
          width: 1
        }
      );
      var $cell = cell_view.render();
      $(controls).append($cell);
    }
    $(this.el).append(controls);
    $('.container').prepend($(this.el));
  },
});