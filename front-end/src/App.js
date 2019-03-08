import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' component={Login} />
            
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
