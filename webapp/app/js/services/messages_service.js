window.app.services.MessagesService = {
  // these routes are configured in config/server.js
  getMessages: function (user, cb) {
    $.getJSON(window.config.serviceuri + '/messages/' + user, function (data) {
      if (data.error) {
        cb(null, data.error);
      } else {
        cb(data);
      }
    });
  }
};
