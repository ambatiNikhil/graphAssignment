import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ['Stock'],
  datasets: [
    {
      label: 'Brown Rice',
      data: [25],
      backgroundColor: '#006400',
      barThickness: 25,
    },
    {
      label: 'Bomba Rice',
      data: [20],
      backgroundColor: '#013220',
      barThickness: 25,
    },
    {
      label: 'Basmathi Rice',
      data: [30],
      backgroundColor: '#00FF00',
      barThickness: 25,
    },
    {
      label: 'Black Rice',
      data: [15],
      backgroundColor: '#90EE90',
      barThickness: 25,
    },
    {
      label: 'Auromatic Rice',
      data: [10],
      backgroundColor: '#32CD32',
      barThickness: 25,
    },
  ],
};

const options = {
  indexAxis: 'y', // This makes the chart horizontal
  plugins: {
    legend: {
      display: true,
      position: 'right',
    },
    title: {
      display: true,
      text: 'Stock',
    },
  },
  scales: {
    x: {
      beginAtZero: true,
      stacked: true,
      title: {
        display: true,
        text: 'No. of Bags',
      },
    },
    y: {
      stacked: true,
    },
  },
};

const StackedBarChart = () => {
  return <Bar data={data} options={options} />;
};

export default StackedBarChart;
