import React, {Component} from 'react';
import {Router, Route, Link, hashHistory} from 'react-router';
import ChatApp from '../ChatApp/ChatApp';

require('../../styles/Authentication.css');
require('../../styles/Login.css');

var signal = window.libsignal;
var KeyHelper = signal.KeyHelper;
let keyId = Math.floor((Math.random() * 10) + 0);





class Authentication extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: ''
        };

        // Bind 'this' to event handlers. React ES6 does not do this by default
        this.changeUser = this.changeUser.bind(this);
        this.submitUsername = this.submitUsername.bind(this);
        //aishu
        //localStorage.getIdentityKeyPair = function(){return 'sunil'};

    }

    changeUser(e) {
        this.setState({username: e.target.value});
    }

    submitUsername(e) {
        e.preventDefault();
        this.setState({submitted: true, username: this.state.username});
        let registrationId = KeyHelper.generateRegistrationId()
        localStorage.setItem('RegistrationId', registrationId)
        localStorage.setItem('username', this.state.username)





     KeyHelper.generateIdentityKeyPair().then((identityKeyPair)=>{
          var int32 = new Uint8Array(identityKeyPair.pubKey);
          var int23 = new Uint8Array(identityKeyPair.privKey);

        localStorage.setItem('pubKey', JSON.stringify(int32));
        localStorage.setItem('privKey',JSON.stringify(int23));
        });

var arr1 =localStorage.getItem('privKey');
var arr2 = localStorage.getItem('pubKey');
var a1 = new Uint8Array(arr1);
var a2 = new Uint8Array(arr2);

let identityKeyPair ={
pubKey: a2.buffer,
privKey: a1.buffer

};

console.log(identityKeyPair);

// let storage = () =>{
//
// let preKey;
//
// let first = () =>{
//
// let registrationId = KeyHelper.generateRegistrationId()
// localStorage.setItem('RegistrationId', registrationId)
// localStorage.setItem('username', this.state.username)
//
// let second = () =>{
//
// let identityKeyPair = KeyHelper.generateIdentityKeyPair().then((identityKeyPair)=>{
//   var int32 = new Uint8Array(identityKeyPair.pubKey);
//   var int23 = new Uint8Array(identityKeyPair.privKey);
//
// localStorage.setItem('identityKeyPair',JSON.stringify({pubKey: int32, privKey: int23}));
// });
//
// }
//
// let third = () =>{
//
//   let preKey = KeyHelper.generatePreKey(keyId).then(function(preKey) {
//       localStorage.setItem('preKey', JSON.stringify({keyId: preKey.keyId, keyPair: preKey.keyPair}));
//   });
//
// }
// let fourth =() =>{
// let identityKeyPair = JSON.parse(localStorage.getItem('identityKeyPair'))
//
// let signedPreKey = KeyHelper.generateSignedPreKey(identityKeyPair, keyId).then(function(signedPreKey) {
//
//   localStorage.setItem('signedPreKey', JSON.stringify({keyId: signedPreKey.keyId, keyPair: signedPreKey.keyPair}));
//
// });
// }
//
//
// }      }
    }

    componentWillMount() {}

    componentDidMount() {}

    render() {
        if (this.state.submitted) {
            // Form was submitted, now show the main view
            return (<ChatApp username={this.state.username}/>);
        }

        // Initial page load, show a simple login form
        return (
            <form onSubmit={this.submitUsername} className="username-container">
                <h1>Instant Chat Login</h1>
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
