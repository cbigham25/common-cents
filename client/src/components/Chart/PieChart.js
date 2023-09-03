import React, { useEffect } from 'react';
import './chart.css'
import { Chart, ArcElement, Tooltip, PieController } from 'chart.js';
Chart.register(PieController);
Chart.register(ArcElement);
Chart.register([Tooltip]);


const PieChart = ({ aggregatedExpenses }) => {

  useEffect(() => {
    const ctx = document.getElementById('myPieChart').getContext('2d');
    if (window.myPieChart instanceof Chart) {
      window.myPieChart.destroy();
    }



    window.myPieChart = new Chart(ctx, {
      type: 'pie', // Set the chart type
      data: {
        labels: ['Rent', 'Utilities', 'Taxes', 'Insurance', 'Bills', 'Health', 'Groceries', 'Debt', 'Other Needs', 'Dining', 'Fun', 'Products', 'Clothing', 'Vacation', 'Other Wants'],
        datasets: [{
          data: [aggregatedExpenses.Rent, aggregatedExpenses.Utilities, aggregatedExpenses.Taxes, aggregatedExpenses.Insurance, aggregatedExpenses.Bills, aggregatedExpenses.Health, aggregatedExpenses.Groceries, aggregatedExpenses.Debt, aggregatedExpenses.OtherNeeds, aggregatedExpenses.Dining, aggregatedExpenses.Fun, aggregatedExpenses.Products, aggregatedExpenses.Clothing, aggregatedExpenses.Vacation, aggregatedExpenses.OtherWants], // Value for each section
          backgroundColor: [
            'rgba(255, 99, 132, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 206, 86, 0.8)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          tooltip: {
            enabled: true,
          },
        },
      }      
    });

  }, [aggregatedExpenses]);

  return (
    <div>
      <canvas id="myPieChart"></canvas>
    </div>
  );
};

export default PieChart;


