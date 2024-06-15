import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiBriefcase, FiMapPin, FiClock, FiPackage, FiCalendar, FiGrid, FiUser, FiHelpCircle } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import logo from '../Assets/logo.png'
import dp from '../Assets/lowres.png'
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigateTo = useNavigate();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`bg-gray-100 text-gray-800 h-screen flex flex-col transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'}`}>
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <div className="flex items-center">
          <button className="text-xl font-bold focus:outline-none" onClick={() => navigateTo('/')}>
            <img src={logo} alt="Logo" className={`w-8 h-8 rounded-full ${isOpen ? 'inline' : 'hidden'}`} />
          </button>
          <div className={`ml-2 ${isOpen ? 'inline' : 'hidden'}`}>
            <h1 className="text-xl font-semibold">Front-Desk</h1>
          </div>
        </div>
        <button className="text-gray-600 focus:outline-none" onClick={toggle}>
          {isOpen ? <FiChevronLeft className="h-6 w-6" /> : <FiChevronRight className="h-6 w-6" />}
        </button>
      </div>
      {!isOpen && (
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <div className="flex items-center">
            <button className="text-xl font-bold focus:outline-none" onClick={() => navigateTo('/')}>
              <img src={logo} alt="Company Logo" className={`w-8 h-8 rounded-full`} />
            </button>
            {/* <FiMapPin className="text-gray-600 ml-2" /> */}
          </div>
          <button className="text-gray-600 focus:outline-none" onClick={toggle}>
            {/* <FiChevronRight className="h-6 w-6" /> */}
          </button>
        </div>
      )}
      <div className={`ml-4 ${isOpen ? 'block' : 'hidden'}`}>
        <div className="flex items-center space-x-1 text-sm">
          <FiMapPin className="text-gray-600" />
          <span>India</span>
          <span className="mx-1">|</span>
          <FiClock className="text-gray-600" />
          <span>+5:30</span>
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul className="mt-6">
          <li className="mb-4">
            <button className="flex items-center text-gray-600 hover:text-gray-900 focus:outline-none" onClick={() => navigateTo('/')}>
              <FiBriefcase className="h-6 w-6" />
              <span className={`${isOpen ? 'ml-2' : 'hidden'}`}>Dashboard</span>
            </button>
          </li>
          <li className="mb-4">
            <button className="flex items-center text-gray-600 hover:text-gray-900 focus:outline-none" onClick={() => navigateTo('/orders')}>
              <FiPackage className="h-6 w-6" />
              <span className={`${isOpen ? 'ml-2' : 'hidden'}`}>Orders</span>
            </button>
          </li>
          <li className="mb-4">
            <button className="flex items-center text-gray-600 hover:text-gray-900 focus:outline-none" onClick={() => navigateTo('/subscriptions')}>
              <FiPackage className="h-6 w-6" />
              <span className={`${isOpen ? 'ml-2' : 'hidden'}`}>Subscriptions</span>
            </button>
          </li>
          <li className="mb-4">
            <button className="flex items-center text-gray-600 hover:text-gray-900 focus:outline-none" onClick={() => navigateTo('/calendar')}>
              <FiCalendar className="h-6 w-6" />
              <span className={`${isOpen ? 'ml-2' : 'hidden'}`}>Calendar</span>
            </button>
          </li>
          <li className="mb-4">
            <button className="flex items-center text-gray-600 hover:text-gray-900 focus:outline-none" onClick={() => navigateTo('/waitlist')}>
              <FiGrid className="h-6 w-6" />
              <span className={`${isOpen ? 'ml-2' : 'hidden'}`}>Waitlist</span>
            </button>
          </li>
        </ul>
      </nav>
      {/* Profile section */}
      <div className="px-4 py-3 border-t flex items-center space-x-3">
        <div className="flex-shrink-0">
          <img src={dp} alt="Profile" className={`w-10 h-10 rounded-full ${isOpen ? 'inline' : 'hidden'}`} />
        </div>
        <div className={`text-sm font-medium ${isOpen ? 'inline' : 'hidden'}`}>Rixon Raj</div>
      </div>
      {/* Help Center */}
      <div className="px-4 py-3 border-t">
        <button className="flex items-center text-gray-600 text-xs hover:text-gray-900 focus:outline-none">
          <FiHelpCircle className="h-4 w-4 mr-1 inline" />
          Help Center
        </button>
      </div>
      {/* Minimize button */}
      {!isOpen && (
        <div className="px-4 py-3 border-t">
          <button className="text-gray-600 focus:outline-none" onClick={toggle}>
            <FiChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
