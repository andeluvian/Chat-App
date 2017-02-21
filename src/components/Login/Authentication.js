import React, {Component} from 'react';
import {Router, Route, Link, hashHistory} from 'react-router';
import ChatApp from '../ChatApp/ChatApp';
import SignalProtocolStore from './InMemorySignalProtocolStore.js';
//require('./InMemorySignalProtocolStore.js');
require('../../styles/Authentication.css');
require('../../styles/Login.css');

var signal = window.libsignal;
var KeyHelper = signal.KeyHelper;
var store = new SignalProtocolStore();
var keyId = 1;


class Authentication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        };

        // Bind 'this' to event handlers. React ES6 does not do this by default
        this.changeUser = this.changeUser.bind(this);
        this.submitUsername = this.submitUsername.bind(this);


    }

    changeUser(e) {
        this.setState({username: e.target.value});
    }

    submitUsername(e) {
        e.preventDefault();
        this.setState({submitted: true, username: this.state.username});



        var registrationId = KeyHelper.generateRegistrationId();

//          KeyHelper.generateIdentityKeyPair().then(function(identityKeyPair){
//
//           var int32 = new Uint8Array(identityKeyPair.pubKey);
//           var int23 = new Uint8Array(identityKeyPair.privKey);
//           console.log(int32);
//           console.log(int23);
// window.localStorage.setItem("public_key", identityKeyPair.pubKey)
//     window.localStorage.setItem("private_key", identityKeyPair.privKey)
//         });
//
//
console.log(registrationId);

        KeyHelper.generateIdentityKeyPair().then(function(identityKeyPair) {
            // keyPair -> { pubKey: ArrayBuffer, privKey: ArrayBuffer }
            // Store identityKeyPair somewhere durable and safe.
            KeyHelper.generateSignedPreKey(identityKeyPair, keyId).then(function(signedPreKey) {


                store.storeSignedPreKey(signedPreKey.keyId, signedPreKey.keyPair);
console.log(signedPreKey);

            });
console.log(identityKeyPair);

        });

        KeyHelper.generatePreKey(keyId).then(function(preKey) {
            store.storePreKey(preKey.keyId, preKey.keyPair);

console.log(preKey);
        });
console.log(keyId);



      //  Register preKeys and signedPreKey with the server

    }

    render() {
        if (this.state.submitted) {
            // Form was submitted, now show the main view
            return (<ChatApp username={this.state.username}/>);
        }

        // Initial page load, show a simple login form
        return (
            <form onSubmit={this.submitUsername} className="username-container">
                <h1>React Instant Chat</h1>
                <div>
                    <input type="text" onChange={this.changeUser} placeholder="Enter a username..." required/>
                </div>
                <input type="submit" value="Submit"/>
            </form>
        );
    }

}
Authentication.defaultProps = {};

export default Authentication;
