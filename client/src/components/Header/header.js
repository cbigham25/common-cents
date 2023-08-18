import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import './header.css'
import Auth from '../utils/auth'

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header>
      <div >
        <div>
          <Link to="/">
            <h1 >Common Cents</h1>
          </Link>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                Login
              </Link>
              <Link to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
