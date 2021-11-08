import React from 'react';
import './App.css';
import Home from './pages/home';
import Login from './pages/user/login';
import ResetPassword from './pages/user/resetPassword';
import Register from './pages/user/register';
import PageNotFound from './pages/pageNotFound';
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/resetPassword" exact component={ResetPassword} />
        <Route path="/register" exact component={Register} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
