import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Icônes FontAwesome SVG (remplace les <i> par des SVG pour React)
const icons = {
  dashboard: (
    <svg className="h-5 w-5 mr-3 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
      <path d="M3 13h4v-2H3v2zm0 4h4v-2H3v2zm0-8h4V7H3v2zm6 8h8v-2H9v2zm0-4h8v-2H9v2zm0-8v2h8V5H9zm0 6h8v-2H9v2z" />
    </svg>
  ),
  biens: (
    <svg className="h-5 w-5 mr-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
      <path d="M2 13.5V7a2 2 0 012-2h12a2 2 0 012 2v6.5a2 2 0 01-2 2H4a2 2 0 01-2-2z" />
    </svg>
  ),
  reservations: (
    <svg className="h-5 w-5 mr-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
      <path d="M6 2a1 1 0 00-1 1v1H5a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2h-.001V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zM5 6h10v10H5V6z" />
    </svg>
  ),
  messages: (
    <svg className="h-5 w-5 mr-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
      <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm2 0v10h12V5H4zm2 2h8v2H6V7zm0 4h5v2H6v-2z" />
    </svg>
  ),
  avis: (
    <svg className="h-5 w-5 mr-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.462a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.388-2.462a1 1 0 00-1.175 0l-3.388 2.462c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z" />
    </svg>
  ),
  revenus: (
    <svg className="h-5 w-5 mr-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
      <path d="M11 17a1 1 0 01-2 0v-1H7a1 1 0 110-2h2v-2H7a1 1 0 110-2h2V7a1 1 0 112 0v2h2a1 1 0 110 2h-2v2h2a1 1 0 110 2h-2v1z" />
    </svg>
  ),
  factures: (
    <svg className="h-5 w-5 mr-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9 2a1 1 0 00-1 1v1H5a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2h-3V3a1 1 0 00-1-1H9zm0 2h2v1H9V4zm-2 3h6v2H7V7zm0 4h6v2H7v-2z" />
    </svg>
  ),
  paiements: (
    <svg className="h-5 w-5 mr-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
      <path d="M4 4h12a2 2 0 012 2v2H2V6a2 2 0 012-2zm14 4v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8h16zm-2 4a1 1 0 100-2 1 1 0 000 2z" />
    </svg>
  ),
  profil: (
    <svg className="h-5 w-5 mr-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 10a4 4 0 100-8 4 4 0 000 8zm-7 8a7 7 0 1114 0H3z" />
    </svg>
  ),
  settings: (
    <svg className="h-5 w-5 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  aide: (
    <svg className="h-5 w-5 mr-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
      <path d="M18 10c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zm-8 4a1 1 0 100-2 1 1 0 000 2zm1-7a1 1 0 10-2 0c0 .552.448 1 1 1s1 .448 1 1-.448 1-1 1a1 1 0 100 2 1 1 0 001-1c0-1.104-.896-2-2-2s-2 .896-2 2a1 1 0 102 0c0-.552-.448-1-1-1s-1-.448-1-1 .448-1 1-1a1 1 0 100-2z" />
    </svg>
  ),
};

const sections = [
  {
    title: 'Principal',
    items: [
      { label: 'Tableau de bord', icon: icons.dashboard, path: '/dashboard', active: true },
      { label: 'Mes biens', icon: icons.biens, path: '/dashboard/listings' },
      { label: 'Réservations', icon: icons.reservations, path: '/dashboard/reservations' },
      { label: 'Messages', icon: icons.messages, path: '/dashboard/messages', badge: 3 },
      { label: 'Avis', icon: icons.avis, path: '/dashboard/reviews' },
    ],
  },
  {
    title: 'Finances',
    items: [
      { label: 'Revenus', icon: icons.revenus, path: '/dashboard/finances' },
      { label: 'Factures', icon: icons.factures, path: '/dashboard/invoices' },
      { label: 'Paiements', icon: icons.paiements, path: '/dashboard/payments' },
    ],
  },
  {
    title: 'Paramètres',
    items: [
      { label: 'Profil', icon: icons.profil, path: '/dashboard/profile' },
      { label: 'Paramètres', icon: icons.settings, path: '/dashboard/settings' },
      { label: 'Aide', icon: icons.aide, path: '/dashboard/help' },
    ],
  },
];

export default function DashboardSidebar({ isOpen, onClose, user }) {
  const location = useLocation();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-50 z-20 lg:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-800 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 transition-transform duration-300 z-30 lg:z-0 lg:static`}
      >
        <div className="h-full flex flex-col">
          {/* Logo */}


          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-2">
            {sections.map((section) => (
              <div className="mb-6" key={section.title}>
                <h3 className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase">{section.title}</h3>
                {section.items.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`sidebar-item flex items-center px-4 py-3 rounded-lg mb-1 ${
                      location.pathname === item.path
                        ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200 font-semibold'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="ml-auto bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            ))}
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t dark:border-gray-700">
            <Link
              to="/dashboard/profile"
              className="flex items-center text-sm font-medium text-gray-900 dark:text-gray-200"
            >
              <img
                src={user?.avatar || '/default-avatar.png'}
                alt="Profile"
                className="h-8 w-8 rounded-full mr-3"
              />
              <span className="flex-1 truncate">
                {user?.first_name || 'Mon profil'}
              </span>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}