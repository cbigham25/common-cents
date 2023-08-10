import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import React from 'react';
import LoginPage from './components/Login/LoginPage';
import SignUpPage from './components/Signup/SignupPage';
import BudgetForm from './components/Budget/Index'
import { useState } from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EditBudget from './components/Edit-Budget/editBudget';

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


// eslint-disabled just allows us to move forward for now by avoiding the ESlint warnings.
// We need to utilize these variables to make it functional
function App() {
  const [budgets, setBudgets] = useState([]);
  const [editingBudget, setEditingBudget] = useState(null); // eslint-disable-line no-unused-vars

  const handleBudgetSubmit = (newBudget) => { // eslint-disable-line no-unused-vars
    setBudgets([...budgets, newBudget]);
  };

  const handleEditBudget = (budget) => { // eslint-disable-line no-unused-vars
    setEditingBudget(budget);
  };

  const handleUpdateBudget = (updatedBudget) => { // eslint-disable-line no-unused-vars
    const updatedBudgets = budgets.map((b) =>
      b.id === updatedBudget.id ? updatedBudget : b
    );
    setBudgets(updatedBudgets);
    setEditingBudget(null);
  };
  return (<ApolloProvider client={client}>
    <Router>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={<BudgetForm />}
            />
            <Route 
              path="/edit/:budgetId"
              element={<EditBudget />}
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
      </div>
    </Router>
  </ApolloProvider>
  );
}



export default App;
