// src/pages/ProfilePage.jsx

import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProfileSidebar from '../components/profile/ProfileSidebar';
import ProfileHeader from '../components/profile/ProfileHeader';
import ProfilePersonalInfo from '../components/profile/ProfilePersonalInfo';
import ProfileDocuments from '../components/profile/ProfileDocuments';
import ProfilePayments from '../components/profile/ProfilePayments';
import ProfileReservations from '../components/profile/ProfileReservations';
import ProfileWishlist from '../components/profile/ProfileWishlist';
import ProfileSettings from '../components/profile/ProfileSettings';
import ProfileSecurity from '../components/profile/ProfileSecurity';
import ProfileLoyalty from '../components/profile/ProfileLoyalty';
import ProfileSupport from '../components/profile/ProfileSupport';

const SECTIONS = [
  { key: 'dashboard',   label: 'Tableau de bord' },
  { key: 'personal',    label: 'Infos personnelles' },
  { key: 'documents',   label: "Documents d'identité" },
  { key: 'payments',    label: 'Moyens de paiement' },
  { key: 'reservations',label: 'Réservations' },
  { key: 'wishlist',    label: 'Favoris' },
  { key: 'settings',    label: 'Paramètres' },
  { key: 'security',    label: 'Sécurité' },
  { key: 'loyalty',     label: 'Fidélité' },
  { key: 'support',     label: 'Support & Aide' },
];

export default function ProfilePage() {
  const { user, loading, logout } = useAuth();
  const [section, setSection] = useState('dashboard');
  const [menuOpen, setMenuOpen] = useState(false);

  if (loading) return <p className="pt-20 text-center text-gray-500">Chargement…</p>;
  if (!user) return <p className="pt-20 text-center text-red-500">Vous devez être connecté.</p>;

  return (
    <div className="pt-20 flex flex-col min-h-screen bg-background dark:bg-gray-900">
      <Header />

      <main className="flex flex-col lg:flex-row flex-1 max-w-7xl mx-auto w-full px-4 md:px-8 py-8 gap-8">
        {/* Menu mobile */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <span className="font-medium text-gray-700 dark:text-gray-200">
              {SECTIONS.find(s => s.key === section)?.label}
            </span>
            <svg
              className={`w-5 h-5 text-gray-500 dark:text-gray-400 transform transition-transform duration-300 ${
                menuOpen ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {menuOpen && (
            <ul className="mt-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm">
              {SECTIONS.map(s => (
                <li key={s.key}>
                  <button
                    onClick={() => {
                      setSection(s.key);
                      setMenuOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 ${
                      section === s.key
                        ? 'bg-gradient-to-r from-primaryGradientStart to-primaryGradientEnd text-white'
                        : 'text-gray-700 dark:text-gray-200'
                    }`}
                  >
                    {s.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Sidebar desktop */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <ProfileSidebar
            sections={SECTIONS}
            current={section}
            onChange={setSection}
          />
        </aside>

        {/* Contenu principal */}
        <section className="flex-1 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 transition-colors duration-300">
          <ProfileHeader
            user={user}
            onEdit={() => setSection('personal')}
            onLogout={logout}
          />

          <div className="mt-8 space-y-8">
            {section === 'dashboard' && (
              <>
                <ProfileLoyalty user={user} />
                <ProfileReservations user={user} limit={3} />
                <ProfileWishlist user={user} limit={4} />
              </>
            )}
            {section === 'personal'      && <ProfilePersonalInfo   user={user} />}
            {section === 'documents'     && <ProfileDocuments      user={user} />}
            {section === 'payments'      && <ProfilePayments       user={user} />}
            {section === 'reservations'  && <ProfileReservations   user={user} />}
            {section === 'wishlist'      && <ProfileWishlist       user={user} />}
            {section === 'settings'      && <ProfileSettings       user={user} />}
            {section === 'security'      && <ProfileSecurity       user={user} />}
            {section === 'loyalty'       && <ProfileLoyalty        user={user} />}
            {section === 'support'       && <ProfileSupport        user={user} />}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


