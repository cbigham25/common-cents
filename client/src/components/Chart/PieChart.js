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
            'rgba(0, 0, 235, 0.8)',
            'rgba(0, 0, 150, 0.8)',
            'rgba(0, 0, 200, 0.8)',
            'rgba(0, 0, 145, 0.8)',
            'rgba(0, 0, 235, 0.8)',
            'rgba(0, 0, 140, 0.8)',
            'rgba(0, 0, 230, 0.8)',
            'rgba(0, 0, 125, 0.8)',
            'rgba(0, 0, 160, 0.8)',
            'rgba(255, 0, 0, 0.8)',
            'rgba(150, 0, 0, 0.8)',
            'rgba(230, 0, 0, 0.8)',
            'rgba(173, 0, 0, 0.8)',
            'rgba(210, 0, 0, 0.8)',
            'rgba(115, 0, 0, 0.8)',
          ],
          borderColor: [
            'rgba(54, 1, 235, 1)',
            'rgba(54, 1, 235, 1)',
            'rgba(54, 1, 235, 1)',
            'rgba(54, 1, 235, 1)',
            'rgba(54, 1, 235, 1)',
            'rgba(54, 1, 235, 1)',
            'rgba(54, 1, 235, 1)',
            'rgba(54, 1, 235, 1)',
            'rgba(54, 1, 235, 1)',

            'rgba(255, 2, 1, 4)',
            'rgba(255, 2, 1, 4)',
            'rgba(255, 2, 1, 4)',
            'rgba(255, 2, 1, 4)',
            'rgba(255, 2, 1, 4)',
            'rgba(255, 2, 1, 4)',
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


