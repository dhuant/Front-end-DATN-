import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import SubmitProperty from './pages/SubmitProperty'
import Map from './pages/Map'
import Profile from './pages/Profile'
import Properties from './pages/Properties'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/submitproperty' component={SubmitProperty}/>
            <Route exact path='/maps' component={Map} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/properties' component={Properties} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
