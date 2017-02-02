import React, {Component} from 'react';
import {Router, Route, Link, hashHistory} from 'react-router'

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
        this.props.onSend(this.state.chatInput);
    }

    handleChange(e) {
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
