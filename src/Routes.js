import React from 'react';
import Layout from './Hoc/Layout';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './Components/authRoutes/privateRoutes';
import PublicRoute from './Components/authRoutes/publicRoutes';

import Home from './Components/home';
import SignIn from './Components/sign_in';

import Dashboard from './Components/admin/Dashboard';

const Routes = (props) => {


  return (
    <Layout>
      <Switch>

        <PrivateRoute {...props} exact path="/dashboard" component={Dashboard}/>
        <PublicRoute {...props} restricted={true}  exact path="/" component={Home}/>
        <PublicRoute {...props} restricted={true} exact path="/sign_in" component={SignIn}/>
      </Switch>
    </Layout>
  )
}

export default Routes;
