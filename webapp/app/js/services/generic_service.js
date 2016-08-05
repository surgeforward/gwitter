window.app.services.GenericService = {
  // these routes are configured in config/server.js
  login: function(credentials) {
    return $.post('/login', credentials);
  },
  logout: function() {
    return $.post('/logout');
  }
};
