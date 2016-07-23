describe "app.router", ->
  Given ->
      $('body').append('<div id="view"/>')
      @subject = new app.router({mountNode: document.getElementById('view')})

  # mostly just a sanity test to verify things in the test runner plumbing is hooked up
  describe "#login", ->
    Given -> spyOn(React, 'renderComponent')
    When  -> @subject.login()
    Then  -> expect(React.renderComponent).toHaveBeenCalled()
