/** @jsx React.DOM */

window.app.components.LoginPage = React.createClass({

  render: function(){
    return (
      <div className="row">
        <div className="large-6 large-offset-3">
          <form ref="loginForm">
            <fieldset className="radius">
              <div className="row">
                <div className="large-6 columns">
                  <input type="text" name="username" placeholder="username" onChange={this.onChangeUsername} required="true"/>
                </div>
                <div className="large-6 columns">
                  <input type="password" name="password" placeholder="password" onChange={this.onChangePassword} required="true"/>
                </div>
              </div>

              <div className="row">
                <div className="large-12 columns">
                  <button type="submit" className="button large expand radius" onClick={this.onSubmit}>Log In</button>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    );
  },

  getInitialState: function(){
    return {
      username: '',
      password: ''
    };
  },

  componentDidMount: function(){
    var form = this.refs.loginForm.getDOMNode();
    form.onsubmit = function(e){
      e.preventDefault();
    }
  },

  isFormValid: function(){
    var form = this.refs.loginForm.getDOMNode();
    return form.checkValidity();
  },

  onChangeUsername: function(event){
    this.setState({username: event.target.value});
  },

  onChangePassword: function(event){
    this.setState({password: event.target.value});
  },

  onSubmit: function(event){
    if(this.isFormValid())
      this.props.AuthenticationService.login(this.state).success(this.onLoginSuccess);
  },

  onLoginSuccess: function(){
    Backbone.history.navigate('home', true);
  }

});
