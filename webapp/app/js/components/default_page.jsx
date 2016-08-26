/** @jsx React.DOM */
window.app.components.DefaultPage = React.createClass({

  render: function(){
    var user = 'tjudkins'
    return (
      <div className="row">
        <div className="large-6 large-offset-3">
          <h2>Welcome to the {this.state.title} page!</h2>
          <window.app.components.MessagesContainer messages={this.state.messages} username={user} />
        </div>
      </div>
    );
  },
//  <MessagesContainer username={user}/>
  getInitialState: function(){
    return {
      title: "Default",
      messages: ['message 1', 'message 2']
    };
  },

  getMessages: function (user) {
    window.app.services.MessageService.get(user, function (data, error) {
      if (error) {
        alert("holy crap, something went wrong!!!");
      } else {
        this.setState(_.extend(this.state, {'messages': data}));
      }
    }).bind(this);
  }

});
