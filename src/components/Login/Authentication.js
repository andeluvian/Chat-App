
import React, { Component } from 'react';
import { Router, Route, Link, hashHistory } from 'react-router';
import ChatApp from '../ChatApp/ChatApp';

class Authentication extends Component {

  constructor(props) {
      super(props);
      // set the initial state of the application
      this.state = { username: '' };

      // bind the 'this' keyword to the event handlers
      this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
      this.usernameSubmitHandler = this.usernameSubmitHandler.bind(this);
    }


  usernameChangeHandler(event) {
    this.setState({ username: event.target.value });
  }

  usernameSubmitHandler(event) {
    event.preventDefault();
    this.setState({ submitted: true, username: this.state.username });
  }


  render() {
    if (this.state.submitted) {
          // Form was submitted, now show the main App
          return (
            <ChatApp username={this.state.username} />
          );
        }


    return (
      <form onSubmit={this.usernameSubmitHandler} className="username-container">
        <h1>React Instant Chat</h1>
        <div>
          <input
            type="text"
            onChange={this.usernameChangeHandler}
            placeholder="Enter a username..."
            required />
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Authentication;
