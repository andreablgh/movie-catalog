import React, { Component } from 'react';
import Main from './components/Main';
import Movie from './components/Movie';
import SignIn from './components/SignIn/SignIn';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Error from './components/Error'


class App extends Component {
  render() {
    return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Main}/>
            <Route path="/signin" component={SignIn}/>
            <Route path="/movies/:movie_id" component={Movie}/>
            <Route component={Error}/>
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
