window.app.router = Backbone.Router.extend({
  routes: {
    "default" : "default",
    "*path" : "default"
  },

  initialize: function(config){
    this.mountNode = config.mountNode;
  },

  default: function() {
    React.renderComponent(window.app.components.DefaultPage({
      GenericService: window.app.services.GenericService
    }), this.mountNode);
  },
});

$(function() {
  window.router = new window.app.router({
    mountNode: document.getElementById('view')
  });
  Backbone.history.start();
});
