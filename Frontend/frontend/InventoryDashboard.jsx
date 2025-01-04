import React, { useState } from 'react';
import { Search, Bell, User } from 'lucide-react';

const InventoryDashboard = () => {
  const [userName, setUserName] = useState("John Doe");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-blue-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Left side - Logo and primary navigation */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-xl font-bold">TelecomIMS</h1>
              </div>
              
              {/* Main Navigation */}
              <div className="hidden md:block ml-10">
                <div className="flex space-x-4">
                  <button className="px-3 py-2 rounded-md hover:bg-blue-700">
                    Dashboard
                  </button>
                  <button className="px-3 py-2 rounded-md hover:bg-blue-700">
                    Inventory
                  </button>
                  <button className="px-3 py-2 rounded-md hover:bg-blue-700">
                    Reports
                  </button>
                </div>
              </div>
            </div>

            {/* Center - CRUD Buttons */}
            <div className="hidden md:flex space-x-2">
              <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md font-medium">
                Add
              </button>
              <button className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-md font-medium">
                Edit
              </button>
              <button className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md font-medium">
                Delete
              </button>
            </div>

            {/* Right side - Search, Notifications, and User Info */}
            <div className="flex items-center space-x-4">
              {/* Search Bar */}
              <div className="relative w-48 md:w-64">
                <input
                  type="text"
                  className="w-full bg-blue-500 text-white placeholder-blue-200 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-white"
                  placeholder="Search inventory..."
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-blue-200" />
              </div>

              {/* Notifications */}
              <button className="p-2 hover:bg-blue-700 rounded-full">
                <Bell className="h-5 w-5" />
              </button>

              {/* User Profile */}
              <div className="flex items-center space-x-2">
                <span className="hidden md:block">Hi, {userName}</span>
                <User className="h-8 w-8 bg-blue-500 rounded-full p-1" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Hero Section with Background Image */}
        <div className="relative h-96 rounded-xl overflow-hidden mb-6">
          <img
            src="/api/placeholder/1200/400"
            alt="Telecom Equipment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-transparent flex items-center">
            <div className="text-white px-8">
              <h2 className="text-4xl font-bold mb-4">
                Telecom Inventory Management System
              </h2>
              <p className="text-xl mb-6">
                Efficiently manage your telecom assets in one place
              </p>
              <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50">
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Quick Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Total Items</h3>
            <p className="text-3xl font-bold text-blue-600">1,234</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Low Stock Items</h3>
            <p className="text-3xl font-bold text-yellow-500">45</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Recent Updates</h3>
            <p className="text-3xl font-bold text-green-500">28</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InventoryDashboard;
