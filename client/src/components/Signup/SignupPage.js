import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const SignUpPage = () => {

  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });

  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };


  const handleSignUp = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };


  return (
    <>
      {data ? (
        <p>
          Success!{" "}
          <Link to="/">Back to the homepage.</Link>
        </p>
      ) : (
        <form onSubmit={handleSignUp}>
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
            Signup
          </button>
        </form>
      )}

      {error && <div>{error.message}</div>}
    </>
  );
};

export default SignUpPage;