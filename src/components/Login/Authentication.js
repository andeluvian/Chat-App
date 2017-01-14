import React, {Component} from 'react';
import {Router, Route, Link, hashHistory} from 'react-router';
import ChatApp from '../ChatApp/ChatApp';
require('../../styles/Authentication.css');
require('../../styles/Login.css');


class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };

    // Bind 'this' to event handlers. React ES6 does not do this by default
    this.changeUser = this.changeUser.bind(this);
    this.submitUsername = this.submitUsername.bind(this);
  }

  changeUser(event) {
    this.setState({ username: event.target.value });
  }

  submitUsername(event) {
    event.preventDefault();
    this.setState({ submitted: true, username: this.state.username });
  }

  render() {
    if (this.state.submitted) {
      // Form was submitted, now show the main view
      return (
        <ChatApp username={this.state.username} />
      );
    }

    // Initial page load, show a simple login form
    return (
      <form onSubmit={this.submitUsername} className="username-container">
        <h1>React Instant Chat</h1>
        <div>
          <input
            type="text"
            onChange={this.changeUser}
            placeholder="Enter a username..."
            required />
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }

}
Authentication.defaultProps = {
};

export default Authentication;
