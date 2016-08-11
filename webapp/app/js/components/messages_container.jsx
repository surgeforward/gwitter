/** @jsx React.DOM */

window.app.components.MessagesContainer = React.createClass({

  render: function(){
    var user = this.props.username;
    console.log("username: " + user);
    var userMessages = this.getMessages(user);
    return (
      <div>
        <h1>User: {user}</h1>
        <window.app.components.MessagesList messages={userMessages}/>
      </div>
    );
  },


  getMessages: function(username) {
    //TODO: make this a service call instead of hardcoding
    console.log("got Username:" + username)
    return ['message 1','message 2','message 3']
  },

});
