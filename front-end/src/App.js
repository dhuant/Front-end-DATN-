import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, } from 'react-router-dom';
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
import EditUI from './components/My Properties/EditUI'
import MyFollowing from './pages/MyFollowing'
import MyTransaction from './pages/MyTransaction'
import TransHistory from './pages/TransHistory'
import VerticalLinearStepper from '../src/components/Profile/VerticalLinearStepper'
import Stepper from '../src/components/Profile/Stepper'
import TransactionDetail from './pages/TransactionDetail'
import WaitingRequest from './pages/WaitingRequest'

import VerifyEmployee from './pages/Verify/VerifyEmployee'
import VerifyCompany from './pages/Verify/VerifyCompany'
import ForgotPasswordEmployee from './pages/Employee/ForgotPasswordEmployee'

//import component agent
import ListAgents from './pages/Contact/ListAgents'
import ListCompaies from './pages/Contact/ListCompanies'
import AgentDetail from './pages/Contact/AgentDetail'
import CompanyDetail from './pages/Contact/CompanyDetail'
//==============
//=====import component cho company
import LoginCompany from './pages/Company/LoginCompany'
import ProfileAdmin from './pages/Company/ProfileAdmin'
import ListEmployees from './pages/Company/ListEmployees'
import AddAccount from './pages/Company/AddAccount'
import ChangePasswordCompany from './pages/Company/ChangePasswordCompany'
import ForgotPasswordCompany from './pages/Company/ForgotPasswordCompany'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/test' component={test} />
            <Route exact path='/' component={HomeMap} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/login2' component={Login2} />
            <Route exact path='/submitproperty' component={SubmitProperty} />
            <Route exact path='/maps' component={Map} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/properties/:id' component={Properties} />
            <Route exact path='/estategridview' component={EstateListGridView} />
            <Route exact path='/estatelistview' component={EstateListListView} />
            <Route exact path='/myproperties' component={MyEstateList} />
            <Route exact path="/changepassword" component={ChangePassword} />
            <Route exact path="/news" component={News} />
            <Route exact path="/news/:id" component={NewsDetail} />
            <Route exact path='/properties' component={Properties} />
            {/* <Route exact path='/homemaps' component={HomeMap} /> */}
            <Route exact path='/demo' component={MapOfDetail} />
            <Route exact path='/myproperties/edit/:id' component={EditUI} />
            <Route exact path='/myfollowing' component={MyFollowing} />
            <Route exact path='/mytransactions' component={MyTransaction} />
            <Route exact path='/mytransactions/123' component={TransactionDetail} />
            <Route exact path='/transhistory' component={TransHistory} />
            <Route exact path='/waiting' component={WaitingRequest} />
            <Route exact path='/progress' component={Stepper} />

            <Route exact path='/verifyemployee/:idc/:ide/:hash'component={VerifyEmployee}/>
            <Route exact path='/verifycompany/:id/:hash'component={VerifyCompany}/>

            <Route exact path='/forgotpassword' component={ForgotPasswordEmployee}/>
            {/* Agent */}
            <Route exact path='/agents' component={ListAgents}/>
            <Route exact path='/companies' component={ListCompaies}/>
            <Route exact path='/agentdetail/:id' component={AgentDetail}/>
            <Route exact path='/companydetail' component={CompanyDetail}/>
            {/* ---------- */}
            {/* Route cho company */}

            <Route exact path='/company/login' component={LoginCompany} />
            <Route exact path='/company/profile-admin' component={ProfileAdmin} />
            <Route exact path='/company/add-account-employee' component={AddAccount}/>
            <Route exact path='/company/list-employees' component={ListEmployees}/>
            <Route exact path='/company/changepassword' component={ChangePasswordCompany}/>
            <Route exact path='/company/forgotpassword' component={ForgotPasswordCompany}/>
            {/* End route cho company */}
            <Route exact path='' component={NotFound} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
