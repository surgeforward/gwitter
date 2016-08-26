/** @jsx React.DOM */

window.app.components.MessagesContainer = React.createClass({

  render: function(){
    var user = this.props.username;
    console.log("username: " + user);
    return (
      <div>
        <h1>User: {user}</h1>
        <window.app.components.MessagesList messages={this.props.messages}/>
      </div>
    );
  }

});
