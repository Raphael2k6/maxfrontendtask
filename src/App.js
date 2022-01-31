import React, { Fragment } from 'react'
import './App.css';
import Login from './routes/login/Login'
import Dashboard from './routes/Dashboard/Dashboard';
import { BrowserRouter as Switch, Route } from 'react-router-dom';

function App() {
  return (
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
  );
}

export default App;
