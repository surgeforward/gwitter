window.app.router = Backbone.Router.extend({
  routes: {
    "login" : "login",
    "home"  : "home",
    "*path" : "login"
  },

  initialize: function(config){
    this.mountNode = config.mountNode;
  },

  login: function() {
    React.renderComponent(window.app.components.LoginPage({
      AuthenticationService: window.app.services.AuthenticationService
    }), this.mountNode);
  },

  home:  function() {
    React.renderComponent(window.app.components.HomePage({
      AuthenticationService: window.app.services.AuthenticationService
    }), this.mountNode);
  }
});

$(function() {
  window.router = new window.app.router({
    mountNode: document.getElementById('view')
  });
  Backbone.history.start();
});
