import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import DashboardStats from '../components/dashboard/DashboardStats';
import DashboardChart from '../components/dashboard/DashboardChart';
import DashboardListings from '../components/dashboard/DashboardListings';
import DashboardReservations from '../components/dashboard/DashboardReservations';
import DashboardMessages from '../components/dashboard/DashboardMessages';
import DashboardFinance from '../components/dashboard/DashboardFinance';

export default function DashboardPage() {
  const { user } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <div className="flex">
        {/* Sidebar */}
        <DashboardSidebar 
          isOpen={isSidebarOpen} 
          onClose={() => setIsSidebarOpen(false)} 
          user={user}
        />

        {/* Main Content */}
        <main className="flex-1 p-6 lg:pl-64">
          <div className="max-w-7xl mx-auto">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden mb-4 p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800"
              onClick={() => setIsSidebarOpen(true)}
            >
              <span className="sr-only">Ouvrir le menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Dashboard Content */}
            <div className="space-y-6">
              <DashboardStats />
              <DashboardChart />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <DashboardListings />
                <DashboardReservations />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <DashboardMessages />
                <DashboardFinance />
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}