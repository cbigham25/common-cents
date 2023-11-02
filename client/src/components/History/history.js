import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const History = () => {
  const location = useLocation();

  useEffect(() => {
    console.log("location.state:", location.state);
    // accessing userExpenses
    if (location.state && location.state.userExpenses) {
      console.log("userExpenses:", location.state.userExpenses);
    }
  }, [location]);

  return <div>History</div>;
};

export default History;
