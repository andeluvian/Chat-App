
import React, { Component } from 'react';
import { Router, Route, Link, hashHistory } from 'react-router';

import io from 'socket.io-client';
import config from '../../config';

import Messages from '../Messages/Messages';
import ChatInput from '../ChatApp/ChatInput';


class ChatApp extends Component {



 socket = {};
   constructor(props) {
     super(props);
     this.state = { messages: [] };
     this.sendHandler = this.sendHandler.bind(this);

     // Connect to the server
     this.socket = io(config.api, { query: `username=${props.username}` }).connect();

     // Listen for messages from the server
     this.socket.on('server:message', message => {
       this.addMessage(message);
     });
   }




addMessage(message) {
   // Append the message to the component state
   const messages = this.state.messages;
   messages.push(message);
   this.setState({ messages });
 }
sendHandler(message) {
    const messageObject = {
      username: this.props.username,
      message
    };

    // Emit the message to the server
    this.socket.emit('client:message', messageObject);

    messageObject.fromMe = true;
    this.addMessage(messageObject);
  }


  render() {

<Messages messages={this.state.messages} />
    return (
      <div className="container">
            <h3>React Chat App</h3>
            <Messages messages={this.state.messages} />
            <ChatInput onSend={this.sendHandler} />
          </div>
    );
  }

}

export default ChatApp;