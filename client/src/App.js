import logo from './logo.svg';
import './App.css';
import React from 'react';
import { LoginPage } from './components/Login/LoginPage';
import { SignUpPage } from './components/Signup/SignupPage';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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


  //app is defined but never used??
  function App() {
    return (
      <div className="App">
        <LoginPage />
        <SignUpPage />
      </div>
    );
  }
}


export default App;
