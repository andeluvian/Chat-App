import React, {Component} from 'react';
import {Router, Route, Link, hashHistory} from 'react-router';

class Message extends Component {
    render() {
        // Was the message sent by the current user. If so, add a css class
        const myMessage = this.props.myMessage
            ? 'myMessage'
            : '';

        return (
            <div className={`message ${myMessage}`}>
                <div className='username'>
                    {this.props.username}
                </div>
                <div className='message-body'>
                    {this.props.message}
                </div>
            </div>
        );
    }
}

Message.defaultProps = {
    message: '',
    username: '',
    myMessage: false
};

export default Message;
