import React from 'react';
import { Router, Link } from '@reach/router';
import logo from './logo.svg';
import './App.css';

// INDEX_ROUTE refers to the base path on github pages https://pages.github.com/
// include the INDEX_ROUTE in the Router basepath, and in Link "to" URI props.
// this is a hack for gh-pages.
const INDEX_ROUTE = '/web-dev-101';

let Home = () => (
  <>
    <p>Edit <code>src/App.js</code> and save to reload.</p>
    <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    <Link to={`${INDEX_ROUTE}/dash`}>Dashboard</Link>
  </>
);

let Dashboard = () => <p>Dashboard</p>;

function App() {
  return (
    <div className="App">
      <Link to={INDEX_ROUTE}>Home</Link>
      <Link to={`${INDEX_ROUTE}/dash`}>Dashboard</Link>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Router basepath={INDEX_ROUTE}>
          <Home path="/" />
          <Dashboard path="/dash" />
        </Router>
      </header>
    </div>
  );
}

export default App;
