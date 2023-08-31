import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import Auth from '../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header>
      <Link to="/">
        <h1 >Common Cents</h1>
      </Link>
      {Auth.loggedIn() ? (
        <>
          <section className='dateInput'>
            <select name="months" id="months">
              <option value="01">
                January
              </option>
              <option value="02">
                February
              </option>
              <option value="03">
                March
              </option>
              <option value="04">
                April
              </option>
              <option value="05">
                May
              </option>
              <option value="06">
                June
              </option>
              <option value="07">
                July
              </option>
              <option value="08">
                August
              </option>
              <option value="09">
                September
              </option>
              <option value="10">
                October
              </option>
              <option value="11">
                November
              </option>
              <option value="12">
                December
              </option>
            </select>
            <input
              type="number"
              id="year"
              name="year"
              min="1900"
              max="2099"
              step="1"
              minLength="4"
              maxLength="4"
              required
            />
            <button>Go</button>
          </section>
          <div>
            <Link to="/me">
              {Auth.getProfile().data.username}'s profile
            </Link>
            <button onClick={logout}>
              Logout
            </button>
          </div>
        </>
      ) : (
        <>
          <div>
            <Link to="/login">
              Login
            </Link>
            <Link to="/signup">
              Signup
            </Link>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
