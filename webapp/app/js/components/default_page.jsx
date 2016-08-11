/** @jsx React.DOM */
window.app.components.DefaultPage = React.createClass({

  render: function(){
    var user = 'tjudkins'
    return (
      <div className="row">
        <div className="large-6 large-offset-3">
          <h2>Welcome to the {this.getTitle()} page!</h2>
          <window.app.components.MessagesContainer username={user} />
        </div>
      </div>
    );
  },
//  <MessagesContainer username={user}/>
  getInitialState: function(){
    return {
      page: new window.app.models.DefaultPage()
    };
  },

  getTitle: function(){
    return this.state.page.get('title');
  },

});
