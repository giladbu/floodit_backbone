var CellView = Backbone.View.extend({
  tagName: 'div' 
  initialize: function {
    _.bindAll(this, 'width', 'render'); // fixes loss of context for 'this' within methods

    this.render();
  },

  width: function() {
    return 12 / this.model.collection.boardSize;
  }
  render: function() {
    $(this.el).css('background', this.model.get('color'));
    $(this.el).css('background', this.model.get('color'));
    $(this.el).addClass('span'+ this.width());
    $(this.el).height($(this.el).width());
    return $(this.el);
  }
});