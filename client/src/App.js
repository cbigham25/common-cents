import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import React, { useState } from 'react';
import LoginPage from './components/Login/LoginPage';
import SignUpPage from './components/Signup/SignupPage';
import BudgetForm from './components/Budget/Budget'
import Header from './components/Header/header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export const DateContext = React.createContext();

// eslint-disabled just allows us to move forward for now by avoiding the ESlint warnings.
// We need to utilize these variables to make it functional
function App() {
  const [selectedDate, setSelectedDate] = useState({
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  });

  return (<ApolloProvider client={client}>
    <Router>
      <div className="flex-column justify-flex-start min-100-vh">
        <DateContext.Provider value={{ selectedDate, setSelectedDate }}>
          <Header onDateChange={setSelectedDate} />
          <div className="container">
            <Routes>
              <Route
                path="/"
                element={<BudgetForm selectedDate={selectedDate} />}
              />
              <Route
                path="/login"
                element={<LoginPage />}
              />
              <Route
                path="/signup"
                element={<SignUpPage />}
              />
            </Routes>
          </div>
        </DateContext.Provider>
      </div>
    </Router>
  </ApolloProvider>
  );
}



export default App;
