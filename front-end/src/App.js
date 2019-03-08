import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import SubmitProperty from './pages/SubmitProperty'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/submitproperty' component={SubmitProperty}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
