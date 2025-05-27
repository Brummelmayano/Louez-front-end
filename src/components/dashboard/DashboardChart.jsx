import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Animation CSS pour le hover
const cardHoverClass =
  "hover:shadow-lg hover:-translate-y-1 hover:scale-[1.03] transition-all duration-200";

// Simple calendrier statique pour la démo
function DashboardCalendar() {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm ${cardHoverClass}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Calendrier</h3>
        <button className="text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:underline">Voir tout</button>
      </div>
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-medium text-gray-900 dark:text-gray-100">Juin 2023</h4>
          <div className="flex space-x-2">
            <button className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-gray-500 dark:text-gray-300 mb-2">
          <div>Lu</div><div>Ma</div><div>Me</div><div>Je</div><div>Ve</div><div>Sa</div><div>Di</div>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center">
          <div className="py-1 text-gray-400 dark:text-gray-500">29</div>
          <div className="py-1 text-gray-400 dark:text-gray-500">30</div>
          <div className="py-1 text-gray-400 dark:text-gray-500">31</div>
          <div className="py-1 text-gray-900 dark:text-gray-100">1</div>
          <div className="py-1 text-gray-900 dark:text-gray-100">2</div>
          <div className="py-1 text-gray-900 dark:text-gray-100">3</div>
          <div className="py-1 text-gray-900 dark:text-gray-100">4</div>
          <div className="py-1 text-gray-900 dark:text-gray-100">5</div>
          <div className="py-1 bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-200 rounded-full font-medium">6</div>
          <div className="py-1 bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-200 rounded-full font-medium">7</div>
          <div className="py-1 bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-200 rounded-full font-medium">8</div>
          <div className="py-1 bg-indigo-600 text-white rounded-full font-medium">9</div>
          <div className="py-1 text-gray-900 dark:text-gray-100">10</div>
          <div className="py-1 text-gray-900 dark:text-gray-100">11</div>
          <div className="py-1 text-gray-900 dark:text-gray-100">12</div>
          <div className="py-1 text-gray-900 dark:text-gray-100">13</div>
          <div className="py-1 text-gray-900 dark:text-gray-100">14</div>
          <div className="py-1 bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-200 rounded-full font-medium">15</div>
          <div className="py-1 bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-200 rounded-full font-medium">16</div>
          <div className="py-1 bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-200 rounded-full font-medium">17</div>
          <div className="py-1 text-gray-900 dark:text-gray-100">18</div>
          <div className="py-1 text-gray-900 dark:text-gray-100">19</div>
          <div className="py-1 text-gray-900 dark:text-gray-100">20</div>
          <div className="py-1 text-gray-900 dark:text-gray-100">21</div>
          <div className="py-1 text-gray-900 dark:text-gray-100">22</div>
          <div className="py-1 text-gray-900 dark:text-gray-100">23</div>
          <div className="py-1 text-gray-900 dark:text-gray-100">24</div>
          <div className="py-1 text-gray-900 dark:text-gray-100">25</div>
          <div className="py-1 bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-200 rounded-full font-medium">26</div>
          <div className="py-1 bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-200 rounded-full font-medium">27</div>
          <div className="py-1 bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-200 rounded-full font-medium">28</div>
          <div className="py-1 text-gray-900 dark:text-gray-100">29</div>
          <div className="py-1 text-gray-900 dark:text-gray-100">30</div>
          <div className="py-1 text-gray-400 dark:text-gray-500">1</div>
          <div className="py-1 text-gray-400 dark:text-gray-500">2</div>
        </div>
      </div>
      <div className="space-y-2 text-sm">
        <div className="flex items-center">
          <span className="w-3 h-3 bg-indigo-600 rounded-full mr-2"></span>
          <span className="text-gray-700 dark:text-gray-200">Réservations en cours</span>
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
          <span className="text-gray-700 dark:text-gray-200">Nouvelles réservations</span>
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
          <span className="text-gray-700 dark:text-gray-200">Maintenance prévue</span>
        </div>
      </div>
    </div>
  );
}

export default function DashboardChart() {
  const [period, setPeriod] = useState('Semaine');

  const data = {
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
    datasets: [
      {
        label: 'Revenus',
        data: [1200, 1900, 1500, 2100, 1800, 2300],
        borderColor: 'rgb(99, 102, 241)',
        backgroundColor: 'rgba(99,102,241,0.1)',
        tension: 0.4,
        pointRadius: 5,
        pointHoverRadius: 8,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: false },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: '#6366f1',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: '#fff',
        borderWidth: 1,
        padding: 12,
        caretSize: 8,
        caretPadding: 8,
        displayColors: false,
        animation: { duration: 300 }
      }
    },
    hover: { mode: 'nearest', intersect: true, animationDuration: 300 },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: '#e5e7eb', borderDash: [4, 4] },
        ticks: { color: '#6b7280' }
      },
      x: {
        grid: { display: false },
        ticks: { color: '#6b7280' }
      }
    },
    animation: {
      duration: 800,
      easing: 'easeOutQuart'
    }
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
      {/* Graphique */}
      <div className={`lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm ${cardHoverClass}`}>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Revenus</h3>
          <div className="flex space-x-2">
            {['Semaine', 'Mois', 'Année'].map((label) => (
              <button
                key={label}
                className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-150 ${
                  period === label
                    ? 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-200'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-indigo-800'
                }`}
                onClick={() => setPeriod(label)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
        <div className="h-64">
          <Line data={data} options={options} />
        </div>
      </div>
      {/* Calendrier */}
      <DashboardCalendar />
    </section>
  );
}