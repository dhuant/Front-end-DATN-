import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Login2 from './pages/Login2';
import Home from './pages/Home';
import SubmitProperty from './pages/SubmitProperty'
import Map from './pages/Map'
import Profile from './pages/Profile'
import Properties from './pages/Properties'
import EstateList from './pages/EstateList'
import MyEstateList from './pages/MyEstateList'
import ChangePassword from './pages/ChangePassword'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/login2' component={Login2} />
            <Route exact path='/submitproperty' component={SubmitProperty}/>
            <Route exact path='/maps' component={Map} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/properties' component={Properties} />
            <Route exact path='/estatelist' component={EstateList} />
            <Route exact path='/myproperties' component={MyEstateList} />
            <Route exact path="/changepassword" component={ChangePassword}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
