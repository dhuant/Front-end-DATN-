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
import EstateListGridView from './pages/EstateList_GridView'
import MyEstateList from './pages/MyEstateList'
import ChangePassword from './pages/ChangePassword'
import NotFound from './pages/404'
import test from './pages/test'
import HomeMap from './pages/Map/HomeMap'
import EstateListListView from './pages/EstateList_ListView'
import News from './pages/News'
import NewsDetail from './pages/NewsDetail' 
import MapOfDetail from './components/Properties/MapOfDetailEstate'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/test' component={test} />
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/login2' component={Login2} />
            <Route exact path='/submitproperty' component={SubmitProperty} />
            <Route exact path='/maps' component={Map} />
            <Route exact path='/profile/:id' component={Profile} />
            <Route exact path='/properties/:id' component={Properties} />
            <Route exact path='/estategridview' component={EstateListGridView} />
            <Route exact path='/estatelistview' component={EstateListListView} />
            <Route exact path='/myproperties' component={MyEstateList} />
            <Route exact path="/changepassword" component={ChangePassword} />
            <Route exact path="/news" component={News} />
            <Route exact path="/news/:id" component={NewsDetail} />
            <Route exact path='/properties' component={Properties} />
            <Route exact path='/homemaps' component={HomeMap} />
            <Route exact path='/demo' component={MapOfDetail}/>
            <Route  path='' component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
