import React, {Component} from 'react';
import {Router, Route, Link, hashHistory} from 'react-router'
var signal = window.libsignal;
var KeyHelper = signal.KeyHelper;

class ChatInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chatInput: ''
        };

        // React ES6 does not bind 'this' to event handlers by default
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        // Stop the form from refreshing the page on submit
        e.preventDefault();

        // Clear the input box
        this.setState({chatInput: ''});

        // Call the onSend callback with the chatInput message
        console.log('key:'+localStorage.getItem("pubKey"));

        var plaintext = this.state.chatInput;

        console.log(localStorage);
        var sessionCipher = new signal.SessionCipher(localStorage, 1);
        sessionCipher.encrypt(plaintext).then(function(ciphertext) {
          console.log('chipher:',ciphertext.body)
          this.props.onSend(ciphertext.body);
          //handle(ciphertext.type, ciphertext.body);
        });


        //this.props.onSend(this.state.chatInput);
    }

    handleChange(e) {
        console.log(e.target.value);
        this.setState({chatInput: e.target.value});
    }

    render() {
        return (
            <form className="chat-input" onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleChange} value={this.state.chatInput} placeholder="Write something..." required/>
            </form>
        );
    }
}

ChatInput.defaultProps = {};

export default ChatInput;
