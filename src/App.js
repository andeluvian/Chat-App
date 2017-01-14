import React, {Component} from 'react';
import {
    Router,
    Route,
    Link,
    hashHistory,
    IndexRedirect,
    Redirect
} from 'react-router';
import Authentication from './components/Login/Authentication';
import ChatApp from './components/ChatApp/ChatApp';

class App extends Component {
    render() {
        return (

          //TODO: Create the routes of the application
            <Router history={hashHistory}>

                <Route path="/" component={Authentication}></Route>
                <Route path="/ChatApp" component ={ChatApp}></Route>
                <Redirect from="/" to="/ChatApp"/>

            </Router>
        );
    }
}

export default App;
