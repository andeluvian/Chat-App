import React, {Component} from 'react';
import {Router, Route, Link, hashHistory} from 'react-router';
import Message from './Message';
var signal = window.libsignal;

class Messages extends Component {
    componentDidUpdate() {
        // There is a new message in the state, scroll to bottom of list
        const objDiv = document.getElementById('messageList');
        objDiv.scrollTop = objDiv.scrollHeight;
    }

    render() {
        // Loop through all the messages in the state and create a Message component
        const messages = this.props.messages.map((message, i) => {
          //decrypt the message
          var sessionCipher = new signal.SessionCipher(localStorage, 1);
            sessionCipher.decryptWhisperMessage(message.message).then(function(plaintext) {
              message.message = plaintext;
            });
            return (<Message key={i} username={message.username} message={message.message} myMessage={message.myMessage}/>);
        });

        return (
            <div className='messages' id='messageList'>
                {messages}
            </div>
        );
    }
}

Messages.defaultProps = {
    messages: []
};

export default Messages;
