/** @jsx React.DOM */

window.app.components.MessagesContainer = React.createClass({

  render: function(){
    var user = this.props.username;
    var userMessages = getMessages(user);
    return (
      <div>
        <h1>User: {user}</h1>
        <MessagesList messages={userMessages}}/>
      </div>
    );
  },

  getMessages: function(username) {
    //TODO: get this from a service instead of hardcoding
    console.log("got Username:" + username)
    return ['message 1','message 2','message 3']
  },

});
