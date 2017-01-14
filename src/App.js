import React, { Component } from 'react';
import { Router, Route, Link, hashHistory, IndexRedirect } from 'react-router';
import Authentication from './components/Login/Authentication';
import ChatApp from './components/ChatApp/ChatApp';



class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>

            <Route path="/" component={Authentication}>
                {/* <IndexRoute socket={socket} component={Configuration}></IndexRoute>
                <Route path="/configuration" socket={socket} component={Configuration}></Route>
                <Route path="/CameraCalibration" component={CameraCalibration}></Route>
                <Route path="/Logs" component={Logs}></Route>
                <Route socket={socket} path="/Live" component={LiveData}></Route> */}
            </Route>
            {/* <Route path="/login" component={Authentication}></Route>
            <Redirect from="/" to="/main"/> */}

        </Router>
    );
  }
}

export default App;
