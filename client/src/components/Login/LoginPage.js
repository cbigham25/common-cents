import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import './login.css'

const LoginPage = () => {
  const [formState, setFormState] = useState({ username: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      username: "",
      password: "",
    });
  };

  return (
    <>
      {data ? (
        <p>
          Success!{" "}
          <Link to="/">back to the homepage.</Link>
        </p>
      ) : (
        <section className='loginFormContainer'>
          <form className='loginForm' onSubmit={handleFormSubmit}>
            <input
              className="form-input"
              placeholder="Your Username"
              name="username"
              type="text"
              value={formState.username}
              onChange={handleChange}
            />
            <br />
            <input
              className="form-input"
              placeholder="******"
              name="password"
              type="password"
              value={formState.password}
              onChange={handleChange}
            />
            <br />
            <button style={{ cursor: "pointer" }} type="submit">
              Login
            </button>
          </form>
          <section className='loginCreds'>
            <h1>Test credentials</h1>
            <p>Username: test</p>
            <p>Password: password</p>
          </section>
        </section>
      )}

      {error && <div>{error.message}</div>}
    </>
  );
};

export default LoginPage;
