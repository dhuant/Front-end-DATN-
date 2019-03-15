import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import SubmitProperty from './pages/SubmitProperty'
import Map from './pages/Map'
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
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
