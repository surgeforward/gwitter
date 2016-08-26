window.app.router = Backbone.Router.extend({
  routes: {
    "default" : "default",
    "login" : "login",
    "*path" : "default"
  },

  initialize: function(config){
    this.mountNode = config.mountNode;
  },

  default: function() {
    React.renderComponent(window.app.components.DefaultPage(), this.mountNode);
  },

  login: function() {
    React.renderComponent(window.app.components.LoginPage(), this.mountNode);
  }
});

$(function() {
  window.router = new window.app.router({
    mountNode: document.getElementById('view')
  });
  Backbone.history.start();
});
