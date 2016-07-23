/** @jsx React.DOM */

window.app.components.HomePage = React.createClass({

  render: function(){
    return (
      <div className="row">
        <div className="large-6 large-offset-3">
          <h2>Welcome to the {this.getTitle()} page!</h2>

          <div className="alert-box">{this.getMessage()}</div>

          <ul className="small-block-grid-2">
            <li>
              <img className="th shows-message-when-hovered" src="img/demo1.jpg" onMouseOver={this.setMessage("I'm the first house.")} onMouseOut={this.restoreMessage()}/>
            </li>
            <li>
              <img className="th shows-message-when-hovered" src="img/demo2.jpg" onMouseOver={this.setMessage("I'm the second house.")} onMouseOut={this.restoreMessage()}/>
            </li>
          </ul>

          <div className="row">
            <div className="large-12 columns">
              <button className="button large expand radius logout" onClick={this.onLogOut}>Log Out</button>
            </div>
          </div>
        </div>
      </div>
    );
  },

  getInitialState: function(){
    return {
      page: new window.app.models.HomePage()
    };
  },

  getTitle: function(){
    return this.state.page.get('title');
  },

  getMessage: function(){
    return this.state.page.get('message');
  },

  onLogOut: function(){
    this.props.AuthenticationService.logout().done(this.onLogoutSuccess);
  },

  onLogoutSuccess: function(response) {
    Backbone.history.navigate('login', true);
  },

  setMessage: function(message) {
    return function(e){
      this.setState({
        page: new window.app.models.HomePage({message: message})
      });
    }.bind(this);
  },

  restoreMessage: function() {
    return function(e){
      this.setState({
        page: new window.app.models.HomePage()
      });
    }.bind(this);
  },

});
