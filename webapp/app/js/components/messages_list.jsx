/** @jsx React.DOM */

window.app.components.MessagesList = React.createClass({

  render: function(){
    var messages = this.props.messages.map(function(message){
      return <li> {message} </li>
    });
    return (
      <ul>
        {messages}
      </ul>
    );
  },
});
