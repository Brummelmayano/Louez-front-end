import React from 'react';
import { Line } from 'react-chartjs-2';

export default function DashboardChart() {
  const data = {
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
    datasets: [
      {
        label: 'Revenus',
        data: [1200, 1900, 1500, 2100, 1800, 2300],
        borderColor: 'rgb(99, 102, 241)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Évolution des revenus',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <section className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
        Évolution des revenus
      </h2>
      <div className="h-64">
        <Line data={data} options={options} />
      </div>
    </section>
  );
}