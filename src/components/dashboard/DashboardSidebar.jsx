import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
	{
		label: 'Tableau de bord',
		icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
		path: '/dashboard',
	},
	{
		label: 'Annonces',
		icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
		path: '/dashboard/listings',
		badge: '12',
	},
	{
		label: 'Réservations',
		icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
		path: '/dashboard/reservations',
		badge: '3',
	},
	{
		label: 'Messages',
		icon: 'M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4',
		path: '/dashboard/messages',
		badge: '5',
	},
	{
		label: 'Finances',
		icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
		path: '/dashboard/finances',
	},
	{
		label: 'Paramètres',
		icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
		path: '/dashboard/settings',
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
			<div
				className={`fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-800 transform ${
					isOpen ? 'translate-x-0' : '-translate-x-full'
				} lg:translate-x-0 transition-transform duration-300 z-30 lg:z-0 lg:static`}
			>
				<div className="h-full flex flex-col">
					{/* Logo */}
					<div className="flex items-center justify-between h-16 px-4 border-b dark:border-gray-700">
						<Link to="/" className="flex items-center">
							<span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
								Louez
							</span>
						</Link>
						<button
							className="lg:hidden p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
							onClick={onClose}
						>
							<span className="sr-only">Fermer le menu</span>
							<svg
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>

					{/* Navigation */}
					<nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
						{menuItems.map((item) => (
							<Link
								key={item.path}
								to={item.path}
								className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg ${
									location.pathname === item.path
										? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200'
										: 'text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
								}`}
							>
								<svg
									className="mr-3 h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d={item.icon}
									/>
								</svg>
								{item.label}
								{item.badge && (
									<span className="ml-auto inline-block py-0.5 px-2 text-xs font-medium rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200">
										{item.badge}
									</span>
								)}
							</Link>
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
								{user?.name || 'Mon profil'}
							</span>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}