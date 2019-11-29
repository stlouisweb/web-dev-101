import React from 'react';
import { Router, Link } from '@reach/router';
import logo from './logo.svg';
import './App.css';

let Home = () => <p>Edit <code>src/App.js</code> and save to reload.</p>;
let Dashboard = () => <p>Dashboard</p>;

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/dash">Dashboard</Link>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Router>
          <Home path="/" />
          <Dashboard path="/dash" />
        </Router>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
