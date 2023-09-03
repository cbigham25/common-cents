import React, { useEffect } from 'react';
import './chart.css'
import { Chart, ArcElement } from 'chart.js';
import { PieController } from 'chart.js';
Chart.register(PieController);
Chart.register(ArcElement);



const PieChart = () => {

  useEffect(() => {
    const ctx = document.getElementById('myPieChart').getContext('2d');
    if (window.myPieChart instanceof Chart) {
      window.myPieChart.destroy();
    }



    window.myPieChart = new Chart(ctx, {
      type: 'pie', // Set the chart type
      data: {
        labels: ['Red', 'Blue', 'Yellow'], // Label for each section
        datasets: [{
          data: [10, 20, 30], // Value for each section
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
        responsive: true
      }
    });

  }, []);

  return (
    <div>
      <canvas id="myPieChart"></canvas>
    </div>
  );
};

export default PieChart;


