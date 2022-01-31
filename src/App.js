import React, { Fragment } from 'react'
import './App.css';
import Login from './routes/login/Login'
import Dashboard from './routes/Dashboard/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
