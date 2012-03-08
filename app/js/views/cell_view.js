var CellView = Backbone.View.extend({
  tagName: 'div',
  className: 'cell',
  initialize: function (opts){
    _.bindAll(this, 'render'); // fixes loss of context for 'this' within methods
    this.width = opts.width;
    this.render();
  },

  render: function() {
    $(this.el).css('background-color', this.model.get('color'));
    $(this.el).addClass('span'+ this.width);
    $(this.el).html('&nbsp;');
    return $(this.el);
  }
});