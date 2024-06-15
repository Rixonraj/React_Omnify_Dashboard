import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import { Route, Routes } from 'react-router-dom';
import Orders from './components/Orders';
import Subscriptions from './components/Subscriptions';
import Calendar from './components/Calendar';
import Waitlist from './components/Waitlist';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 flex flex-col">
        <main className="flex-1 overflow-y-auto p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/subscriptions" element={<Subscriptions />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/waitlist" element={<Waitlist />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
